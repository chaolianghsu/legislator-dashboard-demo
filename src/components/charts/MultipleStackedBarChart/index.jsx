import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import genMultipleStackedBarChartOption from './genMultipleStackedBarChartOption'

const MultipleStackedBarChartPropTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
      ),
      colorByPoint: PropTypes.bool,
    }),
  ),
  chartContainerProps: PropTypes.shape({}),
  chartOptionOverrides: PropTypes.shape({}),
}

function MultipleStackedBarChart({
  categories,
  series,
  chartContainerProps,
  chartOptionOverrides,
}) {
  return (
    <Box {...chartContainerProps}>
      <HighchartsReact
        highcharts={Highcharts}
        options={genMultipleStackedBarChartOption({ categories, series, chartOptionOverrides })}
      />
    </Box>
  )
}

export default MultipleStackedBarChart

MultipleStackedBarChart.propTypes = MultipleStackedBarChartPropTypes
