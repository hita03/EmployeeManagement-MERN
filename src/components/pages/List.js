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

class List extends React.Component {

    CheckingLogin
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            ID: 0,
            name: '',
            email: '',
            gender: '',
            phone: 0,
            list: [],
            leave: 'No'
        }
    }


    componentDidMount = () => {
        this.getEmployee();
    }

    getEmployee = () => {
        axios.get('http://localhost:4000/api/users')
            .then((response) => {
                const data = response.data;
                console.log("data==", data);
                this.setState({ employees: data })
                console.log('Data loaded');
            })
            .catch(() => {
                console.log('not retreived data')
            });
    }

    render() {
        const { employees } = this.state;
        //style="color: #4CAF50;" style="color: red;"
        return (
            <>
                <Header>

                </Header>
                <main>
                    <table responsive="true">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>ID</th>
                                <th>Status</th>
                                <th>On Leave</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees && employees.map((employee, i) => {
                                    let updateProp =`/updateEmployee/?id=${employee._id}`;
                                    let id = employee._id;
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.gender}</td>
                                            <td>{employee.ID}</td>
                                            <td>
                                                <a href={updateProp} className="btn border-shadow update" id={id}>
                                                    <span className="text-gradient"><i className="fas fa-pencil-alt" ></i></span>
                                                </a>
                                                <a className="btn border-shadow delete" data-id={employee.ID} >
                                                    <span className="text-gradient"><i className="fas fa-times" ></i></span>
                                                </a>
                                            </td>
                                            <td>{employee.leave}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <a href="/" /*style="padding:80px;"*/><i className="fas fa-angle-double-left"></i>
                        Dashboard
                    </a>
                </main>
            </>
        )

    }

}

export default List;


