import { isAuth } from "../../../../middleware/auth/isAuth.js"

export const validateToken = async (_, __, context) => {
  console.log(context.req)
  const auth = isAuth(context)
  if (auth) {
    return true
  }
  return false
}
