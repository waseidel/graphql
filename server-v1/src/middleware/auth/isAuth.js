import { AuthenticationError } from 'apollo-server'
import jwt from 'jsonwebtoken'

export const isAuth = ({ req }) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    throw new AuthenticationError('No hay header de autenticación')
  }
  const token = authHeader.split(' ')[1]
  if (!token) {
    throw new AuthenticationError('Formato de token inválido')
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (err) {
    throw new AuthenticationError('Token no válido/expirado')
  }
}
