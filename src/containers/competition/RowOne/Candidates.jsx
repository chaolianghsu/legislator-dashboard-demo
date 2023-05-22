import { useState } from 'react'
import {
  Card, Stack, Avatar, Typography, Select, MenuItem, Tooltip, CardHeader, CardActions,
} from '@mui/material'
import { TitleData, StackedBarChartGroup, DetailButton } from '@/components'
import { districtData, competitionData } from '@/containers/electoralDistrictCompetition/data'
import InfoIcon from '@mui/icons-material/Info'
import { descriptionConfigs } from '@/components/TitleData'
import { useNavigate } from 'react-router-dom'

function Candidates() {
  const navigate = useNavigate()

  const { politician, opponents } = districtData
  const [opponent, setOpponent] = useState(opponents[0].name)
  return (
    <Card>
      <CardHeader title={(
        <TitleData title="選區競爭" value="" />
      )}
      />
      <Stack alignItems="center" sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
        >
          <Stack alignItems="center">
            <Avatar
              src={politician.image}
              sx={{
                width: 150,
                height: 150,
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
              src={opponents.find((o) => o.name === opponent).image}
              sx={{
                width: 150,
                height: 150,
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
              {opponents.map((op) => (
                <MenuItem value={op.name} key={op.name}>
                  {op.name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          {competitionData[opponent].data.slice(0, 2).map((index) => (
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
            />
          ))}
        </Stack>
      </Stack>
      <CardActions>
        <DetailButton
          onClick={() => navigate('/competition/electoral-district-competition')}
          sx={{ marginTop: 'auto' }}
        >
          詳細資料
        </DetailButton>
      </CardActions>
    </Card>
  )
}

Candidates.propTypes = {}

export default Candidates
