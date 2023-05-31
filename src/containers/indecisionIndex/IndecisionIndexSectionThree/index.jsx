import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import IndecisionBlock from './IndecisionBlock'

const swingObjectPropType = {
  name: PropTypes.string,
  swing_vote: PropTypes.number,
  estimated_number_of_voters: PropTypes.number,
  color: PropTypes.number,
}

const IndecisionIndexSectionThreePropTypes = {
  data: PropTypes.shape({
    total: PropTypes.number,
    極度搖擺: PropTypes.arrayOf(PropTypes.shape(swingObjectPropType)),
    中度搖擺: PropTypes.arrayOf(PropTypes.shape(swingObjectPropType)),
    輕度搖擺: PropTypes.arrayOf(PropTypes.shape(swingObjectPropType)),
    不搖擺: PropTypes.arrayOf(PropTypes.shape(swingObjectPropType)),
  }),
  electoralDistrict: PropTypes.string,
  city: PropTypes.string,
}

const leanColors = {
  藍營: '#1343C9',
  泛藍: '#4c82e7',
  中立: '#797979',
  泛綠: '#67CE23',
  綠營: '#1B7509',
}

const indecision = ['極度搖擺', '中度搖擺', '輕度搖擺', '不搖擺']

function IndecisionIndexSectionThree({ data, electoralDistrict, city }) {
  const villagesData = indecision.reduce((acc, item) => {
    if (data[item]) {
      return [
        {
          swing: item,
          villages: [...data[item]],
        },
        ...acc,
      ]
    }
    return acc
  }, [])
  return (
    <Stack spacing={1} sx={{ padding: '1.5rem' }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="h4"
          sx={{
            color: 'customGray.main',
            fontSize: '2rem',
          }}
        >
          {city}
          {electoralDistrict}
          &nbsp; 共 &nbsp;
          <span
            style={{
              color: '#934DFC',
              fontSize: '3rem',
            }}
          >
            {data.total}
          </span>
          &nbsp; 里搖擺選票狀況
        </Typography>
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
            優勢
          </Typography>
          {Object.entries(leanColors).map(([k, v]) => (
            <Stack direction="row" alignItems="center" spacing={0.5} key={k}>
              <Typography variant="body2" sx={{ fontWeight: 'normal' }}>
                {k}
              </Typography>
              <Box
                sx={{ backgroundColor: v, height: '1.5rem', width: '1.5rem' }}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>
      {villagesData.map((villageData) => (
        <IndecisionBlock {...villageData} key={villageData.swing} />
      ))}
    </Stack>
  )
}

IndecisionIndexSectionThree.propTypes = IndecisionIndexSectionThreePropTypes

export default IndecisionIndexSectionThree
