import axios from 'axios'

const baseURL = 'http://15.207.141.133:8080/api'
const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
