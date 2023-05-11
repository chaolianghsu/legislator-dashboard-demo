import { Card, CardHeader, CardContent } from '@mui/material'
import { BarLineChart, TitleData } from '@/components'

function Discuss() {
  return (
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
  )
}

Discuss.propTypes = {}

export default Discuss
