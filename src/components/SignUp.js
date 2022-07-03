import { TextField, Button, Grid } from "@mui/material"

import { Box } from "@mui/system"
import React from "react"
import { Link, useParams } from "react-router-dom"

// const useStyles = makeStyles(theme => ({
//   signIn: { marginLeft: theme.spacing(2) }
// }))

export default function SignUp() {
  // const classes = useStyles()
  let params = useParams()
  // console.log(params)
  return (
    <div>
      <h2>Sign Up</h2>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
        <TextField
          margin="normal"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
        />
        <TextField
          margin="normal"
          id="re-enter-password-input"
          label="re-enter your password"
          type="password"
          autoComplete="current-password"
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container>
          have an account?<Link to="/login">{" Sign In"}</Link>
        </Grid>
      </Box>
    </div>
  )
}
