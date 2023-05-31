import {
  Stack, Typography, Avatar, Unstable_Grid2 as Grid,
} from '@mui/material'
import PropTypes from 'prop-types'
import { TitleData, Card } from '@/components'
import Candidates from './Candidates'

const candidatePropTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  party: PropTypes.string,
}

const candidateDataPropTypes = {
  name: PropTypes.string,
  pc: PropTypes.arrayOf(PropTypes.number),
  value: PropTypes.arrayOf(PropTypes.number),
}

const CompetitionRowOnePropTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  marketShare: PropTypes.number,
  constituencyCompetition: PropTypes.shape({
    comp: PropTypes.arrayOf(PropTypes.shape(candidatePropTypes)),
    data: PropTypes.arrayOf(PropTypes.shape(candidateDataPropTypes)),
  }),
}

function CompetitionRowOne({
  name, image, marketShare, constituencyCompetition,
}) {
  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        xs={12}
        md={4}
      >
        <Stack spacing={3} direction="column" sx={{ height: '100%' }}>
          <Card>
            <Stack
              alignItems="center"
              sx={{ width: '100%', color: 'customBlue.dark' }}
              spacing={1}
            >
              <Avatar
                src={image}
                sx={{
                  width: 140,
                  height: 140,
                  marginBottom: '1.2rem',
                  border: '0.3rem solid #d8d8d8',
                }}
              />
              <Typography variant="h5" sx={{ fontSize: '2.2rem' }}>
                {name}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.6rem' }}>
                國民黨
              </Typography>
            </Stack>
          </Card>
          <Card
            sx={{
              flexGrow: 1,
            }}
            title={(
              <TitleData
                title="心佔率"
                value={`${(marketShare.toFixed(2) * 100)}%`}
              />
          )}
          />
        </Stack>
      </Grid>
      <Grid
        xs={12}
        md={8}
      >
        <Candidates constituencyCompetition={constituencyCompetition} />
      </Grid>
    </Grid>
  )
}

CompetitionRowOne.propTypes = CompetitionRowOnePropTypes

export default CompetitionRowOne
