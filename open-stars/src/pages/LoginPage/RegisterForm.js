import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {firestore} from "../../firebase";
import { addDoc, collection} from "@firebase/firestore";
import './LoginForm.css';


function RegisterForm() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [repeatpwd, setRepeatPwd] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");


    const databaseref = collection(firestore, "Users");

    const handleChangeEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const handleChangeUsername = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        event.preventDefault();
        setPwd(event.target.value);
    }

    const handleChangeRepeatPassword = (event) => {
        event.preventDefault();
        setRepeatPwd(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        let data = {
            userEmail: email,
            userPassword: pwd,
            userName: username,
            skillset: [],
            bio: "",
            usericon: "",
            projects: ""
        }

        if (pwd == repeatpwd) {
            try {
                addDoc(databaseref, data);

            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            setMessage("Passwords must match");
        }
    }
      
    return(
    <div className='LoginInterface' onSubmit={handleSubmit}>
        <form>
            <label className='Form'>
                <h>Email: </h>
                <input name="emailform" type="email" value={email} onChange={handleChangeEmail} size={15}></input>
            </label>

            <label className='Form'>
                <h>Username: </h>
                <input name="usernameform" type="text" value={username} onChange={handleChangeUsername} size={15}></input>
            </label>

            <label className='Form'>
                <h>Password: </h>
                <input name="passwordform" type="password" value={pwd} onChange={handleChangePassword} size={15}></input>
            </label>

            <label className='Form'>
                <h>Password: </h>
                <input name="repeatpasswordform" type="password" value={repeatpwd} onChange={handleChangeRepeatPassword} size={15}></input>
            </label>


            <input type='submit' value="Enter"/>
        </form>
        <p>
            {message}
        </p>

    </div>);
}

export default RegisterForm;
