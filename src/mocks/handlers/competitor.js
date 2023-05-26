import { rest } from 'msw'
import { competitorAPI, baseUrl } from '@/apis'

const Url = `${baseUrl}${competitorAPI.Url}`

const competitorAPIs = [
  rest.get(Url, (req, res, ctx) => res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json({
      result: [
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
      code: 0,
    }),
  )),
]

export default competitorAPIs
