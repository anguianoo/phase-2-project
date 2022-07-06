import { Button, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Posts from "./Posts"

export default function PostsLists() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState()

  function handleLogOut(e) {
    e.preventDefault()
    console.log("logged out")
    navigate("/login")
  }

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(users => setPosts(users))
  }, [])

  return (
    <div>
      <Typography variant="h3">Posts</Typography>
      <Button onClick={handleLogOut}>Log out</Button>
      {posts && posts.map((user, i) => <Posts key={i} data={posts} />)}
    </div>
  )
}
