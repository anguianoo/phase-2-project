import React from "react"
import { Card, CardMedia, Typography, CardContent } from "@mui/material"
export default function Posts({ data }) {
  let thePost = data[0].posts
  // let dataMapper = thePost.map(post => console.log(post))
  return (
    <div>
      <ul>
        {thePost.map((post, i) => (
          <li key={i} className="margin-5">
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="400"
                image={post.image}
                alt={post.altText}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
