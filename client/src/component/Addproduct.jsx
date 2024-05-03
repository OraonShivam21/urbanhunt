import { useContext, useEffect, useRef, useState } from "react"
import { authcontext } from "../context/authcontext"
import { useNavigate,Link } from "react-router-dom"

function Addproduct()
{
    const navigate=useNavigate()
    const{token}=useContext(authcontext)
    const[obj,setObj]=useState(null)
    const ref=[useRef(null),useRef(null),useRef(null),useRef(null)]
    const url='http://localhost:8080'

    useEffect(()=>{
        if(obj)
        {
            fetch(`${url}/products`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify(obj)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                navigate('/admindashboard')
            })
            .catch(err=>console.log(err))
        }
    },[obj])

    const handleclick=()=>{
        const newobj={
            name:ref[0].current.value,
            price:ref[2].current.value,
            image:ref[1].current.value,
            description:ref[3].current.value
        }
        setObj(newobj)
    }
return(
    <>
    <input type="text" ref={ref[0]} placeholder="name"/>
    <input type="text" ref={ref[1]} placeholder="image"/>
    <input ref={ref[2]} placeholder="price"/>
    <input type="text" ref={ref[3]} placeholder="description"/>
    <button onClick={handleclick}>Add product</button>
    <Link to={'/admindashboard'}>back</Link>
    </>
)
}

export default Addproduct