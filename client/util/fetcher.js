import axios from 'axios'

const serverBaseURL = process.env.INTERNAL_API_URL || 'http://backend:8080/api'
const browserBaseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.hostname}:8080/api`
    : 'http://localhost:8080/api')

const baseURL = typeof window === 'undefined' ? serverBaseURL : browserBaseURL

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
