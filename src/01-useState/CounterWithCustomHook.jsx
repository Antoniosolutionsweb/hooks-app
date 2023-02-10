import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterWithCustomHook = () => {

   const {counter,increment,decrement, reset} = useCounter()
  return (
    <>
      <h1>Counter With hooks : {counter}</h1>
      <hr />
      <button 
        className='btn btn-primary'
         onClick = {increment}>
         +1
         </button>
      <button className='btn btn-warning'onClick = {reset} >Reset</button>
      <button className='btn btn-danger' onClick = {decrement}>-1</button>
    </>
  )
}

export default CounterWithCustomHook
