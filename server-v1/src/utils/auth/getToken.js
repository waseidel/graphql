import jwt from 'jsonwebtoken'

export const getToken = (user) => {
  const token = 'Bearer ' + jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })
  return token
}
