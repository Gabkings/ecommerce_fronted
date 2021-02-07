
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Base from '../core/Base'
import { singup } from './helper/user_api_calls'


export default function Signup() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
      });
    
      const { name, email, password, error, success } = values;
    
      const handleChange = (name) =>
        (event) => {
          setValues({ ...values, error: false, [name]: event.target.value });
        };

        const onsubmit = (event) => {
            event.preventDefault()
            setValues({...values, error: false})
            singup({name, email, password})
            .then((data) => {
                if (data.email === email) {
                    setValues({
                      ...values,
                      name: "",
                      email: "",
                      password: "",
                      error: "",
                      success: true,
                    });
                  } else {
                    setValues({
                      ...values,
                      error: true,
                      success: false,
                    });
                  }
            })
            .catch(error => console.log(error))
        }

        const successMessage = () => {
            return (
              <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                  <div
                    className="alert alert-success"
                    style={{ display: success ? "" : "none" }}
                  >
                    New account created successfully. Please <Link
                      to="/signin"
                    >
                      login now.
                    </Link>
                  </div>
                </div>
              </div>
            );
          };
        
          const errorMessage = () => {
            return (
              <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                  <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                  >
                    Check all fields again
                  </div>
                </div>
              </div>
            );
          };


        const signUpForm = () => {
            return (
              <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                  <form>
                    <div className="form-group">
                      <label className="text-light">Name</label>
                      <input
                        className="form-control"
                        value={name}
                        onChange={handleChange("name")}
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-light">Email</label>
                      <input
                        className="form-control"
                        value={email}
                        onChange={handleChange("email")}
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-light">password</label>
                      <input
                        className="form-control"
                        value={password}
                        onChange={handleChange("password")}
                        type="password"
                      />
                    </div>
                    <button
                      onClick={onsubmit}
                      className="btn btn-success btn-block"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            );
          };
    

    return (
        <Base title="Signup Page" description="Create an account here">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            {/* {JSON.stringify(values)} */}
        </Base>
    )
}
