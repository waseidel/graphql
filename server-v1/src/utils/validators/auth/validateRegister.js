export const validateRegister = ({ email, password, confirmPassword }) => {
  const errors = {}
  if (!email) {
    errors.email = 'El correo es obligatorio'
  }
  if (!password) {
    errors.password = 'La contraseña es obligatoria'
  } else if (password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres'
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden'
  }
  const isValid = Object.keys(errors).length === 0
  return {
    errors,
    isValid
  }
}
