import Hierachy from '../../../../models/Hierachy.model.js'
import { isAuth } from '../../../../middleware/auth/isAuth.js'

export const hierachy = async (_, { id }, context) => {
  isAuth(context)
  const hierachy = await Hierachy.findById(id)
  return hierachy
}
