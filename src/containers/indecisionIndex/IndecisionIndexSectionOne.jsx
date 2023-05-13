import { Box, Stack, Typography } from '@mui/material'

import { Card, TitleData, BarChart } from '@/components'

import { indecisionPalette } from '@/utils'

const swing = '極度搖擺'

function IndecisionIndexSectionOne() {
  return (
    <Box padding={1.5}>
      <Card>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 8, lg: 0 }}>
          <Stack
            sx={{
              flex: '1',
              justifyContent: 'center',
              alignItems: 'start',
              paddingLeft: { lg: '3rem' },
            }}
            spacing={5}
          >
            <TitleData value={24777} unit="ticket" title="異色搖擺選票" />
            <TitleData
              title="歷史搖擺程度"
              customValue={(
                <Box>
                  <Typography
                    sx={{
                      backgroundColor: indecisionPalette[swing],
                      color: 'white',
                      padding: '0.5rem 3rem',
                    }}
                  >
                    {swing}
                  </Typography>
                </Box>
            )}
            />
          </Stack>
          <Stack
            sx={{
              flex: '1',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'customGray.main',
                fontSize: '2rem',
              }}
            >
              異色搖擺選票佔比
            </Typography>
            <BarChart
              categories={['']}
              series={[
                {
                  data: [31000],
                  name: '預估投票人數',
                  color: '#934DFC',
                  pointPlacement: -0.2,
                },
                {
                  pointPlacement: 0.2,
                  name: '異色搖擺選票',
                  color: '#46BBFD',
                  dataLabels: [
                    {
                      enabled: true,
                      style: {
                        fontSize: '20px',
                        textOutline: false,
                      },
                      y: -20,
                      formatter() {
                        return `<b style="color:#46BBFD">${30}%</b>`
                      },
                    },
                  ],
                  data: [5000],
                },
              ]}
              chartOptionOverrides={{
                tooltip: {
                  shared: true,
                },
                chart: {
                  type: 'bar',
                  height: 250,
                },
              }}
            />
          </Stack>
        </Stack>
      </Card>
    </Box>

  )
}

IndecisionIndexSectionOne.propTypes = {}

export default IndecisionIndexSectionOne
