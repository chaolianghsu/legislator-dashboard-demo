import { axiosInstance } from '../axiosInstance'

export const Url = '/main/party_advantage'

export const getData = async () => {
  const res = await axiosInstance.get(Url)
  return res.data
}
