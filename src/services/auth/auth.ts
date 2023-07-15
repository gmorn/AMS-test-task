import axios from 'axios'
import { T_AuthData } from '../types/user.types'

function setJwtCookie(token: string): void {
  const currentDate = new Date()
  const expirationDate = new Date(currentDate.getTime() + 15 * 60 * 1000)
  document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/;`
}

export const auth = async (data: T_AuthData) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', data)
    setJwtCookie(response.data.token)
    return true
  } catch (error) {
    return false
  }
}