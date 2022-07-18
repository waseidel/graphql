import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <section className="h-screen">
      <div className="container h-full">
        <div className="flex justify-center items-center flex-wrap h-full">
          <div className="flex flex-col border bg-white shadow-lg px-6 py-4 rounded-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthLayout