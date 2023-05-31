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
          date: '2023/04/30 ~ 2023/05/30',
          update: '2023/05/30',
          name: '徐巧芯',
          image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076006605.jpg',
          city: '台北市',
          electoral_district: '台北市第7選區',
          market_share: 0.9653321420986724,
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
                  96.5,
                  3.5,
                ],
                value: [
                  131819,
                  4734,
                ],
              },
              {
                name: '好感度',
                pc: [
                  50,
                  50,
                ],
                value: [
                  0.47,
                  0.47,
                ],
              },
            ],
          },
          public_satisfaction: 1.4628517771845526,
          swing_vote: 59284,
          voter_profile: {
            100: 0,
            name: '台北市第7選區',
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
          historical: {
            國民黨: {
              year: [
                2008,
                2012,
                2016,
                2020,
              ],
              value: [
                0.66,
                0.63,
                0.45,
                0.46,
              ],
            },
            民進黨: {
              year: [
                2008,
                2012,
                2016,
                2020,
              ],
              value: [
                0.32,
                0,
                0,
                0.43,
              ],
            },
            無黨籍: {
              year: [
                2008,
                2012,
                2016,
                2020,
              ],
              value: [
                0.02,
                0.37,
                0.55,
                0.11,
              ],
            },
          },
        },
      ],
      code: 0,
    }),
  )),
]

export default competitionModuleAPIs
