import { Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import IndecisionBlock from './IndecisionBlock'
import Descriptions from './Descriptions'

const swingObjectPropType = {
  name: PropTypes.string,
  swing_vote: PropTypes.number,
  estimated_number_of_voters: PropTypes.number,
  color: PropTypes.number,
}

const IndecisionIndexSectionThreePropTypes = {
  data: PropTypes.shape({
    total: PropTypes.number,
    極度搖擺: PropTypes.arrayOf(PropTypes.shape(swingObjectPropType)),
    中度搖擺: PropTypes.arrayOf(PropTypes.shape(swingObjectPropType)),
    輕度搖擺: PropTypes.arrayOf(PropTypes.shape(swingObjectPropType)),
    不搖擺: PropTypes.arrayOf(PropTypes.shape(swingObjectPropType)),
  }),
  electoralDistrict: PropTypes.string,
}

const configs = [
  {
    title: '優勢',
    description: (
      <Typography variant="body1">
        <p>藍營：國民黨平均得票率&gt;70%</p>
        <p>泛藍：國民黨平均得票率55%~70%</p>
        <p>中立：藍綠平均得票率分別在45%~55%</p>
        <p>泛綠：民進黨平均得票率55%~70%</p>
        <p>深綠：民進黨平均得票率&gt;70%</p>
      </Typography>
    ),
    data: [
      {
        name: '深藍',
        color: '#1343C9',
      },
      {
        name: '淺藍',
        color: '#4c82e7',
      },
      {
        name: '中立',
        color: '#797979',
      },
      {
        name: '淺綠',
        color: '#548C00',
      },
      {
        name: '綠營',
        color: '#1B7509',
      },
    ],
  },
  {
    title: '搖擺率',
    description: (
      <Typography variant="body1">
        <p>極度搖擺：過去四次選舉改變過三次支持政黨</p>
        <p>中度搖擺：過去四次選舉改變過二次支持政黨</p>
        <p>輕度搖擺：過去四次選舉改變過二次支持政黨</p>
        <p>不搖擺：過去四次選舉都是相同政黨獲勝</p>
      </Typography>
    ),
    data: [
      {
        name: '極度搖擺',
        color: '#CE0000',
      },
      {
        name: '中度搖擺',
        color: '#F79116',
      },
      {
        name: '輕度搖擺',
        color: '#D8C644',
      },
      {
        name: '不搖擺',
        color: '#C6C6C6',
      },
    ],
  },
]

const indecision = ['極度搖擺', '中度搖擺', '輕度搖擺', '不搖擺']

function IndecisionIndexSectionThree({ data, electoralDistrict }) {
  const villagesData = indecision.reduce((acc, item) => {
    if (data[item]) {
      return [
        {
          swing: item,
          villages: [...data[item]],
        },
        ...acc,
      ]
    }
    return acc
  }, [])
  return (
    <Stack spacing={1} sx={{ padding: '1.5rem' }}>
      <Stack
        direction={{
          xs: 'column',
          xl: 'row',
        }}
        justifyContent="space-between"
      >
        <Typography
          variant="h4"
          sx={{
            color: 'customGray.main',
            fontSize: '2rem',
          }}
        >
          {electoralDistrict}
          &nbsp; 共 &nbsp;
          <span
            style={{
              color: '#934DFC',
              fontSize: '3rem',
            }}
          >
            {data.total}
          </span>
          &nbsp; 里搖擺選票狀況
        </Typography>
        <Stack
          direction={{
            xs: 'column',
            lg: 'row',
          }}
          spacing={{
            xs: 0,
            lg: 4,
          }}
        >
          {configs.map((config) => (
            <Descriptions
              key={config.title}
              configs={config.data}
              description={config.description}
              title={config.title}
            />
          ))}
        </Stack>
      </Stack>
      {villagesData.map((villageData) => (
        <IndecisionBlock {...villageData} key={villageData.swing} />
      ))}
    </Stack>
  )
}

IndecisionIndexSectionThree.propTypes = IndecisionIndexSectionThreePropTypes

export default IndecisionIndexSectionThree
