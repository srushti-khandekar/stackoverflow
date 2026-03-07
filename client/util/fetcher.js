import axios from 'axios'

const baseURL = 'http://52.66.97.41:8080/api'
const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
