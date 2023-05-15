import { Stack, Unstable_Grid2 as Grid } from '@mui/material'

import { Card, TitleData, ColChart } from '@/components'

function IndecisionIndexSectionTwo() {
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
              <TitleData value={154909} unit="ticket" title="預估投票人數" />
              <TitleData value={226316} unit="ticket" title="上屆選舉人數" />
              <TitleData value="61.78%" unit="ticket" title="平均投票率" />
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid xs={12} lg={8}>
        <Card sx={{ height: '100%' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Stack spacing={5}>
              <TitleData value={154909} unit="ticket" title="同色搖擺選票" />
              <TitleData value={226316} unit="ticket" title="政黨最低得票數" />
              <TitleData value={123423} unit="ticket" title="政黨優勢" />
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
