import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import { useQuery } from '@tanstack/react-query'
import dateFormat from 'dateformat'
import { shallow } from 'zustand/shallow'
import { competitionModuleAPI } from '@/apis'
import { useGlobalDateStore } from '@/store'
import { HeaderBar, LoadingProgress } from '@/components'
import {
  CompetitionRowOne,
  CompetitionRowTwo,
  CompetitionRowThree,
} from '@/containers/competition'

function Competition() {
  const { startDate, endDate } = useGlobalDateStore(
    (state) => ({
      startDate: state.startDate,
      endDate: state.endDate,
    }),
    shallow,
  )
  const formattedDateStart = dateFormat(startDate, 'yyyymmdd')
  const formattedDateEnd = dateFormat(endDate, 'yyyymmdd')

  const {
    data, isLoading, isFetching, isError,
  } = useQuery({
    queryKey: [formattedDateStart, formattedDateEnd, competitionModuleAPI.Url],
    queryFn: () => competitionModuleAPI.getData({
      from: formattedDateStart,
      to: formattedDateEnd,
    }),
    select: (d) => d.result[0],
  })
  if (isLoading || isFetching) {
    return <LoadingProgress />
  }

  if (isError) {
    return <>oops, something went wrong...</>
  }

  const {
    // section one
    name,
    image,
    market_share: marketShare,
    constituency_competition: constituencyCompetition,
    // section two
    public_satisfaction: publicSatisfaction,
    swing_vote: swingVote,
    // section three
    voter_profile: voterProfile,
  } = data
  return (
    <Grid2 container spacing={1.5} paddingBottom="2rem">
      <Grid2 xs={12}>
        <HeaderBar
          text="候選人競爭模組"
          icon={<RecentActorsIcon sx={{ fontSize: '3rem' }} />}
        />
      </Grid2>
      <Grid2 xs={12}>
        <CompetitionRowOne
          name={name}
          image={image}
          marketShare={marketShare}
          constituencyCompetition={constituencyCompetition}
        />
      </Grid2>
      <Grid2 xs={12}>
        <CompetitionRowTwo
          publicSatisfaction={publicSatisfaction}
          swingVote={swingVote}
        />
      </Grid2>
      <Grid2 xs={12}>
        <CompetitionRowThree voterProfile={voterProfile} />
      </Grid2>
    </Grid2>
  )
}

Competition.propTypes = {}

export default Competition
