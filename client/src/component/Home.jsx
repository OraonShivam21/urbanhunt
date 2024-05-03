import { Link } from "react-router-dom"
import Router from "./Routes"
function Home()
{
    return(<>
    <h1>this is home page</h1>
    <Link to={'/login'}>login</Link>
    </>)
}

export default Home