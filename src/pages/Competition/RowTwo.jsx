import { useNavigate } from 'react-router-dom'
import { Stack, CardActions } from '@mui/material'
import { TitleData, DetailButton, Card } from '@/components'

function RowTwo() {
  const navigate = useNavigate()
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      // justifyContent="space-between"
      spacing={3}
      sx={{ paddingX: '1rem' }}
    >
      <Card
        sx={{ flexGrow: 1, flexBasis: '50%' }}
        title={<TitleData title="政策討論度" />}
      >
        <CardActions>
          <DetailButton
            onClick={() => navigate('/competition/discuss')}
            sx={{ marginLeft: 'auto' }}
          >
            詳細資料
          </DetailButton>
        </CardActions>
      </Card>
      <Card
        sx={{ flexGrow: 1, flexBasis: '50%' }}
        title={<TitleData value={24777} unit="ticket" title="異色搖擺選票" />}
      >
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

RowTwo.propTypes = {}

export default RowTwo
