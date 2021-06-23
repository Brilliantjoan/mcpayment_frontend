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

export const fetchDeleteData = async action => {
  try {
    const api = `${baseApi}data/delete-data`
    const body = {
      data: {
        id: action.payload
      }
    }
    axios.delete(api, body)
  } catch (e) {
    console.log(e)
  }
}

export const fetchSubmitData = async action => {
  try {
    console.log('action', action)
    const api = `${baseApi}data/insert-data`
    const body = {
      title: action.payload.title,
      total: action.payload.total,
      type: action.payload.type
    }
    const response = await axios.post(api, body)
    const res = await response.data.data
    return res
  } catch (e) {
    console.log(e)
  }
}
