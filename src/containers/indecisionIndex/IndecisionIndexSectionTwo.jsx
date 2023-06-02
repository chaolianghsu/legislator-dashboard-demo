import { Stack, Unstable_Grid2 as Grid } from '@mui/material'
import PropTypes from 'prop-types'
import {
  Card, TitleData, ColChart,
} from '@/components'

const IndecisionIndexSectionTwoPropTypes = {
  estimatedNumberOfVoters: PropTypes.number,
  electoralDistrictData: PropTypes.number,
  avgVoterTurnout: PropTypes.number,
  partySuperiority: PropTypes.shape({
    name: PropTypes.string,
    hight: PropTypes.number,
    low: PropTypes.number,
    superiority: PropTypes.number,
  }),
}
function IndecisionIndexSectionTwo({
  estimatedNumberOfVoters,
  electoralDistrictData,
  avgVoterTurnout,
  partySuperiority,
}) {
  const {
    name, hight, low, superiority,
  } = partySuperiority
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
              <TitleData
                value={estimatedNumberOfVoters.toLocaleString()}
                unit="ticket"
                title="預估投票人數"
              />
              <TitleData
                value={electoralDistrictData.toLocaleString()}
                unit="ticket"
                title="2023選舉人數"
              />
              <TitleData value={`${(avgVoterTurnout * 100).toFixed()}%`} title="平均投票率" />
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid xs={12} lg={8}>
        <Card sx={{ height: '100%' }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={5}
            justifyContent="space-between"
          >
            <Stack spacing={5}>
              <TitleData
                value={hight.toLocaleString()}
                unit="ticket"
                title="最高得票數"
                titlePrefix={name}
              />
              <TitleData
                value={low.toLocaleString()}
                unit="ticket"
                title="最低得票數"
                titlePrefix={name}
              />
              <TitleData
                value={superiority.toLocaleString()}
                unit="ticket"
                title="優勢"
                titlePrefix={name}
              />
            </Stack>
            <ColChart
              series={[
                {
                  name: '筆數',
                  colorByPoint: true,
                  data: [
                    { name: '最高得票', y: hight },
                    { name: '最低得票', y: low },
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

IndecisionIndexSectionTwo.propTypes = IndecisionIndexSectionTwoPropTypes

export default IndecisionIndexSectionTwo
