import { useState } from 'react'
import './App.css'
import List from './components/List/List'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [text, setText] = useState('')
  const [todoList, setTodoList] = useState([])
  // const [todoStatus, setTodoStatus] = useState(second)
  
// add item functionality
  const addItem = ()=>{
    const newTodoItem = {
      id:uuidv4(),
      item:text,
      todoStatus : false
    }
    setTodoList([...todoList, newTodoItem])
    setText('')
  }
  // console.log("todoList : ",todoList);

  // todoStatus functionality
  const handleTodoStatus = (itemId)=>{
    const updatedTodoList = todoList.map((currentTodo)=>{
      if (currentTodo.id === itemId){
        return {...currentTodo, todoStatus:!currentTodo.todoStatus}
      }
      return currentTodo
    })
    setTodoList(updatedTodoList)
  }
  console.log("todoList : ",todoList);
  

  return (
    <div className='app'>
    <h1>Todo List</h1>

    <div className="adder">
      <input type="text" 
      placeholder='add todo' 
      value={text} 
      onChange={(event)=>setText(event.target.value)} />
      <span onClick={addItem}>+</span>
    </div>

    <List todoList={todoList} handleTodoStatus={handleTodoStatus} />
    </div>
  )
}

export default App
