import React from 'react';
import axios from 'axios';

// const customStyle = {
//     width: '300px',
//     margin: '0 auto'
// }

// const styleProp = {
//     fontFamily: 'Lucida Sans, Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'
// }

class CreateEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                ID: 0,
                name: '',
                email: '',
                gender: '',
                phone: 0,
                list:[],
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { ID, name, email,gender, phone } = this.state;
        axios.post('http://localhost:3000/api/users', {
            ID,
            name,
            gender,
            email,
            phone,
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
    <div class="conatiner">
        <div class="box-nav d-flex justify-between">
            <div  class="filter">
                <a href="/" /*style="padding:80px;"*/><i class="fas fa-angle-double-left"></i>
                    All Users
                </a>
            </div>
        </div>

        <div class="form-title text-center">
            <h2 class="text-dark">New User</h2>
            <span class="text-light">Create new account</span>
        </div>
        <form action="/api/users" id="add_user" method="post" autocomplete="off">
    <div class="new_user">
        <div class="form-group">
            <label for="name" class="text-dark">Name</label>
            <input type="text" name="name" value={this.state.name} placeholder="Enter Name"/>
            
        </div>


        <div class="form-group">
            <label for="Email" class="text-dark">Email</label>
            
            <input type="text" name="email" value={this.state.email} placeholder="Enter Email"/>
            
        </div>

        <div class="form-group">
            <label for="gender" class="radio-label">Gender</label>
            <div class="radio inline">
                <input type="radio" name="gender" id="gender-m" value={this.state.gender} />
                <label for="gender-m" class="radio-label">Male</label>
            </div>
            <div class="radio inline">
                <input type="radio" name="gender" id="gender-f" value={this.state.gender}/>
                <label for="gender-f" class="radio-label">Female</label>
            </div>
        </div>

        <div class="form-group">
            <label for="phone" class="text-dark">Ph. No.</label>
            <input type="tel" name="phone" pattern="[0-9]{10}" value ={this.state.phone}/>
            
        </div>

        <div class="form-group">
            <label for="ID" class="text-dark">ID &nbsp &nbsp &nbsp &nbsp</label>
            <input type="number"class="text-dark" name="ID" value ={this.state.ID}/>
            
        </div>
        <br/>
        <div class="form-group">
            <button type="submit" class="btn text-dark" ><b>Create</b></button>
        </div>
       
    </div>

</form>
    </div>
</main>
        );
    }
}

export default CreateEmployee;