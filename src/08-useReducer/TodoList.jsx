import React from 'react'
import { TodoItem } from './TodoItem'

const TodoList = ({todos = [], onDeleteTodo,onToggleTodo}) => {
  return (
    <div>
           <ul className="list-group">
            {    
                            todos.map(todo=>(
                                
                                 <TodoItem
                                    todo={todo}
                                    key={todo.id}
                                    onDeleteTodo={onDeleteTodo}
                                    onToggleTodo={onToggleTodo}

                                 />
                                
                                
                            ))
                }
            </ul> 
            
    </div>
  )
}

export default TodoList
