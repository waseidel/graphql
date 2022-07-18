import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { Form, Formik } from "formik"

import InputText from "../FormComponents/InputText"
import { AuthContext } from '../../context/authContext'
import { REGISTER_USER } from "../../apollo/grapql/auth/mutations"
import { validateRegister } from "../../utils/validations/auth"

const RegisterForm = () => {
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  const [errors, setErrors] = useState()
  const [formulario, setFormulario] = useState()

  const [register, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { login } }) {
      context.login(login)
      navigate('/dashboard')
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors)
    },
    variables: { registerInput: formulario }
  })
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleSubmit = (values) => {
    setFormulario({ ...values })
    register()
  }

  useEffect(() => {
    if (context.user) {
      navigate('/dashboard')
    }
  }, [context, navigate])

  return (
    <>
      <h1 className={`text-3xl text-center w-full py-5 font-bold ${loading ? '' : null}`}>
        Registro
      </h1>
      {
        errors
          ? (<span className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
            <ul>
              {errors.map((error) =>
                <li key={error}>{error.message}</li>
              )}
            </ul>
          </span>)
          : null
      }
      <Formik
        initialValues={initialValues}
        validationSchema={validateRegister}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputText
            label='Nombres'
            type='text'
            name='firstName'
            placeholder='Nombres'
          />
          <InputText
            label='Apellidos'
            type='text'
            name='lastName'
            placeholder='Apellidos'
          />
          <InputText
            label='Correo Electronico'
            type='email'
            name='email'
            placeholder='tucorreo@etm-cali.com'
          />
          <InputText
            label='Contraseña'
            type='password'
            name='password'
            placeholder='Contraseña'
          />
          <InputText
            label='Confirmar contraseña'
            type='password'
            name='confirmPassword'
            placeholder='Confirmar contraseña'
          />
          <div className="flex w-full mx-auto">
            <button className='w-full rounded-md py-1 text-white bg-indigo-500 hover:bg-indigo-600' type="submit">
              Registrarse
            </button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default RegisterForm