import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const CreateUser = () => {
    const [UserInfo, setUserInfo] = useState({
        first_name: "",
        last_type: "",
        birthday: "",
        profilepicture: "",
        username: "",
        password: "",
        confirm_password: "",
        email: "",
        description: "",
        terms: "",
    })

    const changeHandler = (e) => {
        console.log("TRYING TO CHANGE FORM DATA")
        setUserInfo({
            ...UserInfo,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState({})




    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/user/create/`, UserInfo)
            .then(results => {
                console.log(results => "*/*/ ADDING NEW USER*/*/", results)
                if (results.data.errors) {
                    console.log("THERE WAS AN ERROR ADDING A USER")
                    setErrors(results.data.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(err => console.log(" ERROR ADDING USER", err))


    }


    return (
        <div>
            <br />
            <h2>Know A User Needing A Home?</h2>
            <br />
            <form className="col-6 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" name="User_name" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.User_name ? errors.User_name.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>User Type:</label>
                    <input type="text" name="User_type" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.User_type ? errors.User_type.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>User Description:</label>
                    <input type="text" name="User_description" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.User_description ? errors.User_description.message : ""}</p>
                </div>
                <div className="form-group">
                    <h6>User Skills: (Optional)</h6>
                    <label>Skill 1:</label>
                    <input type="text" name="User_skill_1" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.User_skill_1 ? errors.User_skill_1.message : ""}</p>
                </div>
                <div className="form-group">

                    <label>Skill 2:</label>
                    <input type="text" name="User_skill_2" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.User_skill_2 ? errors.User_skill_2.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 3:</label>
                    <input type="text" name="User_skill_3" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.User_skill_3 ? errors.User_skill_3.message : ""}</p>
                </div>



                <input type="submit" value="Add User" className="btn btn-success" />
            </form>
        </div>
    );
};



export default CreateUser;