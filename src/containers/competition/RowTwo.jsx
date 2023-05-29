import { useNavigate } from 'react-router-dom'
import { Unstable_Grid2 as Grid, CardActions } from '@mui/material'
import { TitleData, DetailButton, Card } from '@/components'

function RowTwo() {
  const navigate = useNavigate()
  return (
    <Grid
      spacing={3}
      container
    >
      <Grid xs={12} md={6}>
        <Card
          title={<TitleData title="八大施政好感度" value="76.8%" />}
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
      </Grid>
      <Grid xs={12} md={6}>
        <Card
          sx={{ height: '100%' }}
          title={<TitleData value={(24777).toLocaleString()} title="搖擺人數" />}
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
      </Grid>
    </Grid>
  )
}

RowTwo.propTypes = {}

export default RowTwo
