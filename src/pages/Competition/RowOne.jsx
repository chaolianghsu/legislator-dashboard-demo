import {
  Stack, Card, CardContent, Typography, Avatar,
} from '@mui/material'
import { TitleData } from '@/components'
import haha from '@/assets/haha.png'

function RowOne() {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      // justifyContent="space-between"
      spacing={3}
    >
      <Stack spacing={3}>
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
        <Card sx={{ width: '300px' }}>
          <CardContent>
            <TitleData
              title="心佔率"
              value="44.5%"
            />
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  )
}

RowOne.propTypes = {}

export default RowOne
