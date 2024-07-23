/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container } from "@mui/material";
import SignUpForm from "../../components/sign-up form";

const SignUp = () => {
  
  return (
    <Container sx={{ px: { xs: 0, sm: 2 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: '10vh auto', width: { xs: '90%', sm: '340px' } }}>
        <Box sx={{ mb: 6, textAlign: 'center', fontWeight: 'bold', fontSize: 'h4.fontSize' }}>
          Social
        </Box>
        <SignUpForm />
      </Box>
    </Container>
  )
}

export default SignUp;