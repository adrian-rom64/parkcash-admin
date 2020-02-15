import Axios from 'axios'
import Swal from 'sweetalert2'
import setLoading from './Components/Spinner'

const apiUrl = 'https://parkcash.itelab.pl/v1'

export default class Api {

  static axios = () => {
    return Axios.create({
      baseURL: apiUrl,
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      }
    })
  }

  static request = async (method, url, payload) => {
    setLoading(true)
    let response = null
    const setResponse = _response => {response = _response}
    try {
      await this.axios()[method](url, payload).then(res => {
        console.log(res)
        setResponse(res)
      }).catch(err => {
        console.log(err)
        setResponse({status: err.response.status, data: null})
      })
      setLoading(false)
      return {code: response.status, data: response.data}
    }
    catch {
      setLoading(false)
      return {code: 0, data: null}
    }
  }

  static requestwithHandlers = async (method, url, payload) => {
    const res = await this.request(method, url, payload)
    switch (res.code) {
      case 401:
        this.unauthorizedHandler()
        break
      case 0:
        this.noConnectionHandler()
        break
    }
    return res
  }

  static unauthorizedHandler = () => {
    Swal.fire({
      title: global.tr('access-denied'),
      icon: 'error'
    })
    localStorage.removeItem('token')
    window.location.reload()
  }

  static noConnectionHandler = () => {
    Swal.fire({
      title: global.tr('server-error'),
      icon: 'error'
    })
  }

  static get = async (url, payload) => this.requestwithHandlers('get', url, payload)
  static post = async (url, payload) => this.requestwithHandlers('post', url, payload)
  static delete = async (url, payload) => this.requestwithHandlers('delete', url, payload)
  static patch = async (url, payload) => this.requestwithHandlers('patch', url, payload)

}