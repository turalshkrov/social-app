import { Grid } from "@mui/material";

const SideBar = () => {
  return (
    <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' }, p: { md: 2 }, mt: 4 }}>
      <h4>Suggested Friends</h4>
    </Grid>
  )
}

export default SideBar;