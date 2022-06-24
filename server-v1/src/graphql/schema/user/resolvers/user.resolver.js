import User from '../../../../models/User.model.js'
import { isAuth } from '../../../../middleware/auth/isAuth.js'

export const user = async (_, args, context) => {
  isAuth(context)
  const user = await User.findById({ _id: args.id })
  return user
}
