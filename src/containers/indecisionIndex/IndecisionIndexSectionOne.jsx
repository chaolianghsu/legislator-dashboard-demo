import {
  Box, Stack, Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import { Card, TitleData, BarChart } from '@/components'

import { indecisionPalette } from '@/utils'

const IndecisionIndexSectionOnePropTypes = {
  swingVote: PropTypes.number,
  historicalSwing: PropTypes.string,
  swingVoterProportion: PropTypes.shape({
    estimated_number_of_voters: PropTypes.number,
    undecided_swing_votes: PropTypes.number,
  }),
}

function IndecisionIndexSectionOne({
  swingVote,
  historicalSwing,
  swingVoterProportion,
}) {
  const {
    estimated_number_of_voters: estimatedVoters,
    undecided_swing_votes: undecidedSwingVotes,
  } = swingVoterProportion
  const percentage = estimatedVoters === 0
    ? ''
    : ((undecidedSwingVotes / estimatedVoters) * 100).toFixed()
  return (
    <Box padding={1.5}>
      <Card>
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
            <TitleData
              value={swingVote.toLocaleString()}
              unit="ticket"
              title="搖擺選票"
            />
            <TitleData
              title="歷史搖擺程度"
              customValue={(
                <Box>
                  <Typography
                    sx={{
                      backgroundColor: indecisionPalette[historicalSwing],
                      color: 'white',
                      padding: '0.5rem 3rem',
                    }}
                  >
                    {historicalSwing}
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
              搖擺選票佔比
            </Typography>
            <BarChart
              categories={['']}
              series={[
                {
                  data: [estimatedVoters],
                  name: '預估投票人數',
                  color: '#934DFC',
                  pointPlacement: -0.2,
                },
                {
                  pointPlacement: 0.2,
                  name: '搖擺選票',
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
                        return `<b style="color:#46BBFD">${
                          percentage ? `${percentage}%` : ''
                        }</b>`
                      },
                    },
                  ],
                  data: [undecidedSwingVotes],
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

IndecisionIndexSectionOne.propTypes = IndecisionIndexSectionOnePropTypes

export default IndecisionIndexSectionOne
