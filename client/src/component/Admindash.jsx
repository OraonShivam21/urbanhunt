import { useEffect, useState } from "react"

function Admindash() {
    const [data, setData] = useState([])
    const url = 'http://localhost:8080'
    
    // useEffect(() => {
    //     const token = JSON.parse(localStorage.getItem('token'))
        
    //     fetch(`${url}/products`, {
    //         method: "GET",
    //         headers: {
    //             "Content-type": "application/json",
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     .then(res => {
    //         if (!res.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log("API Response:", data);
    //         setData(data);
    //     })
    //     .catch(err => console.error('Fetch error:', err));
    // }, []);
    
    return (
        <>
        <h1>admin dashboard</h1>
        </>
    );
}

export default Admindash;
