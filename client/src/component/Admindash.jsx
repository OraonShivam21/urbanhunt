import { useContext, useEffect, useState } from "react"
import { authcontext } from "../context/authcontext";
import { Link, useNavigate } from "react-router-dom";

function Admindash() {
    
    const{token,admin}=useContext(authcontext)
    const [data, setData] = useState([])
    const url = 'http://localhost:8080'
    
    useEffect(() => {
        
        fetch(`${url}/products`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log("API Response:", data);
            setData(data);
        })
        .catch(err => console.error('Fetch error:', err));
    }, []);
    
    return (
        <>
       {admin && <div>
       <h1>admin dashboard</h1>
        <Link to={'/addproduct'}>add product</Link>
       </div>}
       {!admin && <h1>login please</h1>}
        </>
    );
}

export default Admindash;
