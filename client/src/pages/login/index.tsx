/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container } from "@mui/material";
import LoginForm from "../../components/login form";


const Login = () => {
  
  return (
    <Container sx={{ px: { xs: 0, sm: 2 }}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: '20vh auto', width: { xs: '90%', sm: '340px' } }}>
        <Box sx={{ mb: 6, textAlign: 'center', fontWeight: 'bold', fontSize: 'h4.fontSize' }}>
          Social
        </Box>
        <LoginForm />
      </Box>
    </Container>
  )
}

export default Login;