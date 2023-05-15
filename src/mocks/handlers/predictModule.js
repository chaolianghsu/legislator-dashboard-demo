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
          date: '2023/01/22 ~ 2023/02/21',
          update: '2023/02/21',
          name: '羅智強',
          image: 'https://stationhousevets.com/wp-content/uploads/2021/10/closeup-shot-guinea-pig-isolated-scaled.jpg',
          vol: {
            total: 41762,
            grow: '8.92',
          },
          reputation: {
            total: 93962.9,
            grow: 4,
          },
          favorability: {
            total: 0.8,
            grow: '-4.76',
          },
          social_rc: 712118,
          social_touch: 118652,
          diffusion: 77,
          interaction: 21.2,
          superior_vote: 105922,
          swing: 66.67,
          politician: [
            {
              city: '臺北市',
              name: '羅智強',
              political: '中國國民黨',
              elpc: 47.68,
              image: '',
            },
            {
              city: '臺北市',
              name: '陳時中',
              political: '民進黨',
              elpc: 32.2,
              image: '',
            },
            {
              city: '臺北市',
              name: '黃珊珊',
              political: '親民黨',
              elpc: 29.8,
              image: '',
            },
          ],
        },
      ],
      code: 0,
    }),
  )),
]

export default predictModuleAPIs
