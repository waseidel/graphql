export const validateLogin = ({ email, password }) => {
  const errors = {}
  if (!email) {
    errors.email = 'El correo es obligatorio'
  }
  if (!password) {
    errors.password = 'La contraseña es obligatoria'
  }
  const isValid = Object.keys(errors).length === 0
  return {
    errors,
    isValid
  }
}