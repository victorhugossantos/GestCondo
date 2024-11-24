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
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="card" style={{ width: '20rem' }}>
                <div className="card-body bg-light">
                    <h2 className="card-title text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input 
                                type="email" 
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite o seu e-mail"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input 
                                type="password" 
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                        <Button type="submit" className="btn btn-primary w-100" label="Entrar" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
