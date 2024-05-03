import { Link } from "react-router-dom"
import Router from "./Routes"
function Home()
{
    return(<>
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>login</Link>
        <Link to={'/signup'}>signup</Link>
    </nav>
    <h1>this is home page</h1>
    </>)
}

export default Home