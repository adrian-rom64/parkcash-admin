// import Axios from 'axios'
// import Swal from 'sweetalert2'

// const apiUrl = 'https://parkcash.itelab.pl/v1'

// export default class Api {

//   static axios = () => {
//     return Axios.create({
//       baseURL: apiUrl,
//       timeout: 10000,
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//         'Content-type': 'application/json',
//       }
//     })
//   }

//   static request = async (method, url, payload) => {
//     // setLoading(true)
//     let response = null
//     const setResponse = _response => {response = _response}
//     try {
//       await Api.axios()[method](url, payload).then(res => {
//         console.log(res)
//         setResponse(res)
//       }).catch(err => {
//         console.log(err)
//         setResponse({status: err.response.status, data: null})
//       })
//       // setLoading(false)
//       return {code: response.status, data: response.data}
//     }
//     catch {
//       // setLoading(false)
//       return {code: 0, data: null}
//     }
//   }

//   static requestwithHandlers = async (method, url, payload) => {
//     const res = await Api.request(method, url, payload)
//     // switch (res.code) {
//     //   case 401:
//     //     Api.unauthorizedHandler()
//     //     break
//     //   case 0:
//     //     Api.noConnectionHandler()
//     //     break
//     // }
//     return res
//   }

//   static unauthorizedHandler = () => {
//     Swal.fire({
//       title: global.tr('access-denied'),
//       icon: 'error'
//     })
//     localStorage.removeItem('token')
//     window.location.reload()
//   }

//   static noConnectionHandler = () => {
//     Swal.fire({
//       title: global.tr('server-error'),
//       icon: 'error'
//     })
//   }

//   static get = async (url, payload) => this.request('get', url, payload)
//   static post = async (url, payload) => this.request('post', url, payload)
//   static delete = async (url, payload) => this.request('delete', url, payload)
//   static patch = async (url, payload) => this.request('patch', url, payload)

//   static login = async (email, password) => {
//     const axios = Axios.create({
//       baseURL: 'https://parkcash.itelab.pl/v1',
//       timeout: 10000,
//       headers: {
//         'Content-type': 'application/json'
//       }
//     })
//     const data = {
//       email: email,
//       password: password
//     }
//     return await axios.post('/sessions', data)
//   } 
// }

import Axios from 'axios'

class Api {
  constructor () {

    this.apiUrl = 'https://parkcash.itelab.pl/v1'
    this.token = null

    this.axios = Axios.create({
      baseURL: this.apiUurl,
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

    this.login = async (email, password) => {
      const axios = Axios.create({
        baseURL: 'https://parkcash.itelab.pl/v1',
        timeout: 10000,
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = {
        email: email,
        password: password
      }
      return await axios.post('/sessions', data)
    } 
  
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


