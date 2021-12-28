import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
export const Updateform = (props) => {
  const id = props.match.params.id;
  const [employee, setemployee] = useState([]);
  const [Name, setName] = useState('');
  const [EmpNo, setEmpNo] = useState('');
  const [Salary, setSalary] = useState('');
  const [Role, setRole] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Employee/getemployee/${id}`)
      .then((res) => {
        // setemployee(res.data);
        setName(res.data.Name);
        setEmpNo(res.data.EmpNo);
        setRole(res.data.Role);
        setSalary(res.data.Salary);

        console.log(res.data);
      });
    
  }, []);
  const updatedSubmithandler = (e) => {
    e.preventDefault();
    const Employee = {
      Name: Name,
      EmpNo: EmpNo,
      Role: Role,
      Salary: Salary,
    };
    axios
      .put(`http://localhost:5000/Employee/updateemployee/${id}`, Employee)
      .then(() => {
        console.log("employee updated succesfully");
      });
  };
  return (
    <div>
      <div style={{ width: "700px", margin: "auto" }}>
        <Form onSubmit={updatedSubmithandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee No</Form.Label>
            <Form.Control
              type="text"
              value={EmpNo}
              onChange={(e) => setEmpNo(e.target.value)}
              placeholder="Enter Employee no"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee Role</Form.Label>
            <Form.Control
              type="text"
              value={Role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter Employee Role"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee salary</Form.Label>
            <Form.Control
              type="text"
              value={Salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter Employee salary"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};
