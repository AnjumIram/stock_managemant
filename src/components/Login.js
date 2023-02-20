import React from 'react';

function Login(props) {
 
    return (
      <>     
        <h1>Stock Management</h1>

        <form onSubmit= {props.AdminLogin}>

        <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="" name="username" aria-describedby="emailHelp"/>      
        </div>

        <div className="mb-3">
        <label htmlFor="" className="form-label">Password</label>
        <input type="password" className="form-control" id="" name="password"/>
        </div>

        <button type="submit" className="btn btn-primary" >Login</button>

      </form>
      </>
    )
  }
  
  export default Login
  
