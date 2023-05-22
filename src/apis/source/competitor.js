import { axiosInstance } from '../axiosInstance'

export const Url = '/main/competitor'

export const getData = async () => {
  const res = await axiosInstance.get(Url)
  return res.data
}
