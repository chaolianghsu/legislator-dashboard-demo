import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Box } from '@mui/material'
import genMultipleStackedBarChartOption from './genMultipleStackedBarChartOption'

function MultipleStackedBarChart() {
  return (
    <Box>
      <HighchartsReact
        highcharts={Highcharts}
        options={genMultipleStackedBarChartOption}
      />
    </Box>
  )
}

export default MultipleStackedBarChart

MultipleStackedBarChart.propTypes = {}
