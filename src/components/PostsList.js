import React, { useEffect } from "react"
import { useState } from "react"
import Posts from "./Posts"

export default function PostsLists() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      {posts.map(user => (
        <Posts key={user.id} data={posts} />
      ))}
    </div>
  )
}
