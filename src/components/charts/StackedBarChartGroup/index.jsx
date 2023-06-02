import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'

import genStackedBarChartOption from './genStackedBarChartOption'

const StackedBarChartGroupPropTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
      ),
    }),
  ),
  details: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
  ),
  chartContainerProps: PropTypes.shape({}),
}

function StackedBarChartGroup({
  title = '',
  series = [
    {
      data: [40],
      name: '2',
      color: '#0079BF',
    },
    {
      data: [60],
      name: '1',
      color: '#46BBFF',
    },
  ],
  details = null,
  chartContainerProps = {},
}) {
  return (
    <Box
      {...chartContainerProps}
      sx={{ position: 'relative', ...chartContainerProps.sx }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          px: '1rem',
          marginBottom: '-2.5rem',
          marginTop: '1rem',
          zIndex: 10,
          position: 'relative',
        }}
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
      {details && (
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            px: '1rem',
            marginTop: '-2.5rem',
            marginBottom: '1rem',
            fontSize: '1.6rem',
          }}
        >
          {typeof details[0] === 'object' ? (
            details[0]
          ) : (
            <Typography variant="body1" sx={{ color: '#46BBFF' }}>
              {details[0]}
            </Typography>
          )}
          {typeof details[1] === 'object' ? (
            details[1]
          ) : (
            <Typography variant="body1" sx={{ color: '#0079BF' }}>
              {details[1]}
            </Typography>
          )}
        </Stack>
      )}
    </Box>
  )
}

StackedBarChartGroup.propTypes = StackedBarChartGroupPropTypes

export default StackedBarChartGroup
