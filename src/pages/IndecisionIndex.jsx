import { Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import ReplyIcon from '@mui/icons-material/Reply'

import { HeaderBar, BlueButton } from '@/components'
import { IndecisionIndexSectionOne, IndecisionIndexSectionTwo } from '@/containers/indecisionIndex'

function IndecisionIndex() {
  const navigate = useNavigate()
  return (
    <Stack spacing={2} sx={{ paddingBottom: '5rem' }}>
      <HeaderBar
        text="候選人競爭模組 / 搖擺指數"
        note={(
          <BlueButton
            onClick={() => {
              navigate('/competition')
            }}
          >
            {' '}
            <ReplyIcon />
            返回
          </BlueButton>
        )}
        icon={<RecentActorsIcon sx={{ fontSize: '3rem' }} />}
      />
      <IndecisionIndexSectionOne />
      <IndecisionIndexSectionTwo />
    </Stack>
  )
}

IndecisionIndex.propTypes = {}

export default IndecisionIndex
