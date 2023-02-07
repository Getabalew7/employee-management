import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import EmployeeService from '../Service/EmployeeService';

export const UpdateEmployee = () => {
  const navigate= useNavigate();
  const {id}=useParams();
  const [employee, setEmployees] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployees({ ...employee, [e.target.name]: value });
  };
 
  useEffect(() => {
    const fetchData= async()=>{
      try {
        const response = await EmployeeService.getEmployeeById(id)
        .then((response) => {
          setEmployees(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData();
  }, [])
  
    const UpdateEmployee= (e)=>{
      e.preventDefault();
      EmployeeService.updateEmployee(employee,id)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      }).catch((error) => {
        console.log(error);
      });
    }
        
    

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">
      <div className="font-thin text-2xl">
        <h2>Update Employee</h2>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={(e) => handleChange(e)}
          className="shadow appearance-none border rounded h-10 w-96 mt-2 px-2 py-2"
        />
      </div>
      <div className="items-center justify-center h-14 w-full my-8">
        <label className="block text-gray-600 text-sm font-bold">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={(e) => handleChange(e)}
          className="shadow appearance-none border rounded h-10 w-96 mt-2 px-2 py-2"
        />
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-bold">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={employee.email}
          onChange={(e) => handleChange(e)}
          className="shadow appearance-none border rounded h-10 w-96 mt-2 px-2 py-2"
        />
      </div>
      <div className="items-center justify-center h-14 w-full my-4 space-x-4 py-4">
        <button
          onClick={UpdateEmployee}
          className="rounded text-white bg-green-400 hover:bg-green-700 py-2 px-2"
        >
          Update
        </button>
        <button 
        onClick={()=>navigate('/')}
        className="rounded text-white bg-red-400 hover:bg-red-700 py-2 px-2 hover:cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}
