import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';



const AllUsers = (props) => {
    const [AllUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/all")
            .then(response => {
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL USERS FROM SERVER/*/*")
                console.log(response)
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL USERS FROM SERVER/*/*")
                let results = response.data.results
                results.sort(function (a, b) {
                    var nameA = a.User_type.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.User_type.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });
                setAllUsers(results)


            })
            .catch(err => console.log("errors retrieveing all Users", err))
    }, [])


    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>User Identification Number</th>
                        <th>User Name</th>
                        <th>User Type</th>
                        <th>User Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((user, i) => {
                        return (
                            <tr>
                                <th scope="row">{user._id}</th>
                                <td>{user.user_name}</td>
                                <td>{user.user_type}</td>
                                <td>{user.user_description}</td>
                                <td><button class="btn btn-outline-success"><Link to={`/User/${user._id}`}>Details</Link></button> | <button class="btn btn-outline-success"><Link to={`/User/update/${user._id}`}>Edit</Link></button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};




export default AllUsers;