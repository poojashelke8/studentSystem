import React from 'react'
// import { useState } from 'react';
// import AddStudent from './AddStudent';

// const data = [
//     { name: "Anom", age: 19, course:"IT",batch:2019 },
//   { name: "Megha", age: 19, course:"Comp",batch:2022 },
//   { name: "Subham", age: 25, course:"ENTC",batch:2018},
// ]

function StudentTable({studData}) {
    
  
  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Seriel no</th>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
            </tr>
            </thead>
            <tbody>
            {studData.map((val,key)=>{
                return(
                    
                    <tr key={key}>
                        <td>{key+1}</td>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.course}</td>
                        <td>{val.batch}</td>
                    </tr>
                    )
            })}
        </tbody>
        </table>
        
        
    </div>
  )
}

export default StudentTable