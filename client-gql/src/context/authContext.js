import jwtDecode from 'jwt-decode';
import { createContext, useReducer } from 'react';

const initialState = {
  user: null
}

if (localStorage.getItem('token')) {
  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token)

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('token')
  } else {
    const user = JSON.parse(localStorage.getItem('user'))
    initialState.user = { user: user, token: decodedToken }
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData) => { },
  logout: () => { }
})

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const login = (userData) => {
    const { user, token } = userData
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify({ ...user }))
    dispatch({
      type: 'LOGIN',
      payload: userData
    })
  }
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT' })
  }
  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  )

}

export { AuthContext, AuthProvider }