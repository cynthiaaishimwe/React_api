import React,{useState} from "react";
import "./style.css"
import {Link} from 'react-router-dom'


const Login =() =>{
const [username, setUsername] = useState('');
const [password, setPassword] = useState('')

 const handleSubmit = async(e) =>{
    e.preventDefault();
    const data = {
        username: username,
        password :password,
    }

    try{
    const response = await fetch ('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    const result  = await response.json();
    console.log({result});
    }
 catch(error){
    console.log(error.message)
 }
 }
    return(
        <div>
            <form className="form">
                <h1>Login</h1>
                <input placeholder="Enter Username" type="text"
                onChange={(e)=>{setUsername(e.target.value)}}></input>
                <br>
                </br>
                <br>
                </br>
                <input placeholder="Enter Password" type="password"
                onChange={(e)=>{setPassword(e.target.value)}}></input>
                <br>
                </br>
                <br>
                </br>
                <Link to='/product'>
                <button>Login</button>
                </Link>
            </form>
        </div>
    )
}
export default Login;