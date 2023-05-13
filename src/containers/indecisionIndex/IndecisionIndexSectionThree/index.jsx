import { Box, Stack, Typography } from '@mui/material'

import { indecisionPalette } from '@/utils'
import { fakeSwingData } from './data'
import IndecisionBlock from './IndecisionBlock'

const leanColors = {
  藍營: '#1B7509',
  泛藍: '#67CE23',
  中立: '#797979',
  泛綠: '#4c82e7',
  綠營: '#1343C9',
}

function IndecisionIndexSectionThree() {
  const { district, data } = fakeSwingData

  const villagesData = Object.keys(indecisionPalette).map((swing) => ({
    swing,
    villages: data
      .filter((village) => village.swing === swing)
      .map((villageData) => ({
        villageName: villageData.name,
        diffVote: villageData.diff_vote,
        predictVote: villageData.predict_vote,
        lean: villageData.lean,
      })),
  }))

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
          {district}
          &nbsp; 共 &nbsp;
          <span
            style={{
              color: '#934DFC',
              fontSize: '3rem',
            }}
          >
            {33}
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
      {villagesData.map((villageData) => (villageData.villages.length > 0 ? (
        <IndecisionBlock {...villageData} key={villageData.swing} />
      ) : null))}
    </Stack>
  )
}

IndecisionIndexSectionThree.propTypes = {}

export default IndecisionIndexSectionThree
