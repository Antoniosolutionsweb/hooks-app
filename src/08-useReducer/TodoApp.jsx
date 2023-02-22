
import { useTodes } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import TodoList from "./TodoList";





export const TodoApp = () => {

    const {todos,handleDeleteTodo,handleNewTodo,handleToggleTodo,todoCount,pendingTodosCount}= useTodes();

  return (
    <>
        <h1>TodoApp :{todoCount} <small>Pendientes : {pendingTodosCount}</small></h1>

        <hr />

        <div className="row">
            <div className="col-7">
                
               <TodoList
                    todos={todos}
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
               />

            </div>
            <div className="col-5">
                <h4>Agregar todo</h4>
                <hr />
               <TodoAdd
                onNewtodo={handleNewTodo}
               />
            </div>
        </div>
        
    
    </>
  )
}
