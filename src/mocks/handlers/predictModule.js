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
            date: '2023/04/25 ~ 2023/05/25',
            update: '2023/05/25',
            person: [
              {
                member_id: 1,
                person_id: 1,
                name: '徐巧芯',
                image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076006605.jpg',
                party: '國民黨',
                is_main: true,
                election_success_rate: 54.5,
              },
              {
                member_id: 1,
                person_id: 2,
                name: '許淑華',
                image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076032143.jpg',
                party: '民進黨',
                is_main: false,
                election_success_rate: 45.5,
              },
            ],
            party_advantage: 34591,
            swing_rate: 15,
            vol: {
              total: 180315,
              grow: '-28.51',
            },
            reputation: {
              total: 315620,
              grow: -34.6,
            },
            favorability: {
              total: 0.5,
              grow: '-18.03',
            },
            social_rc: 18.5,
            social_touch: 1209,
            diffusion: 88,
            interaction: 30.2,
          },
        ],
        code: 0,
      },
    ),
  )),
]

export default predictModuleAPIs
