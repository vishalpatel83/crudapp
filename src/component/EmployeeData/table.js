import React from "react";
import { Table } from "react-bootstrap";
import { Rowemployee } from "./rowemployee";
export const EmployeeTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>Name</th>
            <th>EmpNo</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        
        <Rowemployee name="vishal"/>
      </Table>
      
    </div>
    
  );
};
