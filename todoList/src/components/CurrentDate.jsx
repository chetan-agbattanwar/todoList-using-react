import React, {useState, useEffect} from 'react'

function CurrentDate() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
       setInterval(() => {
        setCurrentDate(new Date())
       }, 1000);
    }, [])
    
    
  return (
    <center>
    <span style={{marginRight:"10px" }}>Date : {currentDate.toLocaleDateString()}</span>
    <span>Time : {currentDate.toLocaleTimeString()}</span>
    </center>
  )
}

export default CurrentDate