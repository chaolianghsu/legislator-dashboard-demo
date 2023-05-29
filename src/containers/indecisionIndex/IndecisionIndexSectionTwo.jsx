import { Stack, Unstable_Grid2 as Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import {
  Card, TitleData, ColChart, LoadingProgress,
} from '@/components'
import { partyAdvantageAPI } from '@/apis'

function IndecisionIndexSectionTwo() {
  const { data: partyAdvantage, isLoading, isFetching } = useQuery({
    queryKey: [partyAdvantageAPI.Url],
    queryFn: () => partyAdvantageAPI.getData(),
    select: (d) => d.result[0].party_advantage,
  })

  if (isLoading || isFetching) {
    return <LoadingProgress />
  }

  return (
    <Grid container spacing={3}>
      <Grid xs={12} lg={4}>
        <Card sx={{ height: '100%' }}>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={{ xs: 8, lg: 0 }}
          >
            <Stack
              sx={{
                flex: '1',
                justifyContent: 'center',
                alignItems: 'start',
                paddingLeft: { lg: '3rem' },
              }}
              spacing={5}
            >
              <TitleData value={(154909).toLocaleString()} unit="ticket" title="預估投票人數" />
              <TitleData value={(226316).toLocaleString()} unit="ticket" title="2023選舉人數" />
              <TitleData value="61.78%" unit="ticket" title="平均投票率" />
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid xs={12} lg={8}>
        <Card sx={{ height: '100%' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} justifyContent="space-between">
            <Stack spacing={5}>
              <TitleData value={(230809).toLocaleString()} unit="ticket" title="黨最高得票數" titlePrefix="國民" />
              <TitleData value={(154090).toLocaleString()} unit="ticket" title="黨最低得票數" titlePrefix="國民" />
              <TitleData value={partyAdvantage.toLocaleString()} unit="ticket" title="黨優勢" titlePrefix="國民" />
            </Stack>
            <ColChart
              series={[
                {
                  name: '筆數',
                  colorByPoint: true,
                  data: [
                    { name: '最高得票', y: 2323 },
                    { name: '最低得票', y: 1122 },
                  ],
                },
              ]}
              chartOptionOverrides={{
                chart: {
                  type: 'column',
                  height: 300,
                  width: 350,
                },
              }}
            />
          </Stack>

        </Card>
      </Grid>
    </Grid>
  )
}

IndecisionIndexSectionTwo.propTypes = {}

export default IndecisionIndexSectionTwo
