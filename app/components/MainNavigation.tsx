import { NavLink } from "@remix-run/react";

function NavigationBar() {
    return(
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <NavLink to='/' className={"bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"}>Home</NavLink>
            <NavLink to='/nasaImages' className={"bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"}>Nasa images</NavLink>
        </nav>
    );
} 

export default NavigationBar;