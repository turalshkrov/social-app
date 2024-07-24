import { Box, Button, colors, Container, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const EmailVerification = () => {
  const [ otp, setOtp ] = useState<string[]>(new Array(4).fill(""));
  const [ activeOTPIndex, setActiveOTPIndex ] = useState<number>(0);
  const [ timer, setTimer ] = useState({ min: 0, sec: 59, });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[index] = value.substring(value.length - 1);
    setOtp(newOTP);
    if (value) setActiveOTPIndex(index + 1);
    else setActiveOTPIndex(index - 1);
  }
  const handleResendOTP = () => {
    setTimer({ min: 0, sec: 59, });
    console.log('OTP resent.');
  }
  const handleVerify = () => {
    if (otp.join("").length === 4) {
      setOtp(new Array(4).fill(""));
      console.log(otp.join(""));
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [ activeOTPIndex ]);
  useEffect(() => {
    const id = setInterval(() => {
      if (timer.sec === 0) {
        clearInterval(id);
      } else {
        setTimer(prev => ({ ...prev, sec: prev.sec - 1 }));
      }
    }, 1000);
    return () => clearInterval(id);
  }, [timer.sec]);

  return (
    <Container sx={{ px: { xs: 0, sm: 2 }}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: '15vh auto', width: { xs: '90%', sm: '340px' } }}>
        <Box sx={{ mb: 6, textAlign: 'center', fontWeight: 'bold', fontSize: 'h4.fontSize' }}>
          Connectr
        </Box>
        <Box sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Enter verification code
        </Box>
        <Box sx={{ mt: 3, textAlign: 'center', fontSize: 14, color: colors.grey[800] }}>
          Code sent your email address.
        </Box>
        <Box sx={{ display: "flex", m: 'auto', mt: 5 }}>
          {
            otp.map((_, index) => {
              return (
              <TextField
                key={index}
                inputRef={index === activeOTPIndex ? inputRef : null}
                sx={{ m: 1, width: '56px' }}
                inputProps={{min: 0, style: { textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}}
                type="number"
                onChange={(e) => handleChange(e, index)}
                value={otp[index]}
              />)
            })
          }
        </Box>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          Resend in
          <Box sx={{ ml: 0.5, fontWeight: 'bold', display: 'inline' }}>
            {
              `${timer.min}:${timer.sec < 10 ? '0' + timer.sec : timer.sec}`
            }
          </Box>
          <Button
            sx={{ fontWeight: 'bold', cursor: 'pointer', display: "block", m: "auto", mt: 1, color: colors.grey[800] }}
            disabled={ timer.sec !== 0 }
            onClick={handleResendOTP}>
            Resend
          </Button>
        </Box>
        <Button
          sx={{ mt: 4, py: 1.25 }}
          className="dark-btn"
          variant="contained"
          onClick={handleVerify}>
          Verify
        </Button>
      </Box>
    </Container>
  )
}

export default EmailVerification;