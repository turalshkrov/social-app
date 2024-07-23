import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import SignUp from './pages/signup';
import EmailVerification from './pages/email verification';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-up/email-verification' element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;