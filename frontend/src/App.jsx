import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (response) => {
        const output = await response.json()
        setTodos(output.todos)
      })
  },[todos])

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todo todos={todos}></Todo>
    </>
  )
}

export default App
