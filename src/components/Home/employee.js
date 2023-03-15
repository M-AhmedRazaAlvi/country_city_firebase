import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

function EmployeeData()
{
  const [userData, setUserdata]= useState([]);
   
  useEffect( ()=>{
    const getUserdata= async()=>{
      const reqData= await fetch("http://localhost/devopsdeveloper/users");
      console.log(reqData);
 

    }
getUserdata();
  },[]);



  return(

        <React.Fragment>              
         <Container>
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
              <h3 className='mb-3'>Search Employee name</h3>                
                <div className="col-md-6">                
                <input  type="text" name='name'   className="form-control"  placeholder='Search...' />
              </div>          
            </div>

            <div className='col-md-12'>
            <table className="table">
              <thead>
                <tr>
                  <th>Sr. No </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.map( (getUser, index)=>(
                  <tr key={index}>
                  <td>{index+1} </td>
                  <td>{getUser.first_name}</td>
                  <td>{getUser.last_name}</td>
                  <td>{getUser.email}</td>
                  <td>{getUser.gender}</td>
                  </tr>
                   )) }  
                    
              </tbody>
            </table>
            </div>
        </div>
      </Container>

        </React.Fragment>
    );
}
export default EmployeeData;