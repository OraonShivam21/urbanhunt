
import { useEffect, useRef, useState } from "react"
import { useNavigate } from 'react-router-dom';

function Login()
{
    const navigate = useNavigate();
    const url='http://localhost:8080'
    const loginref=[useRef(null),useRef(null)]
    const[obj,setObj]=useState({})
    useEffect(()=>{
        loginref[0].current.focus()
    },[])
    useEffect(()=>{
        fetch(`${url}/users/login`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.msg==="login successfull")
            {
                localStorage.setItem('token',data.token)
                navigate('/dashboard');
            }
        })
        .catch(err=>console.log(err))
    },[obj])

    const loginclick=()=>{
        const newobj={
            email:loginref[0].current.value,
            password:loginref[1].current.value
        }
        setObj(newobj)
    }

return(
    <>
    <input ref={loginref[0]} type="text" placeholder="email"/>
    <input ref={loginref[1]} type="text" placeholder="password"/>
    <button onClick={loginclick}>login</button>
    </>
)
}
export default Login