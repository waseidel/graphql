import Hierachy from '../../../../models/Hierachy.model.js'
import { isAuth } from '../../../../middleware/auth/isAuth.js'

export const hierachies = async (_, __, context) => {
  isAuth(context)
  const hierachies = await Hierachy.find({}).sort({ createdAt: -1 })
  return hierachies
}
