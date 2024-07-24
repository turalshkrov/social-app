import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import SignUp from './pages/signup';
import EmailVerification from './pages/email verification';
import ForgotPassword from './pages/forgot password';
import ResetPassword from './pages/reset password';
import Feed from './pages/feed';
import Modals from './modals';

function App() {

  return (
    <BrowserRouter>
      <Modals/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Feed />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-up/email-verification' element={<EmailVerification />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;