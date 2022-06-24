import { AuthenticationError, UserInputError } from 'apollo-server'
import bcrypt from 'bcryptjs'

import User from '../../../../models/User.model.js'
import { getToken } from '../../../../utils/auth/getToken.js'
import { validateLogin } from '../../../../utils/validators/auth/validateLogin.js'

export const login = async (_, { loginInput: { email, password } }, context) => {
  const { errors, isValid } = validateLogin({ email, password })
  if (!isValid) {
    throw new UserInputError(JSON.stringify(errors))
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new AuthenticationError(`Usuario no encontrado en la base de datos`)
  }
  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) {
    throw new AuthenticationError(`Contraseña errada`)
  }
  return {
    user: {
      id: user._id,
      ...user._doc
    },
    token: getToken(user)
  }
}
