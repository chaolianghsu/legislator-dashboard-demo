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
          image: null,
          party: '國民黨',
          is_main: true,
          election_success_rate: null,
        },
        {
          member_id: 1,
          person_id: 2,
          name: '許淑華',
          image: null,
          party: '民進黨',
          is_main: false,
          election_success_rate: null,
        },
      ],
      code: 0,
    }),
  )),
]

export default competitorAPIs
