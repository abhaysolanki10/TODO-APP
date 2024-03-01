import { add_todo,toggle_todo,remove_task,completed_task,incompleted_task,Filter_task,Update_search_term,All_Completed_task } from "./actionTypes";

export const addtodo = (text) => ({
  type:add_todo,
  payload: {text} 
})
export const toggletodo = (id) => ({
  type:toggle_todo,
  payload: {id} 
})

export const removetask = (id) =>({
  type: remove_task,
  payload: {id}  

})

export const completedtask = (id) =>({
  type: completed_task,
  payload: {id}  
})

export const incompletedtask = (id) =>({
  type: incompleted_task,
  payload: {id}  
})

export const Filtertask = (filter) =>({
  type: Filter_task,
  payload: {filter}  
})

export const Updatesearchterm = (searchterm) =>({
  type: Update_search_term,
  payload: {searchterm}  
})

export const AllCompletedtask = () =>({
  type: All_Completed_task,
})