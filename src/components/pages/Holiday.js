import React from 'react'
import Header from '../imports/Header';

export default function Holiday(){


    let columnProp = {
        fontSize: "20px",
        fontWeight: "bold"
    }
    var tableStyle={
        marginLeft: "30px",
        marginRight: "30px",
        marginTop:"20px"
    }
    var dashboardStyle ={
        fontSize: "22px",
        marginLeft: "30px",
        textDecoration: "none"
    }
        return (
            <div>
                <Header>
                </Header>
                <main>
                    <table responsive="true" class="table table-striped" style={tableStyle}>
                        <thead style={columnProp}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date and Month</th>
                                <th scope="col">Holiday Name</th>
                                <th scope="col">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>14th January</td>
                                <td>Makara Sankranti</td>
                                <td>Regional Holiday</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>26th January</td>
                                <td>Republic Day</td>
                                <td>National Holiday</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>29th March</td>
                                <td>Holi Festival</td>
                                <td>Restricted Holiday</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>1st May</td>
                                <td>Labour Day</td>
                                <td>Restricted Holiday</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>13th May</td>
                                <td>Eid-ul-Fitr</td>
                                <td>Public Holiday</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>15th August</td>
                                <td>Independence Day</td>
                                <td>National Holiday</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>30th August</td>
                                <td>Janmashtami</td>
                                <td>Restricted Holiday</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>10th September</td>
                                <td>Ganesh Chaturthi</td>
                                <td>Public Holiday</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>2nd October</td>
                                <td>Gandhi Jayanti</td>
                                <td>National Holiday</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>15th October</td>
                                <td>Durga Puja / Dussehra </td>
                                <td>Public Holiday</td>
                            </tr>

                            <tr>
                                <td>11</td>
                                <td>18th October</td>
                                <td>Eid Milad</td>
                                <td>Restricted Holiday</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>4th November</td>
                                <td>Diwali</td>
                                <td>Public Holiday</td>
                            </tr>

                            <tr>
                                <td>13</td>
                                <td>25th December</td>
                                <td>Christmas</td>
                                <td>Public Holiday</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/" style={dashboardStyle}><i className="fas fa-angle-double-left"></i>
                       &nbsp; Dashboard
                    </a>
                </main>

            </div>
        )
    
}
