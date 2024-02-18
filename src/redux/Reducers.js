import { All_Completed_task, Filter_task, Update_search_term, add_todo, completed_task, incompleted_task, remove_task, toggle_todo } from "./actionTypes";

const initialState = {
   todos:[],
   filter: "ALL",
   searchTerm: ""
}
const todoReducer = (state = initialState,action) => {
  switch (action.type) {
    case add_todo:
        return {
          todos:[...state.todos,{text:action.payload.text,completed:false}],
          filter: state.filter,
          searchTerm:state.searchTerm
        }     
    case toggle_todo:
          return {
            todos:state.todos.map((todo,index)=>
             index === action.payload.id? {...todo,completed: !completed_task}:todo),
            filter: state.filter,
            searchTerm:state.searchTerm
          }
    case remove_task:
            return {
              todos:state.todos.map((todo,index)=>
               index !== action.payload.id ),
              filter: state.filter,
              searchTerm:state.searchTerm
            }
    case completed_task:
              return {
                todos:state.todos.map((todo,index)=>
                 index === action.payload.id? {...todo, completed: true}: todo ),
                filter: state.filter,
                searchTerm:state.searchTerm
              }
    case incompleted_task:
                return {
                  todos:state.todos.map((todo,index)=>
                   index === action.payload.id? {...todo, completed: false}: todo ),
                  filter: state.filter,
                  searchTerm:state.searchTerm
                }
    case Filter_task:
                  return {
                    todos:state.todos,
                    filter: state.filter,
                    searchTerm:state.searchTerm
                  }
    case Update_search_term:
                    return {
                      todos:state.todos,
                      filter: state.filter,
                      searchTerm:action.payload.searchTerm
                    }
    case All_Completed_task:
                      return {
                        todos:state.todos.map((todo)=>({...todo, completed: true})),
                        filter: state.filter,
                        searchTerm:state.searchTerm
                      }
    default:
      return state;
  }
}
export default todoReducer