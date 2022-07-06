import { Button, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Posts from "./Posts"
import Axios from "axios"
export default function PostsLists() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState()
  const [loggedIn, setLoggedIn] = useState(true)

  function handleLogOut(e) {
    e.preventDefault()
    console.log("logged out")
    navigate("/login")
  }
  function handleNotLoggedIn() {
    return (
      <div>
        <Typography>go login!</Typography>
        <Button onClick={handleLogOut}></Button>
      </div>
    )
  }

  async function getPosts() {
    if (loggedIn) {
      try {
        const response = await Axios.get("http://localhost:4000/users")
        setPosts(response.data)
      } catch (error) {
        console.error(error)
      }
    } else {
      handleNotLoggedIn()
    }
  }

  useEffect(() => {
    getPosts()
    // Axios.get("http://localhost:4000/users")
    // .then(res => res.json())
    // .then(users => setPosts(users))
  }, [])

  return (
    <div>
      <Typography variant="h3">Posts</Typography>
      <Button onClick={handleLogOut}>Log out</Button>
      {posts && posts.map((user, i) => <Posts key={i} data={posts} />)}
    </div>
  )
}
