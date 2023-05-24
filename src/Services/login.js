import axios from 'axios'

//Componentes que manejan la comunicación con el servidor
const url = 'http://localhost:3003/api/login'

const login = async credentials => {
  const response = await axios.post(url, credentials)
  return response.data
}

const loginService = {
  login
}

export default loginService
