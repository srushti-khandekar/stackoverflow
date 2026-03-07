import axios from 'axios'

const baseURL = 'http://15.206.166.136:8080/api'
const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
