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
  name, swingVote, estimatedNumberOfVoters, kmtAdvantage,
}) {
  const fakeLean = Math.abs(kmtAdvantage.toString().split('').at(-1) - 5)

  return (
    <Stack
      direction="row"
      sx={{
        color: 'white',
        padding: '3rem 1rem',
        background: leanColorLinearGradientMap[fakeLean === 0 ? 1 : fakeLean],
        borderRadius: '1rem',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ flex: '1', fontSize: '2.5rem', paddingX: '0.5rem' }}>
        {name}
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
          搖擺選票
          <span style={{ fontSize: '2rem' }}>{swingVote}</span>
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
          <span>{estimatedNumberOfVoters}</span>
        </Typography>
      </Stack>
    </Stack>
  )
}

VillageCard.propTypes = {
  name: PropTypes.string,
  swingVote: PropTypes.number,
  estimatedNumberOfVoters: PropTypes.number,
  kmtAdvantage: PropTypes.number,
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
            <Grid xs={12} lg={4} key={village.name}>
              <VillageCard
                name={village.name}
                swingVote={village.swing_vote}
                estimatedNumberOfVoters={village.estimated_number_of_voters}
                kmtAdvantage={village.kmt_advantage}
              />
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
