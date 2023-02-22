import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodes = ()=>{


   
    
    
        const [todos, dispatch] = useReducer(todoReducer, [], init);
    
        useEffect(()=>{
            localStorage.setItem('todos',JSON.stringify(todos))
        },[todos])
    
        const handleNewTodo = (todo) =>{
    
            const action = {
                type: '[TODO] add todo',
                payload: todo
            }
            dispatch( action )
        }
    
        const handleDeleteTodo = (id) =>{
            dispatch({
                type: '[TODO] Remove todo',
                payload: id
            })
        }
    
    
        const handleToggleTodo = (id) =>{
            dispatch({
                type: '[TODO] Toggle todo',
                payload: id
            })
        }

       

        return {

            todos,
            handleDeleteTodo,
            handleNewTodo,
            handleToggleTodo,
            todoCount: todos.length,
            pendingTodosCount: todos.filter(todo => !todo.done).length
        }
        

}