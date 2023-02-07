import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import EmployeeService from "../Service/EmployeeService";
import { Employee } from "./Employee";

export const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading]=useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData= async()=>{
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        console.log(response);
        setEmployees(response.data)
      } catch (error) {
        console.log(error);
      }
     setLoading(false);
    
    }
    fetchData();
  }, []);
  const deleteEmployee =  (e,id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
    .then((res)=>{
      console.log(res);
     if(employees){
     setEmployees((prevElement)=>{
      return prevElement.filter((employee)=>employee.id!==id);
     })
     }
    });

  }
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="h-12">
        <button
        onClick={()=> navigate("/addEmployee")}
         className="rounded bg-slate-600 text-white px-6 py-2">
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b px-4">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-2">First Name</th>
            <th className="text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-2">Last Name</th>
            <th className="text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-2">Email</th>
            <th className="text-right font-medium text-grey-500 uppercase tracking-wider py-3 px-2">Action</th>
            </tr>
          </thead>
          {!loading &&(
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee)=>(
             <Employee employee={employee}
              deleteEmployee={deleteEmployee}
              key={employee.id}></Employee>
            ))}
          </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
