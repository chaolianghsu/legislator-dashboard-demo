import {
  Stack, Typography, CardActions, Card as MuiCard, CardHeader,
} from '@mui/material'
import {
  Card, PieChart, DetailButton, ColChart,
} from '@/components'

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
  return (
    <Stack
      spacing={3}
      direction={{
        xs: 'column',
        md: 'row',
      }}
    >
      <Card
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        CardContentProps={{
          sx: {
            flex: 1,
            maxHeight: '70rem',
          },
        }}
        title={(
          <Stack spacing={1}>
            <Typography variant="h4">選民輪廓</Typography>
            <Typography
              variant="body2"
              sx={{ color: 'customGray.light', fontSize: '1.5rem' }}
            >
              該選區選民的各項人口統計資料。統計時間：2023。
            </Typography>
          </Stack>
        )}
      >
        <PieChart series={fakePieSeries} />
        <CardActions>
          <DetailButton
            sx={{ marginRight: '2rem', width: '180px' }}
          >
            下載人口統計資料
          </DetailButton>
        </CardActions>
      </Card>
      <MuiCard
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardHeader title={(
          <Stack spacing={1}>
            <Typography variant="h4">歷史模型</Typography>
            <Typography
              variant="body2"
              sx={{ color: 'customGray.light', fontSize: '1.5rem' }}
            >
              過去4屆臺北市長選舉結果。
            </Typography>
          </Stack>
        )}
        />
        <ColChart
          series={[
            {
              name: '國民黨',
              data: [1, 2, 4],
            },
            {
              name: '民進黨',
              data: [3, 2, 1],
            },
            {
              name: '民眾黨',
              data: [10, 10, 10],
            },
            {
              name: '無籍黨',
              data: [10, 10, 10],
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
          }}
        />
      </MuiCard>
    </Stack>
  )
}

RowThree.propTypes = {}

export default RowThree
