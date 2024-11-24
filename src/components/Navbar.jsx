import React, { useState } from "react";

const Navbar = () => {

    // state para controlar a visibilidade dos submenus

    const [activeMenu, setActiveMenu] = useState(null);

    //  função para alternar a visiblidade do submenu

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu)
    }

    return (
        <nav className="bg-blue-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">GestCondo</div>
            </div>
        </nav>
    )

}

export default Navbar