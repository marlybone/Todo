import React, { useEffect, useState } from 'react'
import './App.css'


export default function Todo(props) {
const [input, setInput] = useState("")
const [button, setButton] = useState("")

const handleChange = e => {
  setInput(e.target.value)
}
  
const handleSubmit = e => {
  e.preventDefault();

  props.onSubmit({
    id: Math.floor(Math.random() * 1000),
    text: input
  })

  setInput('');
  
}
  
  return(
    <div className="container">
      <form className="todoBox" onSubmit={handleSubmit}>
        <div>
          <input className="input" type="text" value={input} name="text" onChange={handleChange}></input>
          <button className="button">Add</button>
          <div>
          </div>
        </div>
      </form>
    </div>
  )
}