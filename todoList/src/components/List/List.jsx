import React from 'react'
import './List.css'
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function List({todoList}) {
    // console.log(todoList);
    
  return (
    <ul className="list">
        {
            todoList.map((currentTodo)=><li key={currentTodo.id}>
                <span>{currentTodo.item}</span>
                <span className='actions'>
                    <RadioButtonUncheckedRoundedIcon />
                    <DeleteForeverIcon onClick={handleClick} />
                </span>
            </li>)
        }
    </ul>
  )
}

export default List