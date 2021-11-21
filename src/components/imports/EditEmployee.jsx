import React from "react";
import axios from "axios";

// const customStyle = {
//     width: '300px',
//     margin: '0 auto'
// }

// const styleProp = {
//     fontFamily: 'Lucida Sans, Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'
// }

class EditEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.match.params.id,
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
    this.getEmployeeById();
  };

  // To get employee based on ID
  getEmployeeById() {
    axios
      .get(
        "http://localhost:4000/api/users/" +
          this.state.id
      )
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
    const { name,ID,leave,gender , email, phone } = this.state;
    axios.post('http://localhost:4000/api/updateEmployee/' + this.state.id, {
    name:name ,
    email: email,
    phone: phone,
    gender: gender,
    ID:ID,
    leave: leave,

    })
    .then((response) => {
    console.log(response);
    this.props.history.push('/');
    })
    .catch((error) => {
    console.log(error);
    });
    
    }
  render() {
    return (
      <main id="site-main">
        <div className="conatiner">
          <div className="box-nav d-flex justify-between">
            <div className="filter">
              <a href="/" /*style="padding:80px;"*/>
                <i className="fas fa-angle-double-left"></i>
                Dashboard
              </a>
            </div>
          </div>

          <div className="form-title text-center">
            <h2 className="text-dark">Edit Employee</h2>
          </div>
          <form id="update_user" autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="new_user">
              <div className="form-group">
                <label htmlFor="name" className="text-dark">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Enter Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="Email" className="text-dark">
                  Email
                </label>

                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender" className="radio-label">
                  Gender
                </label>
                <div className="radio inline">
                  <input
                    type="radio"
                    name="gender"
                    id="gender-m"
                    onChange={this.handleChange}
                    value="Male"
                  />
                  <label htmlFor="gender-m" className="radio-label">
                    Male
                  </label>
                </div>
                <div className="radio inline">
                  <input
                    type="radio"
                    name="gender"
                    id="gender-f"
                    onChange={this.handleChange}
                    value="Female"
                  />
                  <label htmlFor="gender-f" className="radio-label">
                    Female
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="text-dark">
                  Ph. No.
                </label>
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>

              <div className="form-group">
                <label htmlFor="ID" className="text-dark">
                  ID
                </label>
                <input
                  type="number"
                  className="text-dark"
                  name="ID"
                  onChange={this.handleChange}
                  value={this.state.ID}
                />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="btn text-dark">
                  <b>Save</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default EditEmployee;
