import { React, useState } from "react"
import IconButton from "@mui/material/IconButton"
import { Container } from "@mui/material"
import "./App.css"
import Login from "./Login"
import { Route, Routes } from "react-router-dom"
import SignUp from "./SignUp"
import PostsLists from "./PostsList"
import Home from "./Home"
// import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles"
// import Brightness4Icon from "@mui/icons-material/Brightness4"
// import Brightness7Icon from "@mui/icons-material/Brightness7"

function App() {
  let user = "tito"

  // console.log(params)
  // const theme = useTheme()

  const [mode, setMode] = useState("light")
  function handleDarkMode() {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"))
    console.log(mode)
  }

  return (
    <Container maxWidth="xs">
      {/* working on dark mode
      {mode} mode
      <IconButton sx={{ ml: 1 }} onClick={handleDarkMode} color="inherit">
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/postslists" element={<PostsLists />} />
      </Routes>
    </Container>
  )
}

export default App
