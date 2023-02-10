import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [formSate, setFormSate] = useState({
        username: 'Antonio',
        email: 'ajrodriguez1196@gmail.com'
    });
    const {username,email} =formSate;

    const onInputChange  =({target}) => {
        const {name, value}= target;

        setFormSate({
            ...formSate,
            [name]: value,

        })
    }

    useEffect(()=>{
        //console.log('useEffect  called')
    },[]);

    useEffect(()=>{
        //console.log('FormState  change')
    },[formSate]);

  return (
    <>
      <h1> Simple form</h1>
      <hr />

      <input 
        type="text"
        className='form-control mt-2'
        placeholder='username'
        name='username'
        value={username}
        onChange={onInputChange} 
      />
      <input 
        type="email"
        className='form-control mt-2'
        placeholder='ajrodriguez1196@gmail.com'
        name='email' 
        value={email}
        onChange={onInputChange} 
      />

      {
        (username === 'Antonio2') && <Message/>
      }

    </>
  )
}

export default SimpleForm
