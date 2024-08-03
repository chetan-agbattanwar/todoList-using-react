import React, {useState, useEffect} from 'react'

function CurrentDate() {

    const [currentDate, setCurrentDate] = useState(new Date());

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ]

    useEffect(() => {
       setInterval(() => {
        setCurrentDate(new Date())
       }, 1000);
    }, [])
    
    
  return (
    <center>
    <span style={{marginRight:"10px" }}>Date : {currentDate.getDate()}-{months[currentDate.getMonth()]}-{currentDate.getFullYear()}</span>
    <span>Time : {currentDate.toLocaleTimeString()}</span>
    </center>
  )
}

export default CurrentDate