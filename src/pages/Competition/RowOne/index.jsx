import {
  Stack, Card, CardContent, Typography, Avatar,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { TitleData } from '@/components'
import haha from '@/assets/haha.png'
import Candidates from './Candidates'

function RowOne() {
  return (
    <Grid2
      container
      spacing={3}
    >
      <Grid2
        xs={12}
        md={4}
      >
        <Stack spacing={3} direction="column" sx={{ height: '100%' }}>
          <Card>
            <CardContent>
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
            </CardContent>
          </Card>
          <Card sx={{
            flexGrow: 1,
          }}
          >
            <CardContent>
              <TitleData
                title="心佔率"
                value="44.5%"
              />
            </CardContent>
          </Card>
        </Stack>
      </Grid2>
      <Grid2
        xs={12}
        md={8}
      >
        <Candidates />
      </Grid2>
    </Grid2>
  )
}

RowOne.propTypes = {}

export default RowOne
