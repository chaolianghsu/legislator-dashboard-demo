import { Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Card } from '@/components'
import { indecisionPalette } from '@/utils'

const leanColorLinearGradientMap = {
  1: 'linear-gradient(221deg, #1B7509 0%, #67CE23 100%)',
  2: 'linear-gradient(221deg, #67CE23 0%, #caee68 100%)',
  3: 'linear-gradient(221deg, #797979 0%, #C1C1C1 100%)',
  4: 'linear-gradient(221deg, #4c82e7 0%, #70baec 100%)',
  5: 'linear-gradient(221deg, #1343C9 0%, #5489EC 100%)',
}

function VillageCard({
  villageName, diffVote, predictVote, lean,
}) {
  return (
    <Stack
      direction="row"
      sx={{
        color: 'white',
        padding: '3rem 1rem',
        background: leanColorLinearGradientMap[lean],
        borderRadius: '1rem',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ flex: '1', fontSize: '2.5rem', paddingX: '0.5rem' }}>
        {villageName}
      </Typography>
      <Stack sx={{ flex: '1' }}>
        <Typography
          sx={{
            display: 'flex',
            fontWeight: 'light',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          異色搖擺選票
          <span style={{ fontSize: '2rem' }}>{diffVote}</span>
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            fontWeight: 'light',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          預估投票人數
          <span>{predictVote}</span>
        </Typography>
      </Stack>
    </Stack>
  )
}

VillageCard.propTypes = {
  villageName: PropTypes.string,
  diffVote: PropTypes.number,
  predictVote: PropTypes.number,
  lean: PropTypes.number,
}

function IndecisionBlock({ swing, villages }) {
  return (
    <Card>
      <Stack direction="row" spacing={1}>
        <Typography
          sx={{
            backgroundColor: indecisionPalette[swing],
            color: 'white',
            padding: '0.5rem 3rem',
            height: '11ch',
            maxWidth: '7ch',
            borderRadius: '1rem',
            marginTop: 0.5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {swing}
        </Typography>
        <Grid container spacing={1} sx={{ width: '100%' }}>
          {villages.map((village) => (
            <Grid xs={12} lg={4} key={village.villageName}>
              <VillageCard {...village} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Card>
  )
}

IndecisionBlock.propTypes = {
  swing: PropTypes.oneOf(Object.keys(indecisionPalette)),
  villages: PropTypes.arrayOf(
    PropTypes.shape({
      villageName: PropTypes.string,
      diffVote: PropTypes.number,
      predictVote: PropTypes.number,
      lean: PropTypes.number,
    }),
  ),
}

export default IndecisionBlock
