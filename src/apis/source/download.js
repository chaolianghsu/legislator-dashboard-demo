import { axiosInstance } from '../axiosInstance'

export const Url = '/main/voter_profile_download'

export const getData = async () => {
  const res = await axiosInstance.get(Url, { responseType: 'blob' })
  return res.data
}
