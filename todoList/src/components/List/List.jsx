import React from 'react'
import './List.css'
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function List({todoList, handleTodoStatus, handleDelete}) {
    // console.log(todoList);
    
  return (
    <ul className="list">
        {
            todoList.map((currentTodo)=><li key={currentTodo.id}>
                <span className={currentTodo.todoStatus ? 'line-through' : ''}>{currentTodo.item}</span>
                <span className='actions'>
                    {
                        currentTodo.todoStatus ? 
                        <CheckCircleRoundedIcon onClick={()=> handleTodoStatus(currentTodo.id)}/> : 
                        <RadioButtonUncheckedRoundedIcon onClick={()=> handleTodoStatus(currentTodo.id)} />
                    }
                    <DeleteForeverIcon onClick={()=>handleDelete(currentTodo.id)}/>
                </span>
            </li>)
        }
    </ul>
  )
}

export default List