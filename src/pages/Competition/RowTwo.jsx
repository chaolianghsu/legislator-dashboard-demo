import { useNavigate } from 'react-router-dom'
import {
  Stack, Card, CardContent, CardActions,
} from '@mui/material'
import { TitleData, DetailButton } from '@/components'

function RowOne() {
  const navigate = useNavigate()
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      // justifyContent="space-between"
      spacing={3}
    >
      <Card>
        <CardContent>
          <TitleData
            title="政策討論度"
          />
        </CardContent>
        <CardActions>
          <DetailButton
            onClick={() => navigate('/competition/discuss')}
            sx={{ marginLeft: 'auto' }}
          >
            詳細資料
          </DetailButton>
        </CardActions>
      </Card>
      <Card sx={{ flexGrow: 1 }}>
        <CardContent>
          <TitleData value={24777} unit="ticket" title="異色搖擺選票" />
        </CardContent>
        <CardActions>
          <DetailButton
            onClick={() => navigate('/competition/indecision-index')}
            sx={{ marginLeft: 'auto' }}
          >
            詳細資料
          </DetailButton>
        </CardActions>
      </Card>
    </Stack>
  )
}

RowOne.propTypes = {}

export default RowOne
