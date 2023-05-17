import { axiosInstance } from '../axiosInstance'

export const Url = '/main/download'

export const download = async ({ area }) => {
  const res = await axiosInstance.post(Url, null, { params: { area }, responseType: 'blob' })
  return res.data
}
