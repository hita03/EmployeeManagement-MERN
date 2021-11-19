import React, { Component, useEffect } from 'react'
import axios from 'axios';
import Header from '../imports/Header';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const CheckingLogin = () => {

    const user = useSelector(state => state.isLoggedIn);
    const history = useHistory()
    useEffect((props) => {


        const route = () => {
            const token = localStorage.getItem('x-access-token')
            return token ? true : false
        }
        if (!route()) {
            history.push('/login');
        }
    }, ([user, history]))
    return true
}

class Home extends React.Component {

    CheckingLogin
    constructor(props) {
        super(props);
        this.state = {
            ID: 0,
            name: '',
            email: '',
            gender: '',
            phone: 0,
            list: [],
        }
    }


    componentDidMount = () => {
        this.getEmployee();
    }

    getEmployee = () => {
        axios.get('http://localhost:3000/api/users')
            .then((response) => {
                const data = response.data;
                this.setState({ list: data })
                console.log('Data loaded');
            })
            .catch(() => {
                console.log('not retreived data')
            });
    }
    render() {
        const { employees } = this.state;
        return (
            <>
                <Header></Header>
                <main>
                    <table responsive = "true">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>ID</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees && employees.map((employee, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.gender}</td>
                                            <td>{employee.ID}</td>
                                            <td>
                                                <a href="/update-user?id=<%= users[i]._id %>" class="btn border-shadow update">
                                                    <span class="text-gradient"><i class="fas fa-pencil-alt" style="color: #4CAF50;"></i></span>
                                                </a>
                                                <a class="btn border-shadow delete" data-id={employee.ID} >
                                                    <span class="text-gradient"><i class="fas fa-times" style="color: red;"></i></span>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

            </main>
            </>    
            )

    }

}

export default Home;


