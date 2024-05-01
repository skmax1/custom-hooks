import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function useTodos(){
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res=>{
        setTodos(res.data.todos)
      })
  },[])
  return todos;

}


function App() {

  const todos = useTodos();

  return (
    <>
     {todos.map(todo=><Component props={todo}/>)}
    </>
  )
}

function Component({props}){
  return <div>
    <h2>{props.title}</h2>
    <br/>
    <h3>{props.description}</h3>
  </div>
}

export default App
