import EqualizerIcon from '@mui/icons-material/Equalizer'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply'
import {
  HeaderBar, BlueButton, MultipleStackedBarChart,
} from '@/components'

function KeyLeader() {
  const navigate = useNavigate()

  return (
    <Stack spacing={2} paddingBottom="2rem">
      <HeaderBar
        text="聲譽模組 / 關鍵領袖"
        note={(
          <BlueButton
            onClick={() => { navigate('/reputation') }}
          >
            <ReplyIcon />
            返回
          </BlueButton>
)}
        icon={<EqualizerIcon sx={{ fontSize: '3rem' }} />}
      />
      <MultipleStackedBarChart />
    </Stack>
  )
}

export default KeyLeader
