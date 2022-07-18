import { Route, Routes } from 'react-router';
import './App.css';
import LoginForm from './components/LoginForm';
import HomePage from './pages/HomePage';
import AuthLayout from './components/Layout/AuthLayout'
import RegisterForm from './components/RegisterForm'
import ProtectedRoutes from './components/ProtectedRoutes';
import DashboardPage from './pages/DashboardPage';
import DashboardLayout from './components/Layout/DashboardLayout';

function App() {
  return (
    <div className='w-full h-screen bg-gray-100'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard/*' element={<ProtectedRoutes />} >
          <Route path='' element={<DashboardLayout />}>
            <Route path='' element={<DashboardPage />} />
          </Route>
        </Route>
        <Route path='/auth/*' element={<AuthLayout />} >
          <Route path='login' element={<LoginForm />} />
          <Route path='register' element={<RegisterForm />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
