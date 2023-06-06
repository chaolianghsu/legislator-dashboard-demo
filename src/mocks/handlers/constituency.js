import { rest } from 'msw'
import { constituencyAPI, baseUrl } from '@/apis'

const Url = `${baseUrl}${constituencyAPI.Url}`

const constituencyAPIs = [
  rest.get(Url, (req, res, ctx) => {
    const min = req.url.searchParams.get('min')
    const max = req.url.searchParams.get('max')
    const id = req.url.searchParams.get('person_id')
    if ((min && max) || id) {
      return res(
        ctx.delay(500),
        ctx.status(200),
        ctx.json({
          result: [
            {
              comp: [
                {
                  person_id: 1,
                  name: '徐巧芯',
                  party: '國民黨',
                  image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076006605.jpg',
                },
                {
                  person_id: 2,
                  name: '許淑華',
                  party: '民進黨',
                  image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076032143.jpg',
                },
                {
                  person_id: 3,
                  name: '羅智強',
                  party: '國民黨',
                  image: null,
                },
              ],
              data: [
                {
                  name: '網路聲量',
                  pc: [
                    99.1,
                    0.9,
                  ],
                  value: [
                    19903,
                    186,
                  ],
                },
                {
                  name: '好感度',
                  pc: [
                    41.8,
                    58.2,
                  ],
                  value: [
                    0.41,
                    0.57,
                  ],
                },
                {
                  name: '聲譽值',
                  pc: [
                    98.5,
                    1.5,
                  ],
                  value: [
                    30889.3,
                    466.8,
                  ],
                },
                {
                  name: '擴散廣度',
                  pc: [
                    66,
                    34,
                  ],
                  value: [
                    68,
                    35,
                  ],
                },
                {
                  name: '互動強度',
                  pc: [
                    68.8,
                    31.2,
                  ],
                  value: [
                    33.5,
                    15.2,
                  ],
                },
                {
                  name: '社群互動力',
                  pc: [
                    58,
                    42,
                  ],
                  value: [
                    28344,
                    20508,
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
