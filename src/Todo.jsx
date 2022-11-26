import React, { useEffect, useState } from 'react'
import './App.css'


export default function Todo() {
const [input, setInput] = useState("")
const [button, setButton] = useState("")

const handleSubmit =
  
  return(
    <div className="container">
      <div className="todoBox">
        <div>
          <input className="input" type="text" value={input} name="text"></input>
          <button className="button">Add</button>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}