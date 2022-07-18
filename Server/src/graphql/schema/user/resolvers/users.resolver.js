import User from '../../../../models/User.model.js'
import { isAuth } from '../../../../middleware/auth/isAuth.js'

export const users = async (_, { }, context) => {
  isAuth(context)
  const users = await User.find({})
  return users
}
