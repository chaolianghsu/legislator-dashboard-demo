import PropTypes from 'prop-types'
import {
  Stack, Typography, Box,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
})

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
      <CustomWidthTooltip
        title={description}
      >
        <InfoIcon sx={{ width: '2rem', height: '2rem', color: 'customGray.main' }} />
      </CustomWidthTooltip>
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
