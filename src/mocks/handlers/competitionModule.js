import { rest } from 'msw'
import { competitionModuleAPI, baseUrl } from '@/apis'

const Url = `${baseUrl}${competitionModuleAPI.Url}`

const competitionModuleAPIs = [
  rest.get(Url, (req, res, ctx) => res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json({
      result: [
        {
          date: '2023/04/29 ~ 2023/05/29',
          update: '2023/05/29',
          name: '徐巧芯',
          image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076006605.jpg',
          city: '台北市',
          electoral_district: '第7選區',
          market_share: 0.9547967136861663,
          constituency_competition: {
            comp: [
              {
                name: '徐巧芯',
                image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076006605.jpg',
                party: '國民黨',
              },
              {
                name: '許淑華',
                image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076032143.jpg',
                party: '民進黨',
              },
            ],
            data: [
              {
                name: '網路聲量',
                pc: [
                  95.5,
                  4.5,
                ],
                value: [
                  144920,
                  6861,
                ],
              },
              {
                name: '好感度',
                pc: [
                  52.7,
                  47.3,
                ],
                value: [
                  0.48,
                  0.43,
                ],
              },
            ],
          },
          public_satisfaction: 1.4788137700350186,
          swing_vote: 59284,
          voter_profile: {
            100: 0,
            name: '第7選區',
            number_of_voters: 234293,
            '20-24': 0.05,
            '25-29': 0.07,
            '30-34': 0.07,
            '35-39': 0.08,
            '40-44': 0.1,
            '45-49': 0.09,
            '50-54': 0.09,
            '55-59': 0.09,
            '60-64': 0.09,
            '65-69': 0.09,
            '70-74': 0.07,
            '75-79': 0.04,
            '80-84': 0.03,
            '85-89': 0.02,
            '90-94': 0.01,
            '95-99': 0,
          },
        },
      ],
      code: 0,
    }),
  )),
]

export default competitionModuleAPIs
