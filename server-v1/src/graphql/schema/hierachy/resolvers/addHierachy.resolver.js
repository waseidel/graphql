import Hierachy from '../../../../models/Hierachy.model.js';
import { isAuth } from '../../../../middleware/auth/isAuth.js'
import { validateHierachy } from '../../../../utils/validators/validateHierachy.js'

export const addHierachy = async (_, args, context) => {
  const user = isAuth(context)
  const { errors, isValid } = validateHierachy(args)
  if (!isValid) {
    throw new Error(JSON.stringify(errors))
  }
  const hierachy = new Hierachy({
    name: args.name,
    description: args.description,
    createdBy: user._id,
  })
  if (args.parentId) {
    hierachy.parentId = args.parentId
  }
  if (args.children) {
    hierachy.children = args.children
  }

}
