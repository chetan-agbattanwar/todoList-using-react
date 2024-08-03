import { useState } from 'react'
import './App.css'
import List from './components/List/List'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const getInitialTodoList = () => {
    const savedTodoList = localStorage.getItem('todoList');
    return savedTodoList ? JSON.parse(savedTodoList) : []
  };

  const [text, setText] = useState('')
  const [todoList, setTodoList] = useState(getInitialTodoList)

  // ()=>{
  //   const rawTodoList = localStorage.getItem('todoList')
  //   console.log(rawTodoList);
  //   return JSON.parse(rawTodoList)
  // }

  localStorage.setItem('todoList',JSON.stringify(todoList) )
  // const [todoStatus, setTodoStatus] = useState(second)
  
// add item functionality
  const addItem = ()=>{
    const newTodoItem = {
      id:uuidv4(),
      item:text,
      todoStatus : false
    }
    const itemExist = todoList.some(listItem => listItem.item === newTodoItem.item)
    console.log(itemExist);
    if (!itemExist) return setTodoList([...todoList, newTodoItem])
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
  // console.log("todoList : ",todoList);

  // delete functionality
  const handleDelete = (itemId)=>{
    const updatedTodoList = todoList.filter((currentTodo)=>currentTodo.id!==itemId)
    setTodoList(updatedTodoList)
  }
  // console.log("todoList : ",todoList);

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

    <List todoList={todoList} handleTodoStatus={handleTodoStatus} handleDelete={handleDelete} />
    <center>
      <button style={{background:'red', font:'bold'}} onClick={()=>setTodoList([])}>Clear All Todos</button>
    </center>
    </div>
  )
}

export default App
