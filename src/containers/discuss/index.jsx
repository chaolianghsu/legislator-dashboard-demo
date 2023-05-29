import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import {
  BarLineChart, TitleData, Card, LoadingProgress,
} from '@/components'
import { satisfactionAPI } from '@/apis'

function DiscussContainer() {
  const {
    data, isFetching, isLoading, isError,
  } = useQuery({
    queryKey: [satisfactionAPI.Url],
    queryFn: () => satisfactionAPI.getData(),
    select: (d) => d.result[0],
  })
  if (isFetching || isLoading || isError) {
    return (
      <Box sx={{ marginTop: '-2rem' }}>
        <LoadingProgress />
      </Box>
    )
  }

  const categories = data.data?.map((item) => item.name)
  const lineData = data.data?.map(
    (item) => +(item.satisfaction * 100).toFixed(2),
  )
  const barData = data.data?.map((item) => item.vol)
  const value = (data.public_satisfaction * 100).toFixed(2)

  return (
    <Box padding={1.5}>
      <Card title={<TitleData title="政策討論度" value={`${value}%`} />}>
        <BarLineChart
          categories={categories}
          lineData={lineData}
          barData={barData}
        />
      </Card>
    </Box>
  )
}

DiscussContainer.propTypes = {}

export default DiscussContainer
