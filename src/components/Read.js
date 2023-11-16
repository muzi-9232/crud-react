import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://64a5527700c3559aa9bf7963.mockapi.io/crud-app")
      .then((res) => {
        setApiData(res.data);
      });
  }

  const handleDelete = (id) => {
    axios.delete(`https://64a5527700c3559aa9bf7963.mockapi.io/crud-app/${id}`)
    .then(()=>{
        getData()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const setDataToStorage = (id,name,age,email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("name",name)
    localStorage.setItem("age",age)
    localStorage.setItem("email",email)
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row mt-2">
        <div className="col-md-12">
            <div className="mt-2 mb-2">
                <NavLink to={'/create'}>
                <button className="btn btn-primary">
                    Create New Data
                </button>
                </NavLink>
                
            </div>

          <table className="table table-bordered table-striped table-hover text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {apiData.map((elem) => {
                return (
                  <>
                    <tr key={elem}>
                      <td>{elem.id}</td>
                      <td>{elem.e_name}</td>
                      <td>{elem.e_age}</td>
                      <td>{elem.e_email}</td>
                      <td>
                        <NavLink to={'/edit'}>
                        <button className="btn btn-primary" onClick={()=>setDataToStorage(elem.id,elem.e_name,elem.e_age,elem.e_email)}>Edit</button>
                        </NavLink>
                      </td>
                      <td>
                      <button className="btn btn-danger" onClick={()=>{if(window.confirm("Are you sure to delete data")) {handleDelete(elem.id)}}}>Delete</button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
