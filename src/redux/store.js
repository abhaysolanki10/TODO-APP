 import {createStore} from "redux"
 import todoReducer from "./Reducers"

 const store = createStore(todoReducer);

export default store;