import config from '../config'
import axios from 'axios'

const baseApi = config.baseAPI

export const fetchAllData = async action => {
  try {
    const api = `${baseApi}data/get-all-data`
    const response = await axios.get(api)
    const res = await response.data.data
    return res
  } catch (e) {
    console.log(e)
  }
}
