import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Posts from './Posts'
function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "dharamveer._",
      postImage: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "Harsh_Pandey",
      postImage: "https://images.unsplash.com/photo-1616348036778-e709c34901d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwYXJteXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      likes: 56,
      timestamp: "1d",
    },
    {
      user: "Himanshu_Moyal",
      postImage: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      likes: 29,
      timestamp: "2d",
    }
  ]);
  console.log(posts)
  return (
    <div className='timeline'>
        <div className='timeline__left'>
          <div className="timeline__posts">
          {posts.map((post) => (
            <Posts user = {post.user} postImage = {post.postImage} likes = {post.likes} timestamp = {post.timestamp}/>
          ))}
          </div>
        </div>
        <div className='timeline__right'>
        <Suggestions />   
        </div>
    </div>
  )
}

export default Timeline