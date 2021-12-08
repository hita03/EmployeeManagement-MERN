import React from "react";
import axios from "axios";
import "./create.css";
class EditEmployee extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: props.id,
      ID: 0,
      name: "",
      email: "",
      gender: "",
      phone: 0,
      leave: "No",
      list: [],
    };
  }

  componentDidMount = () => {
    console.log(this.state.id);
    this.getEmployeeById();
  };

  // To get employee based on ID
  getEmployeeById() {
    axios
      .get("http://localhost:4000/api/users/" + this.state.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          ID: response.data.ID,
          email: response.data.email,
          phone: response.data.phone,
          leave: response.data.leave,
          gender: response.data.gender,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // When value changes of the fields

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, ID, leave, gender, email, phone } = this.state;
    axios
      .post("http://localhost:4000/api/users/" + this.state.id, {
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        ID: ID,
        leave: leave,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  checkMaleGender() {
    if (this.state.gender === "Male") {
      console.log("hello");
      return true;
    } else return false;
  }

  checkFemaleGender() {
    if (this.state.gender === "Female") {
      return true;
    } else return false;
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

          <div className="form-title text-center">
            <h2 className="text-dark">Edit Employee</h2>
          </div>
          <form
            id="update_user"
            autoComplete="off"
            onSubmit={this.handleSubmit}
            className="p-5"
          >
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Enter Name"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="Email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-2 col-form-label">
                <label htmlFor="gender" className="radio-label">
                  Gender
                </label>
              </div>

              <div className="col-sm-10">
                {this.checkMaleGender() ? (
                  <input
                    type="radio"
                    name="gender"
                    id="gender-f"
                    onChange={this.handleChange}
                    value="Male"
                    checked
                  />
                ) : (
                  <input
                    type="radio"
                    name="gender"
                    id="gender-f"
                    onChange={this.handleChange}
                    value="Male"
                  />
                )}
                &nbsp;
                <label htmlFor="gender-m" className="radio-label">
                  Male
                </label>
                &nbsp;&nbsp;&nbsp;
              </div>
              <div className="col-sm-10">
                {this.checkFemaleGender() ? (
                  <input
                    type="radio"
                    name="gender"
                    id="gender-f"
                    onChange={this.handleChange}
                    value="Female"
                    checked
                  />
                ) : (
                  <input
                    type="radio"
                    name="gender"
                    id="gender-f"
                    onChange={this.handleChange}
                    value="Female"
                  />
                )}
                <label htmlFor="gender-f" className="radio-label">
                  Female
                </label>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="phone" className="col-sm-2 col-form-label">
                Ph. No.
              </label>
              <div className="col-sm-10">
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="ID" className="col-sm-2 col-form-label">
                ID
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="text-dark"
                  name="ID"
                  onChange={this.handleChange}
                  value={this.state.ID}
                />
              </div>
            </div>
            <br />

            <div className="form-group row">
              <button type="submit" className="btn btn-primary text-light">
                <b>Save</b>
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default EditEmployee;
