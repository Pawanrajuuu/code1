// Write your code here
const ToDoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button onClick={onDeleteTodo}>Delete</button>
    </li>
  )
}
export default ToDoItem