import { rest } from 'msw'
import axios from 'axios'
import { baseUrl, downloadAPI } from '@/apis'

const handlers = [
  // 仲介典範
  rest.get(`${baseUrl}${downloadAPI.Url}`, async (req, res, ctx) => {
    try {
      const xlsxFile = await axios({
        url: '/mock.xlsx',
        responseType: 'blob',
      })

      return res(
        ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
        ctx.body(xlsxFile.data),
      )
    } catch (error) {
      return res(
        ctx.status(500),
        ctx.json({
          detail: error,
        }),
      )
    }
  }),
]

export default handlers
