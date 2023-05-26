import { rest } from 'msw'
import { constituencyAPI, baseUrl } from '@/apis'

const Url = `${baseUrl}${constituencyAPI.Url}`

const constituencyAPIs = [
  rest.get(Url, (req, res, ctx) => {
    const min = req.url.searchParams.get('min')
    const max = req.url.searchParams.get('max')
    if (min && max) {
      return res(
        ctx.delay(500),
        ctx.status(200),
        ctx.json({
          result: [
            {
              comp: [
                {
                  name: '徐巧芯',
                  image: null,
                  party: '國民黨',
                },
                {
                  name: '許淑華',
                  image: null,
                  party: '民進黨',
                },
              ],
              data: [
                {
                  name: '網路聲量',
                  pc: [
                    98.7,
                    1.3,
                  ],
                  value: [
                    37154,
                    488,
                  ],
                },
                {
                  name: '好感度',
                  pc: [
                    39.4,
                    60.6,
                  ],
                  value: [
                    0.41,
                    0.63,
                  ],
                },
                {
                  name: '聲譽值',
                  pc: [
                    98.3,
                    1.7,
                  ],
                  value: [
                    62688.3,
                    1068.5,
                  ],
                },
                {
                  name: '擴散廣度',
                  pc: [
                    63.4,
                    36.6,
                  ],
                  value: [
                    64,
                    37,
                  ],
                },
                {
                  name: '互動強度',
                  pc: [
                    52.3,
                    47.7,
                  ],
                  value: [
                    29,
                    26.4,
                  ],
                },
                {
                  name: '社群互動力',
                  pc: [
                    0,
                    0,
                  ],
                  value: [
                    0,
                    0,
                  ],
                },
              ],
            },
          ],
          code: 0,
        }),
      )
    }
    return res(
      ctx.delay(500),
      ctx.status(400),
    )
  }),
]

export default constituencyAPIs
