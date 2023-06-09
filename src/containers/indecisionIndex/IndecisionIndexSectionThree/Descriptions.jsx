import PropTypes from 'prop-types'
import {
  Stack, Typography, Box, Tooltip,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

const DescriptionsPropTypes = {
  title: PropTypes.string,
  configs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
  description: PropTypes.node,
}

function Descriptions({ title, configs, description }) {
  return (
    <Stack
      variant="h4"
      sx={{
        color: 'customGray.main',
        fontSize: '2rem',
      }}
      direction="row"
      spacing={1}
      alignItems="center"
    >
      <Typography
        variant="h4"
        sx={{
          color: 'customGray.main',
          fontSize: '2rem',
        }}
      >
        {title}
      </Typography>
      <Tooltip
        title={description}
      >
        <InfoIcon sx={{ width: '2rem', height: '2rem', color: 'customGray.main' }} />
      </Tooltip>
      {configs.map((item) => (
        <Stack direction="row" alignItems="center" spacing={0.5} key={item.name}>
          <Typography variant="body2" sx={{ fontWeight: 'normal' }}>
            {item.name}
          </Typography>
          <Box
            sx={{ backgroundColor: item.color, height: '1.5rem', width: '1.5rem' }}
          />
        </Stack>
      ))}
    </Stack>
  )
}

Descriptions.propTypes = DescriptionsPropTypes

export default Descriptions
