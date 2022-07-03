import React from "react"

export default function Posts({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.posts[0].posts}</p>
    </div>
  )
}
