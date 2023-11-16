import axios from "axios";
import React, { useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";

const Create = () => {

  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [email,setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://64a5527700c3559aa9bf7963.mockapi.io/crud-app",{
      e_name:name,
      e_age:age,
      e_email:email
    }).then(()=>{
      navigate("/")
    }).catch((err)=>{
      console.log(err)
    })
  }


  //https://64a5527700c3559aa9bf7963.mockapi.io/crud-app
  return (
    <>
      <div className="row">
        <div className="col-md-6">
        <div className="mt-2 mb-2">
                <NavLink to={'/'}>
                <button className="btn btn-primary">
                    Read Data
                </button>
                </NavLink>
                
            </div>
          <div className="bg-primary p-4 text-center mb-2 mt-3">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Enter Name:</label>
              <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Age:</label>
              <input type="number" onChange={(e)=>setAge(e.target.value)} className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Email:</label>
              <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          {name}
          {age}
          {email}
        </div>
      </div>

      
    </>
  );
};

export default Create;
