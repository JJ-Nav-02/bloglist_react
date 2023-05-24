/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Blog = ({ blog, user, removeBlog, showMessage,addLike }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleLike = () => {
    addLike({
      ...blog,
      likes: blog.likes,
    })
  }

  const handleDelete = (event) => {
    if (blog.user.username === user.username) {
      removeBlog(blog)
    }

    else {
      showMessage('You are not authorized to delete this blog',false)
    }
  }

  const contentToShow = (() => {
    if (showDetails === true) {
      return (
        <div className='extra-info'>
          <p>{blog.url}</p>
          <p>
            likes {blog.likes} <button className='buttonLike' onClick={handleLike}>like</button>
          </p>
          {}
          <p>
            {blog.user.username}
          </p>
          <button className='remove' onClick={handleDelete}>remove</button>
        </div>
      )
    }
  })()
  return (
    <div className='blogStyle blog' id='blog'>
      <div>
        <p className='title'>
          {blog.title}
        </p>
        <p className='author'>
          {blog.author}
        </p>
        <button className='button' id='show-more' onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'hide' : 'view'}</button>
      </div>
      {contentToShow}
    </div>
  )
}

export default Blog
