import React,{useState} from "react";
import { Form, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export const Employeeform = () => {
  const history=useHistory();
  const [Name, setName] = useState('');
  const [Empno, setEmpno] = useState('');
  const [employeerole, setemployeerole] = useState('');
  const [salary, setsalary] = useState('')


//   const formChangehandler=(e)=>{
//      setName(e.target.value);
//      setEmpno(e.target.value);
//      setemployeerole(e.target.value);
//      setsalary(e.target.value)
    
//   }
  const formsubmitHandler=(e)=>{
   e.preventDefault();
   console.log(Name)
   const Employee={
       Name:Name,
       EmpNo:Empno,
       Salary:salary,
       Role:employeerole

   }
   console.log(Employee)
   axios.post('http://localhost:5000/Employee/addEmployee',Employee).then(()=>{
      //  console.log("Employee added successfully")
       toast.success('Employee added successfully!', {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        history.push('/showemployee')
   }).
    catch(err=>{
      toast.error('ops! Employee not addded', {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        console.log(err)
    })
  }
  return (
    <div>
      <h1>Employee detail form</h1>
      {/* <Jumbotron> */}
      <div style={{width:"700px", margin:"auto"}}>
        <Form onSubmit={formsubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail"> 
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={Name} onChange={e=>setName(e.target.value)} placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee No</Form.Label>
            <Form.Control type="text" value={Empno} onChange={e=>setEmpno(e.target.value)} placeholder="Enter Employee no" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee Role</Form.Label>
            <Form.Control type="text" value={employeerole} onChange={e=>setemployeerole(e.target.value)} placeholder="Enter Employee Role" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee salary</Form.Label>
            <Form.Control type="text" value={salary} onChange={e=>setsalary(e.target.value)} placeholder="Enter Employee salary" />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Add Employee
          </Button>
        </Form>
      </div>
      {/* </Jumbotron> */}
      <ToastContainer />
    </div>
  );
};
