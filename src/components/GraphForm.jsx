import React from 'react'
import "../styles/graphForm.css"
const GraphForm = () => {
    const handleOnClick=()=>{
        alert("Data have been updated")
    }
  return (
    <div className='mycontainer'>
        <h3>Manage Product Price Trend</h3>
        <form className='myform'>
            <button className='changesButton' onClick={handleOnClick}>Add Changes</button>
            <br/>
          <label> <input type='text' placeholder='type' className='inputLabels'/></label>  
           <label> <input type='text' placeholder='description' className='inputLabels'/> </label> 
           <div className='details'>
           <div className='addition'>
            <input type='text' placeholder='newPrice'className='inputLabels'/>
            <input type='date' className='inputLabels'/>
            <button className='addBtn'>+</button>
           </div>
           <div className='subtract'>
            <input type='text' placeholder='newPrice' className='inputLabels'/>
            <input type='date' className='inputLabels'/>
            <button className='subBtn'>-</button>
           </div>
           </div>
          
        </form>
    </div>
  )
}

export default GraphForm