import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button"

const RegistrarMorador = ({closeModal}) => {
    const [formData, setFormData] = useState ({
        nome: '',
        cpf: '',
        data_nascimento: '',
        email: '',
        telefone: '',
        bloco: '',
        unidade: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // logica para enviar pro banco de dados

        console.log("Dados do morador: ", formData)
        setFormData({
            nome: '',
            cpf: '',
            data_nascimento: '',
            email: '',
            telefone: '',
            bloco: '',
            unidade: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg roudend-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
                    Registro de Moradores
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                        label="Nome completo"
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite o nome do morador"
                        required
                    />
                    <Input 
                        label="CPF"
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        placeholder="Digite o CPF do morador"
                    />
                    <Input 
                        label="Data de nascimento"
                        type="date"
                        name="nascimento"
                        value={formData.data_nascimento}
                        onChange={handleChange}
                    />
                    <Input 
                        label="E-mail"
                        type="e-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Digite o e-mail do morador"
                    />
                    <Input 
                        label="Telefone"
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Digite o telefone"
                    />
                     <Input 
                        label="Bloco"
                        type="text"
                        name="bloco"
                        value={formData.bloco}
                        onChange={handleChange}
                        placeholder="Digite o bloco do morador"
                        required
                    />
                     <Input 
                        label="Unidade"
                        type="text"
                        name="unidade"
                        value={formData.unidade}
                        onChange={handleChange}
                        placeholder="Digite o Apartamento/Casa do morador"
                        required
                    />

                    <Button type="submit" label="Cadastrar" className="w-full"/>
                    <Button 
                            label="Fechar"
                            onClick={closeModal}
                            className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg w-full max-w-md"
                        />
                </form>
            </div>
        </div>
    )
}

export default RegistrarMorador
