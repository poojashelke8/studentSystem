import React from 'react'
// import { useState } from 'react';
import "../css/AddStudent.css";

function AddStudent({addStuddata,handleChange,handleSubmit}) {

    // const[studentInfo,setStudentInfo] = useState({
    //     name:"",
    //     age:"",
    //     course:"",
    //     batch:""
    // });

    // const handleChange=(event)=>{
    //     setStudentInfo({...studentInfo,[event.target.name]:event.target.value});
    // }
    
    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     console.log(studentInfo);
    //     addStudentInfo(studentInfo)
    //     setStudentInfo({name:"",
    //     age:"",
    //     course:"",
    //     batch:""});
    // }
    
  return (
    
    <div className="container">
    <form onSubmit={handleSubmit}>
        <div>
        <input 
            type="text"  
            placeholder='Name'
            name="name"
            value={addStuddata.name}
            onChange={handleChange}/>

       
        <input 
            type="number"  
            placeholder='Age'
            name="age"
            value={addStuddata.age}
            onChange={handleChange}/>

        <input 
            type="text"  
            placeholder='Course'
            name="course"
            value={addStuddata.course}
            onChange={handleChange}
            />
        <input 
            type="year"  
            placeholder='Batch'
            name="batch"
            value={addStuddata.batch}
            onChange={handleChange}
            />
        </div>
        <div>
            {/* <input type="submit" placeholder="Add" onClick={handleSubmit}/> */}<br></br>
        <button type='submit' onSubmit={handleSubmit}>Add Student</button> 
        </div>
        </form>
        

        
    </div>
    
  );
}

export default AddStudent