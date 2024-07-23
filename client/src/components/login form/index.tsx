import { Box, Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type loginForm = {
  email: string,
  password: string,
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<loginForm>();
  const onSubmit: SubmitHandler<loginForm> = (data) => {
    console.log(data);
  }
  return (
    <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        sx={{ my: 1 }}
        label="Email"
        {...register("email", {
          required: "Email is required"
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        sx={{ my: 1 }}
        type="password"
        label="Password"
        {...register("password", {
          required: "Password is required"
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Link to="/forget-password" className="link">
        <Box sx={{ mt: 1, textAlign: "right", fontSize: 12 }}>Forget Password?</Box>
      </Link>
      <Button
        sx={{ mt: 4, py: 1.25 }}
        type="submit"
        variant="contained"
        className="dark-btn"
      >
        Log In
      </Button>
      <Box sx={{ mt: 2, textAlign: 'center', fontSize: 14 }}>
        Don't have an account?
        <Link to="/sign-up" className="link">
          <Box sx={{ ml: 1, fontWeight: 'bold', display: 'inline' }}>
            Sign Up
          </Box>
        </Link>
      </Box>
    </form>
  )
}

export default LoginForm;