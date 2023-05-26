import { axiosInstance } from '../axiosInstance'

export const Url = '/main/policy_satisfaction'

export const getData = async () => {
  const res = await axiosInstance.get(Url)
  return res.data
}
