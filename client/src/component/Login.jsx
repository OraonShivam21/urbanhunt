import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { authcontext } from "../context/authcontext";

function Login()
{
    const{auth,setAuth,admin,setAdmin,token,setToken}=useContext(authcontext)
    const navigate = useNavigate();
    const url='http://localhost:8080'
    const loginref=[useRef(null),useRef(null)]
    const[obj,setObj]=useState(null)
    useEffect(()=>{
        loginref[0].current.focus()
    },[])
    useEffect(()=>{
        if(obj)
        {
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
                    setAuth(true)
                    setToken(data.token)
                    data.role==='admin'?setAdmin(true):setAdmin(false)
                    navigate('/dashboard');
                }else{
                    alert('error')
                }
            })
            .catch(err=>console.log(err))
        }
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