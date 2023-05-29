import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

import genBarLineChartOption from './genBarLineChartOption'

const BarLineChartPropTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  lineData: PropTypes.arrayOf(PropTypes.number),
  barData: PropTypes.arrayOf(PropTypes.number),
  chartContainerProps: PropTypes.shape({}),
}

function BarLineChart({
  categories,
  lineData,
  barData,
  chartContainerProps,
}) {
  return (
    <Box {...chartContainerProps}>
      <HighchartsReact
        highcharts={Highcharts}
        options={genBarLineChartOption({
          categories,
          lineData,
          barData,
        })}
      />
    </Box>
  )
}

BarLineChart.propTypes = BarLineChartPropTypes

export default BarLineChart
