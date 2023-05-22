import { axiosInstance } from '../axiosInstance'

export const Url = '/main/constituency_swing_rate_module'

export const getData = async () => {
  const res = await axiosInstance.get(Url)
  return res.data
}
