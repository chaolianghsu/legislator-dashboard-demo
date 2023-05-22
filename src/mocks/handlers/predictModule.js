import { rest } from 'msw'
import { predictModuleAPI, baseUrl } from '@/apis'

const Url = `${baseUrl}${predictModuleAPI.Url}`

const predictModuleAPIs = [
  rest.get(Url, (req, res, ctx) => res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json({
      result: [
        {
          date: '2023/04/16 ~ 2023/05/15',
          update: '2023/05/21',
          person: [
            {
              member_id: 1,
              person_id: 0,
              name: '羅智強',
              image: 'https://stationhousevets.com/wp-content/uploads/2021/10/closeup-shot-guinea-pig-isolated-scaled.jpg',
              party: '中國國民黨',
              is_main: true,
              election_success_rate: 47.68,
            },
          ],
          party_advantage: 29614,
          swing_rate: null,
          vol: {
            total: 396,
            grow: '-86.88',
          },
          reputation: {
            total: 1667.4,
            grow: -76,
          },
          favorability: {
            total: 1.45,
            grow: '339.39',
          },
          social_rc: 0,
          social_touch: 0,
          diffusion: 29,
          interaction: 51.7,
        },
      ],
      code: 0,
    }),
  )),
]

export default predictModuleAPIs
