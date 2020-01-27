import Axios from 'axios'

class Api {
  constructor () {

    this.url = 'http://localhost:3000'
    this.token = 'dgfdgdfsg'

    this.axios = Axios.create({
      baseURL: this.url,
      timeout: 10000,
      headers: {Authorization: `Bearer ${this.token}`, 'Content-type': 'application/json'}
    })

    this.request = async (method, url, payload) => {
      let response = null
			const setResponse = _response => {response = _response}
			try {
				await this.axios[method](url, payload).then(res => {
					setResponse(res)
				}).catch(err => {
					setResponse({status: err.response.status, data: null})
				})
				return {code: response.status, data: response.data}
			}
			catch {
				console.error('Error while connecting to server')
				return {code: 0, data: null}
			}
    }
  
    const availableMethods = ['get', 'post', 'delete', 'patch']
    availableMethods.forEach(method => {
      this[method] = async (url, payload) => this.request(method, url, payload)
    })
  }
}

export default (() =>  {
  let instance = null
  const createInstance = () => {
    return new Api()
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()


