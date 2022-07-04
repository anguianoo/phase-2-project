import { TextField, Button, Grid } from "@mui/material"

import { Box } from "@mui/system"
import React, { useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [reEnterPassword, setReEnterPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(e) {
    e.preventDefault()
    console.log("user signed up")

    const itemData = {
      username,
      loggedIn: false,
      password,
      post: []
    }

    // POST to server

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemData)
    })
      .then(res => res.json())
      .then(newUser => console.log(newUser))

    navigate("/postslists")
  }

  let params = useParams()

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
        <form onSubmit={handleSignUp}>
          <TextField
            id="signUp-username"
            label="Username"
            variant="outlined"
            fullWidth
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            margin="normal"
            id="signUp-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <TextField
            margin="normal"
            id="re-enter-password-input"
            label="re-enter your password"
            type="password"
            autoComplete="current-password"
            fullWidth
            onChange={e => setReEnterPassword(e.target.value)}
            value={reEnterPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </form>
        <Grid container>
          have an account?<Link to="/login">{" Sign In"}</Link>
        </Grid>
      </Box>
    </div>
  )
}
