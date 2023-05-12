import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'

import genStackedBarChartOption from './genStackedBarChartOption'

const StackedBarChartGroupPropTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.nodes]),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
      ),
    }),
  ),
  chartContainerProps: PropTypes.shape({}),
}

function StackedBarChartGroup({
  title = '', series = [
    {
      data: [40],
      name: '2',
      color: '#0079BF',
    },
    {
      data: [60],
      name: '1',
      color: '#46BBFF',
    }], chartContainerProps = {},
}) {
  return (
    <Box {...chartContainerProps}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ px: '1rem', marginBottom: '-2rem', marginTop: '1rem' }}
      >
        <Typography variant="body1" sx={{ color: '#46BBFF', fontSize: '2rem' }}>
          {series[1].data[0]}
          %
        </Typography>
        {typeof title === 'string' ? <Typography>{title}</Typography> : title}
        <Typography variant="body1" sx={{ color: '#0079BF', fontSize: '2rem' }}>
          {series[0].data[0]}
          %
        </Typography>
      </Stack>
      <HighchartsReact
        highcharts={Highcharts}
        options={genStackedBarChartOption({
          series,
        })}
      />
    </Box>
  )
}

StackedBarChartGroup.propTypes = StackedBarChartGroupPropTypes

export default StackedBarChartGroup
