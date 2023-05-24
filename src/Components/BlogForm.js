/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')//Adding blogs
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const resetFields = () => {
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  const addBlog = (event) => {
    createBlog({
      title: title,
      author: author,
      url: url,
      likes: 0
    })
    resetFields()
  }

  return (
    <div>
      <form onSubmit={addBlog}>
        {}
        <div>
          <h1>create new</h1>
            title:
          <input id='title' type='text' value={title} name='title' onChange={({ target }) => setTitle(target.value)} />
          <br />
            author:
          <input id='author' type='text' value={author} name='author' onChange={({ target }) => setAuthor(target.value)} />
          <br />
            url:
          <input id='url' type='text' value={url} name='url' onChange={({ target }) => setUrl(target.value)} />
          <br />
          <button id='submit-blog' type='submit'>create</button>
        </div>
      </form>
    </div>
  )
}

export default BlogForm
