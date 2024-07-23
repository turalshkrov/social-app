import { Box, Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type RegisterForm = {
  name: string,
  username: string,
  email: string,
  password: string,
}

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<RegisterForm>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    console.log(data);
    navigate('email-verification');
  }
  return (
    <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        sx={{ my: 1 }}
        {...register("name", {
          required: "Name is required"
        })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Username"
        sx={{ my: 1 }}
        {...register("username", {
          required: "Username is required",
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "Username must conatin only English letters"
          }
        })}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        label="Email"
        sx={{ my: 1 }}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email is not valid"
          }
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        type="password"
        sx={{ my: 1 }}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long"
          }
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Box sx={{ my: 2, fontSize: 14 }}>
        By creating an account, you agree to
        <Link to="/terms" className="link">
          <Box sx={{ mx: 0.4, display: "inline" }}>
            the Terms of Service
          </Box>
        </Link>
        and
        <Link to="/privacy" className="link">
          <Box sx={{ ml: 0.4, display: "inline" }}>
            Privacy Policy
          </Box>
        </Link>
      </Box>
      <Button
        type="submit"
        sx={{ mt: 3, py: 1.25 }}
        variant="contained"
        className="dark-btn"
      >
        Sign Up
      </Button>
      <Box sx={{ mt: 2, textAlign: 'center', fontSize: 14 }}>
        Have an account?
        <Link to="/login" className="link">
          <Box sx={{ fontWeight: "bold", display: "inline", ml: 1 }}>
            Log In
          </Box>
        </Link>
      </Box>
    </form>
  )
}

export default SignUpForm;