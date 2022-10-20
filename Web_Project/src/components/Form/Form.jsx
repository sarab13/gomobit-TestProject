import './form.css'
import React from 'react'

export default function Form({handleInput,handleSubmit,message,userDetails}) {
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Name:</label><br/>
        <input required type="text" name="name" onChange={handleInput}   /><br/>
        <label>Email:</label><br/>
        <input required type="email" name='email' onChange={handleInput}/><br/>
        <label>Cell#:</label><br/>
        <input required type="text" name='cell' onChange={handleInput}/><br/>
        <label>Age</label><br/>
        <input required type="number" name='age'  onChange={handleInput}/><br/>
        <p>{message}</p>
        <input type="submit" value="Submit" />
              </form>
    </>
  )
}
