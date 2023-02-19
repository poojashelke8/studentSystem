import React from 'react'
import AddStudent from './AddStudent'
import { useState} from 'react'
import StudentTable from './StudentTable';


function Student() {

  // const[addStudent,setAddstudent] = useState(false);

  // const handleClick = event =>{
  //   setAddstudent(event => !event);
  // }

  // const [studInfo,updatestudInfo] = useState([])

  // const addStudentInfo = (Info)=>{
  //   updatestudInfo([...studInfo,Info]);
  //   console.log(studInfo)
  // }

  const [ studData,setStuddata] = useState([])
  const [addStuddata,setAddStuddata] = useState(
    {
      name:"",
        age:"",
        course:"",
        batch:""
    }
  );
  

  const handleChange = (event)=>{
    const newStud = (data)=>({
      ...data,[event.target.name]:event.target.value
    })
    setAddStuddata(newStud)
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    // const checkEmptyInput = !Object.values(addStuddata).every(res=>res==="")
    // if(checkEmptyInput){
    const newStudData=(data)=>([...data,addStuddata])
      
    setStuddata(newStudData)
    setAddStuddata({name:"",
        age:"",
        course:"",
        batch:""});
    // }
  }
  

  return (
    <div>
      <h2>Student Data</h2>
      {/* {addStudent && <AddStudent/>}
      <button onClick={handleClick}>Add Student</button> */}
      
      <AddStudent handleChange={handleChange} addStuddata={addStuddata} 
            handleSubmit={handleSubmit}/>
      <StudentTable studData={studData}/>
      
      
   
    </div>
  )
    }

export default Student