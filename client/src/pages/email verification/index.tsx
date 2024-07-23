import { Box, Button, colors, Container, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const EmailVerification = () => {
  const [ otp, setOtp ] = useState<string[]>(new Array(4).fill(""));
  const [ activeOTPIndex, setActiveOTPIndex ] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[index] = value.substring(value.length - 1);
    setOtp(newOTP);
    setActiveOTPIndex(index + 1);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [ activeOTPIndex ]);

  return (
    <Container sx={{ px: { xs: 0, sm: 2 }}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: '10vh auto', width: { xs: '90%', sm: '340px' } }}>
        <Box sx={{ mb: 6, textAlign: 'center', fontWeight: 'bold', fontSize: 'h4.fontSize' }}>
          Social
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
        <Button
          sx={{ mt: 6, py: 1.25 }}
          className="dark-btn"
          variant="contained">
          Verify
        </Button>
      </Box>
    </Container>
  )
}

export default EmailVerification;