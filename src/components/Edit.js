import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://64a5527700c3559aa9bf7963.mockapi.io/crud-app/${id}`, {
      e_name: name,
      e_age: age,
      e_email: email,
    }).then(()=>{
        navigate("/")
    }).catch((err)=>{
        console.log(err)
    })
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="mt-2 mb-2">
            <NavLink to={"/"}>
              <button className="btn btn-primary">Read Data</button>
            </NavLink>
          </div>
          <div className="bg-primary p-4 text-center mb-2 mt-3">
            <h1>Update Data</h1>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Enter Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
