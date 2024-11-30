import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import IMask from "imask";

const RegistrarMorador = ({closeModal}) => {
    const [formData, setFormData] = useState ({
        nome: '',
        cpf: '',
        nascimento: '',
        email: '',
        telefone: '',
        bloco: '',
        unidade: '',
    });

    const cpfRef = useRef(null);
    const telefoneRef = useRef(null);
    const nascimentoRef = useRef(null);

    useEffect(() => {
        // aplicando imask nos inputs
        if (cpfRef.current) {
            IMask(cpfRef.current, {
                mask: '000.000.000-00'
            })
        }
        if (telefoneRef.current) {
            IMask(telefoneRef.current, {
                mask: '(00)00000-0000'
            })
        }
        if (nascimentoRef.current) {
            IMask(nascimentoRef.current, {
                mask: '00/00/0000'
            })
        }
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        // logica para enviar pro banco de dados
        try {
            await addDoc(collection(db, 'moradores'), formData)
            alert('Morador registrado com sucesso')
            setFormData({
                nome: '',
                cpf: '',
                nascimento: '',
                email: '',
                telefone: '',
                bloco: '',
                unidade: '',
            });
        } catch (error) {
            console.error("Erro ao adicionar morador: ", error);
            alert("Erro ao registrar morador.")
        }
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
                        ref={cpfRef}
                    />
                    <Input 
                        label="Data de nascimento"
                        type="date"
                        name="nascimento"
                        value={formData.nascimento}
                        onChange={handleChange}
                        ref={nascimentoRef}
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
                        ref={telefoneRef}
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
