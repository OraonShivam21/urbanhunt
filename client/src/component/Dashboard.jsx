import { useContext } from "react"
import { Link } from "react-router-dom"
import { authcontext } from "../context/authcontext"


function Dashboard()
{
    const{auth,admin,token}=useContext(authcontext)
    return(
        <>
       {auth &&  <div>
        <h1>user dashbaord</h1>
       {admin && <Link to={'/admindashboard'}>admin dashboard</Link>}
        </div>}
        {!auth && <h1>login please</h1>}
        </>
    )
}

export default Dashboard