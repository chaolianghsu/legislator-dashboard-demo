import {
  Stack,
} from '@mui/material'
import { HeaderBar } from '@/components'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import RowOne from './RowOne'
import RowTwo from './RowTwo'
import RowThree from './RowThree'

function Competition() {
  return (
    <Stack spacing={2} paddingBottom="2rem">
      <HeaderBar
        text="候選人競爭模組"
        icon={<RecentActorsIcon sx={{ fontSize: '3rem' }} />}
      />
      <RowOne />
      <RowTwo />
      <RowThree />
    </Stack>
  )
}

Competition.propTypes = {}

export default Competition
