import { rest } from 'msw'
import { xlsxsAPI, baseUrl } from '@/apis'
import axios from 'axios'

const Url = `${baseUrl}${xlsxsAPI.Url}`

const xlsxsAPIs = [
  rest.post(Url, async (req, res, ctx) => {
    try {
      const xlsxFile = await axios({
        url: '../../../public/mock.xlsx',
        responseType: 'blob',
      })
      return res(
        ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
        ctx.body(xlsxFile.data),
      )
    } catch (err) {
      return res(
        ctx.status(500),
        ctx.json({
          detail: err,
        }),
      )
    }
  }),
]

export default xlsxsAPIs
