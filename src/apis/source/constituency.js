import { axiosInstance } from '../axiosInstance'

export const Url = '/main/constituency_competition'

// ex: from: 20210101, to: 20211231
export const getData = async ({ from, to }) => {
  const res = await axiosInstance.get(Url, { params: { min: from, max: to } })
  return res.data
}
