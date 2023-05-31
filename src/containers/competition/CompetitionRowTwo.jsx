import { useNavigate } from 'react-router-dom'
import { Unstable_Grid2 as Grid, CardActions } from '@mui/material'
import PropTypes from 'prop-types'
import { TitleData, DetailButton, Card } from '@/components'

const CompetitionRowTwoPropTypes = {
  publicSatisfaction: PropTypes.number,
  swingVote: PropTypes.number,
}

function CompetitionRowTwo({ publicSatisfaction, swingVote }) {
  const satisfactionToPercent = publicSatisfaction.toFixed(2) * 100
  const navigate = useNavigate()
  return (
    <Grid
      spacing={3}
      container
    >
      <Grid xs={12} md={6}>
        <Card
          title={<TitleData title="八大施政好感度" value="76.8" />}
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
          title={<TitleData value={swingVote.toLocaleString()} title="搖擺人數" />}
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

CompetitionRowTwo.propTypes = CompetitionRowTwoPropTypes

export default CompetitionRowTwo
