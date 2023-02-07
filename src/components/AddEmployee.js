import React, { useState } from "react";
import { useNavigate } from "react-router";
import EmployeeService from "../Service/EmployeeService";

export const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const  navigate=useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {

        console.log(response);
        navigate("/");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const restEmployee= (e)=>{
    e.preventDefault();
    setEmployee({
        id:"",

        firstName:"",

        lastName:"",

        email:"",

    });
  }
  return (
    <>
      <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
          <div className="flex font-thin text-2xl">
            <h2>Add New Employee </h2>
          
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
              type="email"
              name="email"
              value={employee.email}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded h-10 w-96 mt-2 px-2 py-2"
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4 space-x-4 py-4">
            <button
              onClick={saveEmployee}
              className="rounded text-white bg-green-400 hover:bg-green-700 py-2 px-2"
            >
              Save
            </button>
            <button 
            onClick={restEmployee}
            className="rounded text-white bg-red-400 hover:bg-red-700 py-2 px-2">
              Clear
            </button>
          </div>
        </div>
      </div>

    </>
  );
};
