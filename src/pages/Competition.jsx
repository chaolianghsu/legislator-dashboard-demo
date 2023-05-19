import { Stack } from '@mui/material'
import RecentActorsIcon from '@mui/icons-material/RecentActors'

import { HeaderBar } from '@/components'
import { CompetitionRowOne, CompetitionRowTwo, CompetitionRowThree } from '@/containers/competition'

function Competition() {
  return (
    <Stack spacing={2} paddingBottom="2rem">
      <HeaderBar
        text="候選人競爭模組"
        icon={<RecentActorsIcon sx={{ fontSize: '3rem' }} />}
      />
      <CompetitionRowOne />
      <CompetitionRowTwo />
      <CompetitionRowThree />
    </Stack>
  )
}

Competition.propTypes = {}

export default Competition
