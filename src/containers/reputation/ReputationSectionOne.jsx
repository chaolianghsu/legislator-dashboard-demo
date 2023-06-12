import {
  Stack,
  Avatar,
  Typography,
  CardContent,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'
import dateFormat from 'dateformat'

import {
  Card,
  TitleData,
  LineChart,
  DetailButton,
  ColChart,
  LoadingProgress,
} from '@/components'
import { useGlobalDateStore } from '@/store'
import {
  reputationModuleAPI,
} from '@/apis'

function ReputationSectionOne() {
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
    data: reputationModuleData, isLoading, isFetching, isError,
  } = useQuery({
    queryKey: [reputationModuleAPI.Url, formattedDateStart, formattedDateEnd],
    queryFn: () => reputationModuleAPI.getData({ from: formattedDateStart, to: formattedDateEnd }),
    select: (d) => d.result[0],
  })

  if (isLoading || isFetching) {
    return (
      <Box sx={{ marginTop: (theme) => (-2 * theme.spacing) }}>
        <LoadingProgress />
      </Box>
    )
  }

  if (isError) {
    return <>oops somethings wrong...</>
  }

  const {
    reputation: {
      grow: reputationGrow,
      total: reputationTotal,
    },
    favorability: {
      data: favorabilityData,
      grow: favorabilityGrow,
      total: favorabilityTotal,
    },
    vol: {
      date: volumeDate,
      grow: volumeGrow,
      total: volumeTotal,
      g: volumeData,
    },
  } = reputationModuleData

  const sentiments = favorabilityData
    .filter((sen) => sen.senti !== '中立')
    .map((sen) => ({
      name: `${sen.senti.split('')[0]}評`,
      value: sen.t,
      percent: sen.pc,
      color: sen.senti === '正面' ? '#8E9EE3' : '#00AEAE',
    }))

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={4}>
        <Stack spacing={2} sx={{ height: '100%' }}>
          <Card>
            <CardContent>
              <Stack
                alignItems="center"
                sx={{ width: '100%', color: 'customBlue.dark' }}
                spacing={1}
              >
                <Avatar
                  src={reputationModuleData.image}
                  sx={{
                    width: 140,
                    height: 140,
                    marginBottom: '1.2rem',
                    border: '0.3rem solid #d8d8d8',
                  }}
                />
                <Typography variant="h5" sx={{ fontSize: '2.2rem' }}>
                  {reputationModuleData.name}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.6rem' }}>
                  {reputationModuleData.party || '國民黨'}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Card
            title={(
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <TitleData
                  markNumber={reputationGrow}
                  value={Math.floor(reputationTotal).toLocaleString()}
                  unit="percentage"
                  title="聲譽值"
                  TitleStackProps={{
                    spacing: 0,
                    sx: {
                      alignItems: { xs: 'end', lg: 'start' },
                      flexDirection: {
                        xs: 'row',
                        lg: 'column',
                      },
                      gap: { xs: 2, lg: 0 },
                    },
                  }}
                />
              </Box>
            )}
            sx={{ flex: '1' }}
          />
        </Stack>
      </Grid>
      <Grid xs={12} md={8} lg={4} sx={{ display: 'flex', width: '100%' }}>
        <Card
          title={(
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <TitleData
                markNumber={volumeGrow}
                value={volumeTotal.toLocaleString()}
                unit="percentage"
                title="網路聲量"
              />
            </Box>
          )}
          sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          CardContentProps={{
            component: Stack,
            sx: {
              flex: '1',
              marginLeft: '1rem',
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'customGray.main',
              fontSize: '2rem',
              marginBottom: '0.5rem',
            }}
          >
            聲量趨勢
          </Typography>
          <LineChart
            categories={volumeDate}
            series={[{ data: volumeData, name: '徐巧芯' }]}
          />
          <DetailButton
            onClick={() => navigate('/reputation/volume')}
            sx={{ marginTop: 'auto' }}
          >
            詳細資料
          </DetailButton>
        </Card>
      </Grid>
      <Grid xs={12} lg={4}>
        <Card
          title={(
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <TitleData
                markNumber={favorabilityGrow}
                value={favorabilityTotal.toLocaleString()}
                unit="percentage"
                title="好感度"
              />
            </Box>
          )}
        >
          <Stack sx={{ marginX: '1rem' }}>
            {sentiments.map((sen) => (
              <Stack
                direction="row"
                key={sen.name}
                sx={{ alignItems: 'end' }}
                spacing={1}
              >
                <Typography variant="body2">{sen.name}</Typography>
                <Typography variant="h4" sx={{ color: sen.color }}>
                  {sen.value.toLocaleString()}
                </Typography>
                <Typography variant="body2">筆</Typography>
                <Typography variant="body2">
                  &#40;
                  {sen.percent}
                  &#41;
                </Typography>
              </Stack>
            ))}
            <ColChart
              series={[
                {
                  name: '筆數',
                  colorByPoint: true,
                  data: sentiments.map((sen) => ({ ...sen, y: sen.value })),
                },
              ]}
              chartContainerProps={{
                sx: {
                  marginTop: '2rem',
                },
              }}
            />
            <DetailButton onClick={() => navigate('/reputation/favorability')}>
              詳細資料
            </DetailButton>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  )
}

ReputationSectionOne.propTypes = {}

export default ReputationSectionOne
