import DiscussContainer from '@/containers/discuss'
import { Stack } from '@mui/material'
import { HeaderBar, BlueButton } from '@/components'
import { useNavigate } from 'react-router-dom'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import ReplyIcon from '@mui/icons-material/Reply'

function Discuss() {
  const navigate = useNavigate()
  return (
    <Stack spacing={2}>
      <HeaderBar
        text="候選人競爭模組 / 政策討論"
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
      <DiscussContainer />
    </Stack>
  )
}

Discuss.propTypes = {}

export default Discuss
