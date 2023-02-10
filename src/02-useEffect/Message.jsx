import React, { useEffect } from 'react'

const Message = () => {
    useEffect(() => {
      console.log('Componente montado')
    
      return () => {
        console.log('Componente Desmontado')
      }
    }, [])
    
  return (
    <>
      <h3>Usuario ya existe </h3>
    </>
  )
}

export default Message
