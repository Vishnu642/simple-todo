import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Components/Header'
import { Form } from './Components/Form'
import { TodoList } from './Components/TodoList'

function App() {
  const [input,setInput] = useState("")
  const [todos,setTodos] = useState([])

  return (
    <div className="App">
      <Header/>
      <Form input={input}
       setInput={setInput}
       todos={todos}
        setTodos={setTodos}
          />
          <TodoList todos={todos} setTodos={setTodos}  />
    </div>
  )
}

export default App
