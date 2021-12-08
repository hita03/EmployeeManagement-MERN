import React from "react";
import axios from "axios";
import "./create.css";
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";



class CreateEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: 0,
      name: "",
      email: "",
      gender: "",
      phone: 0,
      leave: "No",
      list: [],
    };
  };
   
  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To add new employee when user submits the form
  handleSubmit = (event) => {
    
    event.preventDefault();
    const { ID, name, email, gender, phone, leave } = this.state;
    console.log(ID, name, email, gender, phone, leave);
    axios
      .post("http://localhost:4000/api/users", {
        ID,
        name,
        gender,
        email,
        phone,
        leave,
      })
      .then((response) => {
        console.log("employee successfully created");
      })
      .catch((error) => {});

    this.setState({
      name: "",
      email: "",
      phone: 0,
      gender: "",
      ID: 0,
      leave: "No",
    });
  };

  reload =()=>{
    this.props.history.push("/list");
  }

  render() {
    return (
      <main id="site-main">
        <div className="container">
          <div className="box-nav d-flex justify-between">
            <div className="filter">
              <a href="/" className="dashboardStyle">
                <i className="fas fa-angle-double-left"></i>
                Dashboard
              </a>
            </div>
          </div>
          <div className="box-nav d-flex justify-between">
            <div className="filter">
              <a href="/list" className="dashboardStyle">
                <i className="fas fa-angle-double-left"></i>
                View Employees
              </a>
            </div>
          </div>

          <div className="form-title text-center">
            <h2 className="text-dark">New User</h2>
            <span className="text-dark">Create Account</span>
          </div>
          <form
            id="add_user"
            autoComplete="off"
            onSubmit={this.handleSubmit}
            className="p-5"
          >
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>

              <div class="col-sm-10">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Enter Name"
                  class="form-control"
                />
              </div>
            </div>
            <br />

            <div className="form-group row">
              <label htmlFor="Email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  class="form-control"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <br />

            <div className="form-group row">
              <div className="col-sm-2 col-form-label">
                <label htmlFor="gender" className="radio-label">
                  Gender
                </label>
              </div>

              <div className="col-sm-10">
                <input
                  type="radio"
                  name="gender"
                  id="gender-m"
                  onChange={this.handleChange}
                  value="Male"
                />
                &nbsp;
                <label htmlFor="gender-m" className="radio-label">
                  Male
                </label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  name="gender"
                  id="gender-f"
                  onChange={this.handleChange}
                  value="Female"
                />
                &nbsp;
                <label htmlFor="gender-f" className="radio-label">
                  Female
                </label>
              </div>

              <br />
              <div className="form-group row">
                <label htmlFor="phone" className="col-sm-2 col-form-label">
                  Ph. No.
                </label>
                <div className="col-sm-10">
                  <input
                    class="form-control"
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    onChange={this.handleChange}
                    value={this.state.phone}
                  />
                </div>
              </div>
              <br />
              <br />
              <br />

              <div className="form-group row">
                <label htmlFor="ID" className="col-sm-2 col-form-label">
                  ID
                </label>
                <div className="col-sm-10">
                  <input
                    class="form-control"
                    type="number"
                    className="text-dark"
                    name="ID"
                    onChange={this.handleChange}
                    value={this.state.ID}
                  />
                </div>
              </div>
              <br />
              <br />
              
                <button type="submit" className="btn btn-primary text-light" >
                  <b>Create</b>
                </button>
                
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default CreateEmployee;
