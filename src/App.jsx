import './Components/style.css'
import { useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import TaskList from './Components/TaskList'

import './App.css'

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
    <Header completed={0} total={todo.length}/>
    <Form setTodo={setTodo}/>
    <TaskList tasks={todo} setTodo={setTodo}/>
    </>
  )
}

export default App
