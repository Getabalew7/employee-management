import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddEmployee } from "./components/AddEmployee";
import { Navbar } from "./components/Navbar";
import { EmployeeList } from "./components/EmployeeList";
import {UpdateEmployee} from "./components/UpdateEmployee";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<EmployeeList/>} />
        <Route path="/addEmployee" element={<AddEmployee/>} />
        <Route path="/editEmployee/:id" element={<UpdateEmployee/>} />
      </Routes>
    </Router>
  );
}

export default App;
