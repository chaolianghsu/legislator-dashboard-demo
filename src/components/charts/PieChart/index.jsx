import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

import genPieChartOption from './genPieChartOption'

const PieChartPropTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
      ),
    }),
  ),
  chartContainerProps: PropTypes.shape({}),
  onChartPointClick: PropTypes.func,
}

function PieChart({
  series,
  chartContainerProps,
}) {
  return (
    <Box {...chartContainerProps}>
      <HighchartsReact
        highcharts={Highcharts}
        options={genPieChartOption({
          series,
        })}
      />
    </Box>
  )
}

PieChart.propTypes = PieChartPropTypes

export default PieChart
