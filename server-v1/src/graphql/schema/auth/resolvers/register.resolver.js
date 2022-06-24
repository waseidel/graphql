import { AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server'
import bcrypt from 'bcryptjs'

import { validateRegister } from '../../../../utils/validators/auth/validateRegister.js'
import { getToken } from '../../../../utils/auth/getToken.js'
import User from '../../../../models/User.model.js'
import { isAuth } from '../../../../middleware/auth/isAuth.js'

export const register = async (_, { registerInput }, context) => {
  const users = await User.find({})
  if (users.length > 0) {
    throw new ForbiddenError('El servicio de registro no está hábilitado')
  }
  if (isAuth(context)) {
    throw new Error('Ya estás autenticado')
  }
  const { errors, isValid } = validateRegister({ ...registerInput })
  if (!isValid) {
    console.log({ errors, isValid })
    throw new UserInputError('Errors', { errors })
  }
  const {
    firstName,
    lastName,
    email,
    password,
  } = registerInput
  const oldUser = await User.findOne({ email })
  if (oldUser) {
    throw new AuthenticationError(`Usuaro ${email} ya existe`)
  }
  const encryptedPassword = await bcrypt.hash(password, 10)
  const newUser = new User({
    firstName,
    lastName,
    email: email.toLowerCase(),
    password: encryptedPassword
  })
  const user = await newUser.save()
  return {
    user: {
      id: user._id,
      ...user._doc
    },
    token: getToken(user)
  }
}
