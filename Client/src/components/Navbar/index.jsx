import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogout = () => {
    logout();
    navigate('/auth/login')
  }

  return (
    <nav className="w-full py-1 shadow-md bg-slate-600">
      <div className="flex px-3 flex-row justify-between my-2 text-white items-center">
        <div className="flex flex-col">
          <h5 className="text-medium">
            <Link className='decoration-none' to='/'>React Login</Link>
          </h5>
        </div>
        <div className="flex flex-row">
          {
            user
              ? <button className="px-2 py-0 rounded-sm border-b-2 border-slate-600 hover:border-slate-700 hover:bg-slate-500 ease-in-out duration-100" onClick={onLogout}>Cerrar sesión</button>
              : (
                <>
                  <Link to='/auth/register' className="px-2 py-0 rounded-sm border-b-2 border-slate-600 hover:border-slate-700 hover:bg-slate-500 ease-in-out duration-100">Register</Link>
                  <Link to='/auth/login' className="px-2 py-0 rounded-sm border-b-2 border-slate-600 hover:border-slate-700 hover:bg-slate-500 ease-in-out duration-100">Login</Link>
                </>
              )

          }
        </div>
      </div>
    </nav>

  )
}

export default Navbar