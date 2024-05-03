import { Link } from "react-router-dom"

function Dashboard()
{
    return(
        <>
        <h1>user dashbaord</h1>
        <Link to={'/admindashboard'}>admin dashboard</Link>
        </>
    )
}

export default Dashboard