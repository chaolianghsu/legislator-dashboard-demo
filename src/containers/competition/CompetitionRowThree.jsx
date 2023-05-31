import { Unstable_Grid2 as Grid, CardActions } from '@mui/material'
import PropTypes from 'prop-types'
import { downloadAPI, baseUrl } from '@/apis'
import {
  Card,
  PieChart,
  DetailButton,
  ColChart,
  TitleData,
} from '@/components'

const displayLegend = ['首投族（20-24歲）', '壯年族 （25-40歲）', '中年族（40-64歲）', '老年族（65歲以上）']
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
}
function CompetitionRowThree({ voterProfile }) {
  const formattedVoterByInterval = Object.entries(voterProfile).reduce((acc, item) => {
    const key = item[0]
    const value = item[1]
    const age = key.split('-')[1]
    const count = Number((value * voterProfile.number_of_voters).toFixed())
    // 20 - 24
    if (age <= 24) {
      return { ...acc, young: acc.young + count }
    }
    // 25 - 39
    if (age <= 39) {
      return { ...acc, notReallyYoung: acc.notReallyYoung + count }
    }
    // 41 - 64
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
    notReallyYoung: 0,
    startToGetOld: 0,
    old: 0,
  })
  const intervalValues = Object.values(formattedVoterByInterval)
  const data = [
    {
      data: displayLegend.map((name, index) => ({
        name,
        y: intervalValues[index],
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
          <PieChart series={data} />
          <CardActions>
            <DetailButton
            // 要測試下載要把baseUrl換實際api url
              href={`${baseUrl}/${downloadAPI.Url}`}
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
            series={[
              {
                name: '國民黨',
                data: [1, 2, 4, 11],
              },
              {
                name: '民進黨',
                data: [3, 2, 1, 10],
              },
              {
                name: '民眾黨',
                data: [10, 10, 10, 9],
              },
              {
                name: '無籍黨',
                data: [10, 10, 10, 2],
              },
            ]}
            chartOptionOverrides={{
              legend: {
                enabled: true,
              },
              colors: ['#00289E', '#419228', '#5CC0C1', '#A23D21'],
              chart: {
                height: 450,
                type: 'column',
              },
              yAxis: {
                min: 0,
                title: {
                  text: '得票率',
                },
              },
              xAxis: {
                type: 'category',
                categories: [2008, 2012, 2016, 2020],
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
