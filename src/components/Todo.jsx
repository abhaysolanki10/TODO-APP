import checkbox from "../assets/checkbox.svg"
import {useState} from "react"
import { addtodo } from "../redux/actions";
import { useDispatch } from "react-redux";
const Todo = () => {
  const[newTodoTask,setnewTodoTask] = useState("");
  const dispatch = useDispatch()
  
  const handleAddTodo = (text) => {
    dispatch(addtodo(text))
  }
  const handleAddTaskClick = () => {
    if(newTodoTask.trim !== ""){
      handleAddTodo(newTodoTask.trim());
      setnewTodoTask("")
    }
  }
  

  console.log(newTodoTask)
  return (
    <div className="bg-gray-100 rounded sm:mt-8 p-4 max-w-4xl mx-auto">
      <div className="flex justify-center item-center">
        <img src={checkbox} className="w-35 h-12 mx-10" alt="React Logo" />
        <h1 className="font-bold text-4xl ml-2 text-blue-700 text-center uppercase underline">Work to Complete</h1>
      </div><br>
      </br>
    <div className="flex items-center mb-4">
      <div className="relative flex-grow">
        <input type="text" name="addTodoInput" value={newTodoTask} onChange={(e) => setnewTodoTask(e.target.value) } id="addTodoInput" placeholder="Add Tasks" className="rounded transition:duration-300 p-3 w-full h-20 border hover:shadow-lg border-white-300 focus:outline-none focus:border-blue-500"></input>
        <button onClick={handleAddTaskClick} className="absolute hover:shadow-lg transition:duration-300 right-3 h-15 w-20 top-5 px-4 py-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-600">Add</button>
      </div>
    </div>
    <hr className="my-4" />

    </div>
  )
}
export  default Todo