import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/PostListContext"


const PostItem = ({id, url, message}) => {

	const {deletePost} = useContext(PostListContext)

	const deleteHandler = () => deletePost(id)

	const completedHandler = () => completedTodo(id)

	return (
		<div className="d-flex justify-content-center mb-5">
		<div className="card w-50 p-3">
			<img src={url} className="card-img-top" alt="pic" />
			<div className="card-body">
				<p className="card-text text-center">{message}</p>
			</div>
			<button onClick={deleteHandler} type="button" className="btn btn-danger">Delete Post</button>
		</div>
	</div>
)
	)
}

export default TodoItem