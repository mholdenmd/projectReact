import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

const OneUser = (props) => {
    const [OneUser, setOneUser] = useState({})

    const deleteUser = (e) => {
        console.log("/*/*TRYING TO DELETE A MARINE/*/*")
        axios.delete(`http://localhost:8000/api/user/delete/${props._id}`)
            .then(response => {
                console.log("/*/*MADE AXIOS.DELETE CALL TO DELETE A USER FROM SERVER/*/*")
                console.log(response)
                console.log("/*/*MADE AXIOS.DELETE CALL TO DELETE A USER FROM SERVER/*/*")
                navigate("/")
            })
            .catch(err => console.log("errors Deleteing A User", err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${props._id}`)
            .then(response => {
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL USERS FROM SERVER/*/*")
                console.log(response)
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL USERS FROM SERVER/*/*")
                setOneUser(response.data.results)
            })
            .catch(err => console.log("errors retrieveing all Users", err))
    }, [])




    return (
        <div>
            <br />
            <h3>Details About: {OneUser.User_name}</h3>
            <br />
            <h4>User Type: {OneUser.User_type}</h4>
            <br />
            <h4>Description: {OneUser.User_description}</h4>
            <br />
            <h4>User Skills:</h4>
            <h4>Skill 1: {OneUser.User_skill_1} </h4>
            <br />
            <h4>Skill 1: {OneUser.User_skill_2} </h4>
            <br />
            <h4>Skill 1: {OneUser.User_skill_3} </h4>

            <button class="btn btn-outline-success">Like</button> |  <button class="btn btn-danger" onClick={deleteUser}>Adopt {OneUser.User_name}</button>

        </div>
    );
};





export default OneUser;