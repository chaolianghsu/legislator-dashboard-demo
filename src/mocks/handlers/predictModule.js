import { rest } from 'msw'
import { predictModuleAPI, baseUrl } from '@/apis'

const Url = `${baseUrl}${predictModuleAPI.Url}`

const predictModuleAPIs = [
  rest.get(Url, (req, res, ctx) => res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json(
      {
        result: [
          {
            date: '2023/04/24 ~ 2023/05/24',
            update: '2023/05/24',
            person: [
              {
                member_id: 1,
                person_id: 1,
                name: '徐巧芯',
                image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076006605.jpg',
                party: '國民黨',
                is_main: true,
                election_success_rate: null,
              },
              {
                member_id: 1,
                person_id: 2,
                name: '許淑華',
                image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076032143.jpg',
                party: '民進黨',
                is_main: false,
                election_success_rate: null,
              },
            ],
            party_advantage: 0,
            swing_rate: 0,
            vol: {
              total: 177958,
              grow: '-23.78',
            },
            reputation: {
              total: 312525.5,
              grow: -30.3,
            },
            favorability: {
              total: 0.51,
              grow: '-17.74',
            },
            social_rc: 0,
            social_touch: 0,
            diffusion: 86,
            interaction: 31.4,
          },
        ],
        code: 0,
      },
    ),
  )),
]

export default predictModuleAPIs
