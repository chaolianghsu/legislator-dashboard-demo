import {
  Card, CardHeader, CardContent, Box,
} from '@mui/material'
import { BarLineChart, TitleData } from '@/components'

function DiscussContainer() {
  return (
    <Box padding={1.5}>
      <Card>
        <CardHeader title={(
          <TitleData
            title="政策討論度"
          />
  )}
        />
        <CardContent>
          <BarLineChart />
        </CardContent>
      </Card>
    </Box>
  )
}

DiscussContainer.propTypes = {}

export default DiscussContainer
