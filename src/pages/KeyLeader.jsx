import EqualizerIcon from '@mui/icons-material/Equalizer'
import { useNavigate } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply'
import { useQuery } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'
import dateFormat from 'dateformat'

import { opleaderCategoriesParser, opleaderSeriesParser } from '@/utils'
import { opleaderAPI } from '@/apis'
import { useGlobalDateStore } from '@/store'
import {
  HeaderBar, BlueButton, MultipleStackedBarChart, LoadingProgress,
} from '@/components'

function KeyLeader() {
  const navigate = useNavigate()

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
    data: opleaderData,
    isLoading: isGetOpleaderDataLoading,
    isFetching: isGetOpleaderDataFetching,
  } = useQuery({
    queryKey: [opleaderAPI.Url, formattedDateStart, formattedDateEnd],
    queryFn: () => opleaderAPI.getData({
      from: formattedDateStart,
      to: formattedDateEnd,
    }),
    select: (d) => d.result[0],
  })

  if (
    isGetOpleaderDataLoading
    || isGetOpleaderDataFetching
  ) {
    return (
      <Box sx={{ marginTop: (theme) => -2 * theme.spacing }}>
        <LoadingProgress />
      </Box>
    )
  }

  return (
    <Stack spacing={2} paddingBottom="2rem">
      <HeaderBar
        text="聲譽模組 / 關鍵領袖"
        note={(
          <BlueButton
            onClick={() => {
              navigate('/reputation')
            }}
          >
            <ReplyIcon />
            返回
          </BlueButton>
        )}
        icon={<EqualizerIcon sx={{ fontSize: '3rem' }} />}
      />
      <MultipleStackedBarChart
        categories={opleaderCategoriesParser(opleaderData.categories)}
        series={opleaderSeriesParser(opleaderData.series)}
      />
    </Stack>
  )
}

export default KeyLeader
