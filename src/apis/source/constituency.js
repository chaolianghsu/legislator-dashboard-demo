import { axiosInstance } from '../axiosInstance'

export const Url = '/main/constituency_competition'

// e.g. from: 20210101, to: 20211231  id = 1
// all optional
export const getData = async ({ from, to, id }) => {
  const res = await axiosInstance.get(Url, { params: { min: from, max: to, person_id: id } })
  return res.data
}
