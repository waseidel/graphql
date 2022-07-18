import * as Yup from 'yup'

export const validateRegister = Yup.object({
  firstName: Yup.string()
    .required('El nombre es obligatorio'),
  lastName: Yup.string()
    .required('El apellido es obligatorio'),
  email: Yup.string()
    .email('Dirección de correo no válida')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria'),
  confirmPassword: Yup.string()
    .required('Debes confirmar la contraseña')
    .oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden')
})

export const validateLogin = Yup.object({
  email: Yup.string()
    .email('Dirección de correo no válida')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
})