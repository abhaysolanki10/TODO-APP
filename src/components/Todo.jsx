import checkbox from "../assets/checkbox.svg";
import { useState } from "react";
import { addtodo, Filtertask, Updatesearchterm } from "../redux/actions";
import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
  const [newTodoTask, setnewTodoTask] = useState("");
  const currentFilter = useSelector((state) => state.filter);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  /* Dispatch for Add Todo*/
  const handleAddTodo = (text) => {
    console.log("Handle is working fine", text)
    console.log(dispatch(addtodo(text)))

  }
  const handleAddTaskClick = () => {
    console.log("Add button clicked", newTodoTask); // Check if this message appears in the console
    if (newTodoTask.trim() !== "") {
      handleAddTodo(newTodoTask.trim());
    }
  }

  /* Dispatch for Filter*/
  const handleFilter = (filter) => {
    dispatch(Filtertask(filter))
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(Updatesearchterm(value))
  }

  console.log(newTodoTask);
  return (
    <div className="bg-gray-100 rounded sm:mt-9 p-4 max-w-5xl mx-auto">
      <div className="flex justify-center item-center">
        <img src={checkbox} className="w-35 h-12" alt="React Logo" />
        <h1 className="font-bold text-4xl ml-2 text-blue-700 text-center uppercase underline">
          Work to Complete
        </h1>
      </div>
      <br></br>
      <div className="flex items-center mb-4">
        <div className="relative flex-grow">
          <input
            type="text"
            name="addTodoInput"
            value={newTodoTask}
            onChange={(e) => setnewTodoTask(e.target.value)}
            id="addTodoInput"
            placeholder="Add Tasks"
            className="rounded transition:duration-300 p-3 w-full h-17 border hover:shadow-lg border-white-300 focus:outline-none focus:border-blue-500"
          ></input>
          <button
            onClick={handleAddTaskClick}
            className="absolute hover:shadow-lg transition:duration-300 right-2 h-15 w-20 bottom-1.5 px-4 py-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center mx-4">
        <div className="flex items-center mx-4" name="Filter_DropDown">
          <label className="mx-4 text-xl">Filter</label>
          <select
            value={currentFilter}
            onChange={(e) => handleFilter(e.target.value)}
            className="rounded border focus:outline-none border-gray-300 shadow-sm px-4 py-2"
          >
            <option value="All" selected>
              All
            </option>
            <option value="completed">Completed</option>
            <option value="Incomplete">Incompleted</option>
          </select>
          <button className="mx-4 hover:shadow-lg transition:duration-300 px-4 py-2 bg-purple-500 text-white rounded">
            Mark all Completed
          </button>
        </div>
        <input
          type="text"
          onChange={(e) => handleSearchChange(e.target.value)}
          name="SearchItem"
          value={searchTerm}
          id="SearchItem"
          placeholder="Search Task"
          className="rounded transition:duration-300 p-3 h-17 border hover:shadow-lg border-white-300 focus:outline-none focus:border-blue-500"
        ></input>
      </div>

      <TodoList />
    </div>
  );
};
export default Todo;
