
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup()
{
    const navigate=useNavigate()
    const url='http://localhost:8080'
    const signupref=[useRef(null),useRef(null),useRef(null)]
    const[obj,setObj]=useState(null)
    useEffect(()=>{
        signupref[0].current.focus()
    },[])
    useEffect(()=>{
       if(obj)
       {
        fetch(`${url}/users/signup`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.msg==='register successfull')
            {
                navigate('/login')
            }else{
                alert('error')
            }
        })
        .catch(err=>console.log(err))
       }
    },[obj])

    const signupclick=()=>{
        const newobj={
            name:signupref[0].current.value,
            email:signupref[1].current.value,
            password:signupref[2].current.value
        }
        setObj(newobj)
    }

return(
    <>
    <input ref={signupref[0]} type="text"placeholder="name" />
    <input ref={signupref[1]} type="text" placeholder="email"/>
    <input ref={signupref[2]} type="text" placeholder="password"/>
    <button onClick={signupclick}>signup</button>
    </>
)
}
export default Signup