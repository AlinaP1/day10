import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import PostItem from "./PostItem/PostItem"


const PostList = () => {

    const { posts } = useContext(PostListContext)
    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} id={post.id} url={post.url} message={post.message} />
            ))
            }

        </div>
	)
}

export default TodoList