import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {

    // state para controlar a visibilidade dos submenus

    const [activeMenu, setActiveMenu] = useState(null);
    const menuRef = useRef(null);

    //  função para alternar a visiblidade do submenu

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu)
    }

    // função para detectar clicques fora do menu
    const handleClickOutside = (e) => {
        if(menuRef.current && !menuRef.current.contains(e.target)) {
            setActiveMenu(null);
        }
    }

    // Adiciona o listener de click

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav ref={menuRef} className="bg-blue-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    
                    <a href="/dashboard" className="block text-white">GestCondo</a>                 
                </div>

                
                <div className="flex space-x-6">
                    {/* Menu dashboard*/}
                    <div className="relative">
                        <button
                        onClick={() => toggleMenu("dashboard")} className="text-white hover:text-blue-400 px-4 py-2 rounded-md">
                            Dashboard
                        </button>
                        {activeMenu === "dashboard" && (
                            <div className="absolute left-0 mt-2 bg-blue-600 rounded-md shadow-lg w-48">
                                <a href="/dashboard/overview" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Visão Geral
                                </a>
                                <a href="/dashboard/reports" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Relatórios
                                </a>
                            </div>
                        )}
                    </div>
                    {/* Menu Cadastros*/}
                    <div className="relative">
                        <button
                        onClick={() => toggleMenu("cadastros")}
                        className="text-white hover:text-blue-400 px-4 py-2 rounded-md"
                        >
                            Cadastros
                        </button>
                        {activeMenu === "cadastros" && (
                            <div className="absolute left-0 mt-2 bg-blue-600 rounded-md shadow-lg w-48">
                                <a href="/cadastros/morador" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Morador
                                </a>
                                <a href="/cadastros/funcionario" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Funcionario
                                </a>
                                <a href="/cadastros/veiculo" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Veiculo
                                </a>
                                <a href="/cadastros/prestador" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Prestador de Serviços
                                </a>
                            </div>
                        )}
                    </div>
                    {/* Menu Consultas*/}
                    <div className="relative">
                        <button
                        onClick={() => toggleMenu("consultas")} className="text-white hover:text-blue-400 px-4 py-2 rounded-md">
                            Consultas
                        </button>
                        {activeMenu === "consultas" && (
                            <div className="absolute left-0 mt-2 bg-blue-600 rounded-md shadow-lg w-48">
                                <a href="/consultas/unidade" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Unidade
                                </a>
                                <a href="/consultas/Morador" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Morador
                                </a>
                                <a href="/consultas/ocorrencias" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Ocorrencias
                                </a>
                                <a href="/consultas/ocorrencias" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Encomendas
                                </a>
                                <a href="/consultas/financeiro" className="block text-white px-4 py-2 hover:bg-blue-500">
                                    Financeiro
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar