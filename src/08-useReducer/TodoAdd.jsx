import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewtodo}) => {

    const {description,onInputChange,onResetForm} = useForm({

        description: ''
    })

    const onSubtmitForm = (e) =>{
        e.preventDefault();

        if(description.trim()=== ''){
            return;
        }

        const newtodo = {
            id: new Date().getTime() * 3,
            description,
            done:false
        }
        onNewtodo(newtodo);
        onResetForm()
    }
  return (
    <>
         <form onSubmit={onSubtmitForm}>
            <input 
                type="text" 
                name="description" 
                placeholder=" Que debemos hacer"
                className="form-control" 
                value={description}
                onChange={onInputChange}
            />
                <button type="submit"className="btn btn-primary mt-2">
                    Agregar
                </button>
        </form>
    </>
  )
}
