import { useState } from 'react'
import {
  Card, Stack, Avatar, Typography, Select, MenuItem, Tooltip, CardHeader, CardActions,
} from '@mui/material'
import PropTypes from 'prop-types'
import {
  TitleData, StackedBarChartGroup, DetailButton,
} from '@/components'
import InfoIcon from '@mui/icons-material/Info'
import { descriptionConfigs } from '@/components/TitleData'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { constituencyAPI } from '@/apis'
import CircularProgress from '@mui/material/CircularProgress'

const candidatePropTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  party: PropTypes.string,
}

const candidateDataPropTypes = {
  name: PropTypes.string,
  pc: PropTypes.arrayOf(PropTypes.number),
  value: PropTypes.arrayOf(PropTypes.number),
}

const CandidatesPropTypes = {
  constituencyCompetition: PropTypes.shape({
    comp: PropTypes.arrayOf(PropTypes.shape(candidatePropTypes)),
    data: PropTypes.arrayOf(PropTypes.shape(candidateDataPropTypes)),
  }),
}
function Candidates({ constituencyCompetition }) {
  const navigate = useNavigate()
  const candidate = constituencyCompetition.comp[0]
  const opponents = constituencyCompetition.comp.slice(1)
  const [opponent, setOpponent] = useState(constituencyCompetition.comp[1].person_id)

  const {
    data, isLoading, isFetching, isError,
  } = useQuery({
    queryKey: [opponent, constituencyAPI.Url],
    queryFn: () => constituencyAPI.getData({ id: opponent }),
    // 競爭模組只顯示網路聲量 & 好感度
    select: (d) => d.result[0].data.filter((item) => (item.name === '網路聲量') || (item.name === '好感度')),
  })

  if (isLoading || isFetching) {
    return (
      <Stack justifyContent="center" alignItems="center" sx={{ width: '100%', height: '100%' }}>
        <CircularProgress color="inherit" />
      </Stack>
    )
  }

  if (isError) {
    return <>oops, somethings wrong...</>
  }

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
              src={candidate.image}
              sx={{
                width: 150,
                height: 150,
                marginBottom: '1.2rem',
                border: '0.3rem solid #d8d8d8',
              }}
            />
            <Typography>{candidate.name}</Typography>
          </Stack>
          <Typography
            sx={{ color: 'customGridTextBlue.light', fontSize: '3rem' }}
          >
            vs
          </Typography>
          <Stack alignItems="center">
            <Avatar
              src={opponents.find((o) => o.person_id === opponent).image}
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
                <MenuItem value={op.person_id} key={op.name}>
                  {op.name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          {data.map((index) => (
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

Candidates.propTypes = CandidatesPropTypes

export default Candidates
