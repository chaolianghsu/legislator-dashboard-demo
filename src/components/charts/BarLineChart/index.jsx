import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

import genBarLineChartOption from './genBarLineChartOption'

const BarLineChartPropTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
      ),
      color: PropTypes.string,
    }),
  ),
  chartContainerProps: PropTypes.shape({}),
}

function BarLineChart({
  categories,
  series,
  chartContainerProps,
}) {
  return (
    <Box {...chartContainerProps}>
      <HighchartsReact
        highcharts={Highcharts}
        options={genBarLineChartOption({
          categories,
          series,
        })}
      />
    </Box>
  )
}

BarLineChart.propTypes = BarLineChartPropTypes

export default BarLineChart
