import { Box, Button, Container, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

type ResetPasswordForm = {
  password: string,
  confirmPassword: string,
}

const ResetPassword = () => {
  const { register, handleSubmit, reset, watch, formState: { errors }} = useForm<ResetPasswordForm>();
  const password = watch("password");
  const onSubmit: SubmitHandler<ResetPasswordForm> = (data: ResetPasswordForm) => {
    reset();
    console.log(data);
  }
  return (
    <Container sx={{ px: { xs: 0, sm: 2 }}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: '20vh auto', width: { xs: '90%', sm: '340px' } }}>
        <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 6, textAlign: 'center', fontWeight: 'bold', fontSize: 'h4.fontSize' }}>
            Social
          </Box>
          <Box sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Reset Password
          </Box>
          <TextField
            type="password"
            label="New Password"
            sx={{ mt: 6 }}
            { ...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long"
              }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            type="password"
            label="Confirm Password"
            sx={{ mt: 2 }}
            { ...register("confirmPassword", {
              required: "Password is required",
              validate: (value) => value === password|| "The passwords do not match",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long"
              }
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <Button
            variant="contained"
            className="dark-btn"
            sx={{ mt: 4, py: 1.25 }}
            type="submit"
          >
            Send reset link
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default ResetPassword;