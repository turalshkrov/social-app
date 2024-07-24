import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import SignUp from './pages/signup';
import EmailVerification from './pages/email verification';
import ForgotPassword from './pages/forgot password';
import ResetPassword from './pages/reset password';
import Feed from './pages/feed';
import Modals from './modals';
import Header from './components/header';
import Navbar from './components/navbar';
import { Container, Grid } from '@mui/material';

function App() {

  return (
    <BrowserRouter>
      <Modals />
      <Routes>
        <Route element={(
          <>
            <Header />
            <Container>
              <Grid container spacing={2}>
                <Navbar />
                <Outlet />
              </Grid>
            </Container>
          </>
        )}>
          <Route path='/' element={<Feed />} />
          <Route path='/messages' element={"Messages"} />
          <Route path='/search' element={"Search"} />
          <Route path='/notifications' element={"Notification"} />
          <Route path='/profile' element={"Profile"} />
        </Route>
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