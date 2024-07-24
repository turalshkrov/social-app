import { Box, Button, colors, Container, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

type EmailForm = {
  email: string
}

const ForgotPassword = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EmailForm>();
  const onSubmit: SubmitHandler<EmailForm> = (data: EmailForm) => {
    reset();
    console.log(data);
  }

  return (
    <Container sx={{ px: { xs: 0, sm: 2 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: '20vh auto', width: { xs: '90%', sm: '340px' } }}>
        <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 6, textAlign: 'center', fontWeight: 'bold', fontSize: 'h4.fontSize' }}>
            Social
          </Box>
          <Box sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Forgot Password
          </Box>
          <Box sx={{ mt: 3, textAlign: 'center', fontSize: 14, color: colors.grey[800] }}>
            Enter your email to reset your password and access your account.
          </Box>
          <TextField
            {...register("email", {
              required: "Email is required",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            label="Email"
            sx={{ mt: 6 }}
            name="email"
          />
          <Button
            variant="contained"
            className="dark-btn"
            sx={{ mt: 3, py: 1.25 }}
            type="submit"
          >
            Send reset link
          </Button>

        </form>
      </Box>
    </Container>
  )
}

export default ForgotPassword;