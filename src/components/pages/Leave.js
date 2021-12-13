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
class Leave extends React.Component {

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
        this.approveLeave = this.approveLeave.bind(this);
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


    handleSubmit(employee,id){
        console.log("in handle submit ", id);
        const { name, ID, leave, gender, email, phone } = employee;
        axios.post('http://localhost:4000/api/users/' + id
            , {
                name: name,
                email: email,
                phone: phone,
                gender: gender,
                ID: ID,
                leave: leave,

            })
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });

    }

    approveLeave(employee,id) {

        if (employee.leave === 'No') employee.leave = 'Yes';
        else employee.leave = 'No';
        console.log(employee);
        console.log("in approve leave ", id);
        this.handleSubmit(employee,id);
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
                                <th scope="col">ID</th>
                                <th scope="col">On Leave</th>
                                <th scope="col">Leave Status</th>
                            </tr>
                        </thead>
                        <tbody className='tableBodyStyle'>
                            {
                                employees && employees.map((employee, i) => {
                                    
                                    console.log("in map funcn", employee._id);
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.ID}</td>
                                            <td>{employee.leave}</td>
                                            <td>
                                                { employee.leave=== 'Yes'? <button className='btn btn-success' id={employee._id} onClick={()=>this.approveLeave(employee,employee._id)}>Back To Work</button>:<button className='btn btn-warning' id={employee._id} onClick={()=>this.approveLeave(employee,employee._id)}>Approve</button> }
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    <a href="/" className='dashboardStyle'><i className="fas fa-angle-double-left"></i>
                        Dashboard
                    </a>
                </main>
            </>
        )

    }

}

export default Leave;


