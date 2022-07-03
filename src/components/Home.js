import { Button, Grid, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <Typography>Home</Typography>
      <Grid container>
        <Grid item>
          <Button variant="contained">
            <Link to="/login">Login</Link>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained">
            <Link to="/signup" underline="none">
              Sign Up
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
