import axios from 'axios'

//Componentes que manejan la comunicación con el servidor
const url = 'http://localhost:3003/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = axios.get(url)
  const response = await request
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(url, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token }
  }
  const request = axios.put(`${url}/${id}`, newObject, config)
  const response = await request
  return response.data
}

const updateLike = async (id, blogObject) => {
  const config = {
    headers: { Authorization: token }
  }
  const request = axios.put(`${url}/like/${id}`, blogObject, config)
  const response = await request
  return response.data
}

const remove = async (id) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${url}/${id}`, config)
  return response.data
}

const blogService = {
  setToken,
  getAll,
  create,
  update,
  remove,
  updateLike
}

export default blogService
