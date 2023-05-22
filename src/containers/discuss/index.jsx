import { Box } from '@mui/material'
import { BarLineChart, TitleData, Card } from '@/components'

function DiscussContainer() {
  return (
    <Box padding={1.5}>
      <Card title={<TitleData title="政策討論度" />}>
        <BarLineChart />
      </Card>
    </Box>
  )
}

DiscussContainer.propTypes = {}

export default DiscussContainer
