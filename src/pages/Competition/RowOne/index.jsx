import {
  Stack, Typography, Avatar, Unstable_Grid2 as Grid,
} from '@mui/material'

import { TitleData, Card } from '@/components'
import haha from '@/assets/haha.png'
import Candidates from './Candidates'

function RowOne() {
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
                src={haha}
                sx={{
                  width: 140,
                  height: 140,
                  marginBottom: '1.2rem',
                  border: '0.3rem solid #d8d8d8',
                }}
              />
              <Typography variant="h5" sx={{ fontSize: '2.2rem' }}>
                羅智強
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
                value="44.5%"
              />
          )}
          />
        </Stack>
      </Grid>
      <Grid
        xs={12}
        md={8}
      >
        <Candidates />
      </Grid>
    </Grid>
  )
}

RowOne.propTypes = {}

export default RowOne
