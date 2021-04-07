import './CurrentPage.css'
const { NavLink } = require("react-router-dom")


const CurrentPage = () => {
    return(
        <div className = 'page'>
            <NavLink to = "/profile">PROFILE</NavLink>
            <NavLink to = "/login">LOGIN</NavLink>
            
            <NavLink to = "/register">REGISTER</NavLink>
            <NavLink to = "/users">USERS</NavLink>
            <NavLink to = "/">BACK</NavLink>
        </div>
        )
}

export default CurrentPage;