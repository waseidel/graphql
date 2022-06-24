import { useQuery } from '@apollo/client'
import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { VALIDATE_TOKEN } from '../../apollo/grapql/auth/mutations'
import { AuthContext } from '../../context/authContext'

const ProtectedRoutes = () => {
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  const { data, error, loading } = useQuery(VALIDATE_TOKEN)


  useEffect(() => {
    console.log(data, error)
    if (!context.user) {
      navigate('/auth/login')
    }
  }, [navigate, context, data, error])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div><Outlet /></div>
  )
}

export default ProtectedRoutes