import { rest } from 'msw'
import { partyAdvantageAPI, baseUrl } from '@/apis'

const Url = `${baseUrl}${partyAdvantageAPI.Url}`

const partyAdvantageAPIs = [
  rest.get(Url, (req, res, ctx) => res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json({
      result: [
        {
          party_advantage: 29614,
        },
      ],
      code: 0,
    }),
  )),
]

export default partyAdvantageAPIs
