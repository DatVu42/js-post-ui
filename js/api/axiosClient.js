import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (!error.response) throw new Error('Network error. Please try again later!')

    if (error.response.status === 401) {
      window.location.assign('https://www.google.com.vn')
      return
    }

    return Promise.reject(error)
  },
)

export default axiosClient
