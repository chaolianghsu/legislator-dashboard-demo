import { Unstable_Grid2 as Grid, CardActions } from '@mui/material'
import { xlsxAPI } from '@/apis'
import { useMutation } from '@tanstack/react-query'

import {
  Card,
  PieChart,
  DetailButton,
  ColChart,
  TitleData,
} from '@/components'
import { downloadFile } from '@/utils'

const fakePieSeries = [
  {
    data: [
      {
        name: '首投族（20-24歲）',
        y: 3334,
      },
      {
        name: '壯年族 （25-40歲）',
        y: 300,
      },
      {
        name: '中年族（40-64歲）',
        y: 203,
      },
      {
        name: '老年族（65歲以上）',
        y: 87,
      },
    ],
  },
]

function RowThree() {
  const { mutate } = useMutation({
    mutationFn: (data) => xlsxAPI.download({ area: data }),
    onSuccess: (res) => {
      downloadFile({
        blob: res,
      })
    },
  })

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
          <PieChart series={fakePieSeries} />
          <CardActions>
            <DetailButton
              onClick={() => {
                mutate('台北市')
              }}
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

RowThree.propTypes = {}

export default RowThree
