import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import RecentActorsIcon from '@mui/icons-material/RecentActors'

import { HeaderBar } from '@/components'
import { CompetitionRowOne, CompetitionRowTwo, CompetitionRowThree } from '@/containers/competition'

function Competition() {
  return (
    <Grid2 container spacing={1.5} paddingBottom="2rem">
      <Grid2 xs={12}>
        <HeaderBar
          text="候選人競爭模組"
          icon={<RecentActorsIcon sx={{ fontSize: '3rem' }} />}
        />
      </Grid2>
      <Grid2 xs={12}>
        <CompetitionRowOne />
      </Grid2>
      <Grid2 xs={12}>
        <CompetitionRowTwo />
      </Grid2>
      <Grid2 xs={12}>
        <CompetitionRowThree />
      </Grid2>
    </Grid2>
  )
}

Competition.propTypes = {}

export default Competition
