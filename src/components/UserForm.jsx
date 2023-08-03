import React, { useState } from  'react';
import FormDisplay from "./FormDisplayComponent"
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        
        e.preventDefault();

        
    };


    
    return(
        
        <div className='App'>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                    {
                    firstName.length < 2 ? <p style={{color: "red"}}>First Name must be at least 2 characters.</p>: <p></p>
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                    {
                    lastName.length < 2 ? <p style={{color: "red"}}>Last Name must be at least 2 characters.</p>: <p></p>
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                    {
                    email.length < 5 ? <p style={{color: "red"}}>Email must be valid with at least 5 characters.</p>: <p></p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                    {
                    password.length < 8 ? <p style={{color: "red"}}>Password must be at least 8 characters.</p>: <p></p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                    {
                    password !== confirmPassword ? <p style={{color: "red"}}>Password must match</p>: <p></p>
                    }
                </div>
                Your Form Data</form>
            <FormDisplay firstName= {firstName} lastName= {lastName} email={email} password= {password} confirmPassword = {confirmPassword}></FormDisplay>
        </div>
       
    );
};
    
export default UserForm;
