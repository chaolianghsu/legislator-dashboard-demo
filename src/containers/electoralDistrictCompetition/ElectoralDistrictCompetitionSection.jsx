import { useState, useEffect } from 'react'
import {
  Avatar,
  Stack,
  Typography,
  Select,
  MenuItem,
  Tooltip,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

import { useQuery } from '@tanstack/react-query'
import { constituencyAPI } from '@/apis'
import { useGlobalDateStore } from '@/store'
import { shallow } from 'zustand/shallow'
import dateFormat from 'dateformat'
import {
  Card, TitleData, StackedBarChartGroup, LoadingProgress,
} from '@/components'
import { descriptionConfigs } from '@/components/TitleData'

const unitMap = {
  網路聲量: '筆',
  擴散廣度: '頻道數',
  互動強度: '回文/主文',
  粉絲觸及力: '人',
}

function ElectoralDistrictCompetitionSection() {
  const [opponent, setOpponent] = useState('')
  const { startDate, endDate } = useGlobalDateStore(
    (state) => ({
      startDate: state.startDate,
      endDate: state.endDate,
    }),
    shallow,
  )

  const formattedDateStart = dateFormat(startDate, 'yyyymmdd')
  const formattedDateEnd = dateFormat(endDate, 'yyyymmdd')

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [constituencyAPI.Url, startDate, endDate],
    queryFn: () => constituencyAPI.getData({ from: formattedDateStart, to: formattedDateEnd }),
    select: (d) => d.result[0],
  })

  useEffect(() => {
    if (data) {
      setOpponent(data.comp[1].name)
    }
  }, [data])

  if (isLoading || isFetching) {
    return <LoadingProgress />
  }

  const politician = data.comp[0]

  return (
    <Card>
      <TitleData title="選區競爭" value="" />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingX="5rem"
        sx={{ marginTop: '3rem' }}
      >
        <Stack alignItems="center">
          <Avatar
            src={politician.image}
            sx={{
              width: 180,
              height: 180,
              marginBottom: '1.2rem',
              border: '0.3rem solid #d8d8d8',
            }}
          />
          <Typography>{politician.name}</Typography>
        </Stack>
        <Typography
          sx={{ color: 'customGridTextBlue.light', fontSize: '3rem' }}
        >
          vs
        </Typography>
        <Stack alignItems="center">
          <Avatar
            src={data.comp.find((o) => o.name === opponent)?.image}
            sx={{
              width: 180,
              height: 180,
              marginBottom: '1.2rem',
              border: '0.3rem solid #d8d8d8',
            }}
          />
          <Select
            value={opponent}
            onChange={(event) => {
              setOpponent(event.target.value)
            }}
            variant="standard"
            color="customGridTextBlue"
            MenuProps={{
              PaperProps: {
                sx: {
                  '& .MuiMenuItem-root.Mui-selected': {
                    backgroundColor: 'customGridTextBlue.light',
                  },
                },
              },
            }}
          >
            {data.comp.slice(1).map((op) => (
              <MenuItem value={op.name} key={op.name}>
                {op.name}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>
      <Stack gap="1rem">
        {data.data.map((index) => (
          <StackedBarChartGroup
            key={index.name}
            title={(
              <Stack direction="row" alignItems="center" gap="0.5rem">
                <Typography>{index.name}</Typography>
                <Tooltip
                  title={(
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      {descriptionConfigs[index.name]}
                    </Typography>
                  )}
                >
                  <InfoIcon sx={{ width: '2rem', height: '2rem', color: 'customGray.main' }} />
                </Tooltip>
              </Stack>
            )}
            series={[
              {
                data: [index.pc[1]],
                name: '2',
                color: '#0079BF',
              },
              {
                data: [index.pc[0]],
                name: '1',
                color: '#46BBFF',
              },
            ]}
            details={[
              <Typography variant="body1" sx={{ color: '#46BBFF' }}>
                {index.value[0].toLocaleString()}
                &nbsp;
                <span style={{ fontSize: '1.4rem', color: '#2C3A74' }}>
                  {unitMap[index.name]}
                </span>
              </Typography>,
              <Typography variant="body1" sx={{ color: '#0079BF' }}>
                {index.value[1].toLocaleString()}
                &nbsp;
                <span style={{ fontSize: '1.4rem', color: '#2C3A74' }}>
                  {unitMap[index.name]}
                </span>
              </Typography>,
            ]}
          />
        ))}
      </Stack>
    </Card>
  )
}

ElectoralDistrictCompetitionSection.propTypes = {}

export default ElectoralDistrictCompetitionSection
