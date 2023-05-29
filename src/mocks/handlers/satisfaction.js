import { rest } from 'msw'
import { satisfactionAPI, baseUrl } from '@/apis'

const Url = `${baseUrl}${satisfactionAPI.Url}`

const fields = ['社會福利', '國民教育', '環境保護', '警消治安', '觀光旅遊', '健康衛生', '居住正義', '農林漁牧']

const satisfactionAPIs = [
  rest.get(Url, (req, res, ctx) => res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json({
      result: [
        {
          public_satisfaction: Math.random() * 2,
          data: fields.map((field) => (
            {
              name: field,
              vol: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
              satisfaction: Math.random(),
            }
          )),
        },
      ],
      code: 0,
    }),
  )),
]

export default satisfactionAPIs
