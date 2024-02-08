import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <div className="h-screen w-[15vw] flex flex-col border-r-2 border-grey">
            <NavLink to='/'><p className="text-white uppercase">Password</p></NavLink>
            <NavLink to='/favorites'><p className="text-white uppercase">Favorites</p></NavLink>
            <NavLink to='/settings'><p className="text-white uppercase">Settings</p></NavLink>
        </div>
    )
}

export default Navbar;