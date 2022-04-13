import { createContext, useEffect, useState } from "react";
const LSpostsKey = 'posts'

const PostListContext = createContext();

const PostListProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const createPost = (url, message) => {

    const newPost = {
        id: Date.now(),
        url,
        message
    }
  
    setPosts(prev => [...prev, newPost])
  
}

const deletePost = (id) => {
    setPosts(prev => prev.filter((post) => post.id !== id))
}


useEffect(() => {
    const dataFromLS = localStorage.getItem(LSpostsKey)
    if (dataFromLS) {
        setPosts(JSON.parse(dataFromLS))
    }
}, [])

useEffect(() => {
    localStorage.setItem(LSpostsKey, JSON.stringify(posts))
}, [posts])

return (
    <PostListContext.Provider value={{ posts, createPost, deletePost, clearAllPost }}>
        {
            children
        }

    </PostListContext.Provider>
)
}

export default PostListProvider

export {
PostListContext
}