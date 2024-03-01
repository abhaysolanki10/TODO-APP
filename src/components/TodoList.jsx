import { useSelector } from "react-redux"

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchFilter = (filter === "completed" && todo.completed) || (filter === " Incomplete" && todo.incomplete) || (filter === "All");
      const matchSearch = todo.text.toLowerCase().includes(searchTerm);
      return matchFilter && matchSearch
    })


  })
  console.log('Filtered Todos:', filteredTodos)

  return (

    <div>
      TodoList
    </div>
  )
}

export default TodoList