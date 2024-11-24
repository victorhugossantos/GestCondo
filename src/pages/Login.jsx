import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";  // Caso queira continuar com o botão customizado

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook da navegação

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de login ficará aqui
        if (email === 'admin@gestcondo.com' && password === "admin") {
            navigate('/dashboard');
        } else {
            alert('Credenciais inválidas');
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                        <input 
                            type="email" 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite o seu e-mail"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                        <input 
                            type="password" 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-800 transition" label="Entrar" />
                </form>
            </div>
        </div>
    );
}

export default Login;
