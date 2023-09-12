/* eslint-disable react/no-this-in-sfc */
import { Unstable_Grid2 as Grid, CardActions } from '@mui/material'
import PropTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query'
import { downloadAPI, swingModuleAPI } from '@/apis'
import { downloadFile } from '@/utils'
import {
  Card,
  PieChart,
  DetailButton,
  ColChart,
  TitleData,
} from '@/components'

const displayLegend = {
  young: '首投族（20-24歲）', stillYoung: '青壯年（25-34歲）', notReallyYoung: '壯年族（35-49歲）', startToGetOld: '中年族（50-64歲）', old: '老年族（65歲以上）',
}

const partyHistoricalDataPropTypes = {
  value: PropTypes.arrayOf(PropTypes.number),
  year: PropTypes.arrayOf(PropTypes.number),
}

const CompetitionRowThreePropTypes = {
  voterProfile: PropTypes.shape({
    '20-24': PropTypes.number,
    '25-29': PropTypes.number,
    '30-34': PropTypes.number,
    '35-39': PropTypes.number,
    '40-44': PropTypes.number,
    '45-49': PropTypes.number,
    '50-54': PropTypes.number,
    '55-59': PropTypes.number,
    '60-64': PropTypes.number,
    '65-69': PropTypes.number,
    '70-74': PropTypes.number,
    '75-79': PropTypes.number,
    '80-84': PropTypes.number,
    '85-89': PropTypes.number,
    '90-94': PropTypes.number,
    '95-99': PropTypes.number,
    100: PropTypes.number,
    number_of_voters: PropTypes.number,
    name: PropTypes.string,
  }),
  historical: PropTypes.shape({
    國民黨: PropTypes.shape(partyHistoricalDataPropTypes),
    民進黨: PropTypes.shape(partyHistoricalDataPropTypes),
    無籍黨: PropTypes.shape(partyHistoricalDataPropTypes),
  }),
}
function CompetitionRowThree({ voterProfile, historical }) {
  const { refetch } = useQuery({
    queryKey: [downloadAPI.Url],
    queryFn: () => downloadAPI.getData(),
    onSuccess: (res) => { downloadFile({ blob: res, name: '選民輪廓' }) },
    enabled: false,
  })
  const formattedVoterByInterval = Object.entries(voterProfile).reduce((acc, item) => {
    const key = item[0]
    const value = item[1]
    const age = key.split('-')[1]
    const count = Number((value * voterProfile.number_of_voters).toFixed())
    // 20 - 24
    if (age <= 24) {
      return { ...acc, young: acc.young + count }
    }
    // 25 - 34
    if (age <= 34) {
      return { ...acc, stillYoung: acc.stillYoung + count }
    }
    // 35 - 49
    if (age <= 49) {
      return { ...acc, notReallyYoung: acc.notReallyYoung + count }
    }
    // 50 - 64
    if (age <= 64) {
      return { ...acc, startToGetOld: acc.startToGetOld + count }
    }
    //  >=65
    if (age >= 65) {
      return { ...acc, old: acc.old + count }
    }
    return acc
  }, {
    young: 0,
    stillYoung: 0,
    notReallyYoung: 0,
    startToGetOld: 0,
    old: 0,
  })

  /* 此為暫時解，待api數字修改完成後將會刪除 */
  const {
    data: totalVoterNum,
  } = useQuery({
    queryKey: [swingModuleAPI.Url],
    queryFn: () => swingModuleAPI.getData(),
    select: (d) => d.result[0].electoral_district_data
    ,
  })
  /* 此為暫時解，待api數字修改完成後將會刪除 */

  const historicalChartData = Object.entries(historical).map((item) => ({
    name: item[0],
    data: item[1].value.map((value) => Number((value * 100).toFixed())),
  }))
  const previousYears = historical['國民黨'].year

  const data = [
    {
      data: Object.entries(displayLegend).map(([engName, chinName]) => ({
        name: chinName,
        y: formattedVoterByInterval[engName],
      })),
    },
  ]

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid xs={12} md={6}>
        <Card
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
          CardContentProps={{
            sx: {
              flex: 1,
              maxHeight: '70rem',
            },
          }}
          title={<TitleData title="選民輪廓" value="" />}
        >
          <PieChart series={data} totalVoterNum={totalVoterNum} />
          <CardActions>
            <DetailButton
            // 要測試下載要把baseUrl換實際api url
              onClick={() => { refetch() }}
              sx={{ marginRight: '2rem', width: '180px' }}
            >
              下載人口統計資料
            </DetailButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12} md={6}>
        <Card
          sx={{
            height: '100%',
          }}
          CardContentProps={{
            sx: {
              flex: 1,
              maxHeight: '70rem',
            },
          }}
          title={<TitleData title="歷史模型" value="" />}
        >
          <ColChart
            series={historicalChartData}
            chartOptionOverrides={{
              legend: {
                enabled: true,
              },
              colors: ['#00289E', '#419228', '#00AEAE', '#A23D21'],
              chart: {
                height: 450,
                type: 'column',
              },
              yAxis: {
                min: 0,
                title: {
                  text: '得票率',
                },
                labels: {
                  formatter() {
                    return `${this.value}%`
                  },
                },
              },
              xAxis: {
                type: 'category',
                categories: previousYears,
              },
              tooltip: {
                formatter() {
                  return `${this.key}<br/>得票率: <b>${this.y.toLocaleString()}%</b>`
                },
              },
            }}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

CompetitionRowThree.propTypes = CompetitionRowThreePropTypes

export default CompetitionRowThree
