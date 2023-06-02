import { Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import ReplyIcon from '@mui/icons-material/Reply'
import { useQuery } from '@tanstack/react-query'
import { swingModuleAPI } from '@/apis'
import { HeaderBar, BlueButton, LoadingProgress } from '@/components'
import {
  IndecisionIndexSectionOne,
  IndecisionIndexSectionTwo,
  IndecisionIndexSectionThree,
} from '@/containers/indecisionIndex'

function IndecisionIndex() {
  const navigate = useNavigate()

  const {
    data, isLoading, isFetching, isError,
  } = useQuery({
    queryKey: [swingModuleAPI.Url],
    queryFn: () => swingModuleAPI.getData(),
    select: (d) => d.result[0],
  })

  if (isLoading || isFetching || isError) {
    return <LoadingProgress />
  }

  const {
    // section one
    swing_vote: swingVote,
    historical_swing_magnitude: historicalSwing,
    swing_voter_proportion: swingVoterProportion,
    // section two
    estimated_number_of_voters: estimatedNumberOfVoters,
    electoral_district_data: electoralDistrictData,
    avg_voter_turnout: avgVoterTurnout,
    party_superiority: partySuperiority,
    // section three
    village,
    electoral_district: electoralDistrict,
  } = data

  return (
    <Stack spacing={2} sx={{ paddingBottom: '5rem' }}>
      <HeaderBar
        text="候選人競爭模組 / 搖擺指數"
        note={(
          <BlueButton
            onClick={() => {
              navigate('/competition')
            }}
          >
            {' '}
            <ReplyIcon />
            返回
          </BlueButton>
        )}
        icon={<RecentActorsIcon sx={{ fontSize: '3rem' }} />}
      />
      <IndecisionIndexSectionOne
        swingVote={swingVote}
        historicalSwing={historicalSwing}
        swingVoterProportion={swingVoterProportion}
      />
      <IndecisionIndexSectionTwo
        estimatedNumberOfVoters={estimatedNumberOfVoters}
        electoralDistrictData={electoralDistrictData}
        avgVoterTurnout={avgVoterTurnout}
        partySuperiority={partySuperiority}
      />
      <IndecisionIndexSectionThree
        data={village}
        electoralDistrict={electoralDistrict}
      />
    </Stack>
  )
}

IndecisionIndex.propTypes = {}

export default IndecisionIndex
