import * as React from "react"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography
} from "@mui/material"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    console.log("form submitted")
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(data => setUsers(data))

    const userData = users.find(user => user.username === username)
    if (userData) {
      if (userData.password !== password) {
        alert("invalid Password")
      } else {
        navigate("/postslists")
      }
    }
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          fullWidth
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <TextField
          margin="normal"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </form>
      <Grid container>
        <Grid item xs>
          {/* forgot password not implemented yet */}
          <Link to="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Typography>Don't have an account?</Typography>
        </Grid>
        <Grid item>
          <Link to="/signup" variant="body2">
            {" Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
