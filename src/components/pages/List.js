import React, { Component, useEffect } from 'react'
import axios from 'axios';
import Header from '../imports/Header';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './list.css';

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
        this.deleteEmployee = this.deleteEmployee.bind(this);
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

    deleteEmployee(id) {
        axios.get('http://localhost:4000/api/users/remove/' + id)
            .then(() => {

                console.log('Employee Deleted !!!');
                window.location.reload(true);
            })
            .catch((error) => {
                console.log(error)
            })
    }




    render() {
        const { employees } = this.state;
        return (
            <>
                <Header>

                </Header>
                <main>
                    <div className='tableProp'>
                        <table responsive="true" class="table table-striped">
                            <thead className='columnProp'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"> On Leave</th>
                                </tr>
                            </thead>
                            <tbody className='tableBodyStyle'>
                                {
                                    employees && employees.map((employee, i) => {
                                        let updateProp = `/update/${employee._id}`;
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
                                                        <span className='editLink'><i className="fas fa-pencil-alt" ></i></span>
                                                    </a>
                                                    <button onClick={() => this.deleteEmployee(employee._id)} className="btn border-shadow delete" >
                                                        <span className='deleteLink'><i className="fas fa-times" ></i></span>
                                                    </button>
                                                </td>
                                                <td>{employee.leave}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <a href="/" className='dashboardStyle'><i className="fas fa-angle-double-left"></i>
                        &nbsp; Dashboard
                    </a>
                </main>
            </>
        )

    }

}

export default List;


