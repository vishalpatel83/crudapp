import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

export const Rowemployee = (props) => {
  //    const [Employee, setEmployee] = useState([])
  const [employee, setemployee] = useState([]);
  const [allMettups, setallMettups] = useState([]);
  const history = useHistory();
  useEffect(() => {
    let unmounted=false;

    // fetch("http://localhost:5000/Employee")
    // .then(res => res.json())
    // .then(data => setemployee(data));
    axios.get("http://localhost:5000/Employee").then((res) => {
      if(!unmounted){
        setemployee(res.data);
      }
     
    });
    return () => {
      unmounted=true;
    }

  }, [employee]);
  const deleteEmphandler = (id) => {
    axios
      .delete(`http://localhost:5000/Employee/deleteemployee/${id}`)
      .then(() => {
        console.log("item deleted succesfully");
        // <Redirect to="/showemployee1" />;
      });
  };
  //   {console.log( employee)}
  return (
    <tbody>
      {employee.map((emp) => (
        // <div className="user">{user.Name}</div>
        <tr key={emp._id}>
          <td>1</td>
          <td>{emp._id}</td>
          <td>{emp.Name}</td> 
          <td>{emp.EmpNo}</td>
          <td>{emp.Role}</td>
          <td>{emp.Salary}</td>
          <td>
            
              <Link to={`/updateEmployee/${emp._id}`} className="nav-link" className="btn btn-success btn-sm">Update</Link>
            
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => deleteEmphandler(emp._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
