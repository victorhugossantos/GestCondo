import React, { useState } from "react";
import Button from "../components/Button";
import RegistrarMorador from "./RegistrarMorador";

const Moradores = () => {
    const [moradores] = useState([
        {
            id: 1,
            nome: "João Silva",
            cpf: "123.456.789-00",
            bloco: "A",
            unidade: "101",
          },
          {
            id: 2,
            nome: "Maria Oliveira",
            cpf: "987.654.321-00",
            bloco: "B",
            unidade: "202",
          },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleAdd = () => {
        // Logica para abir o modal com o RegistrarMorador.jsx
        setIsModalOpen(true); // abrir modal
    }

    const closeModal = () => {
        setIsModalOpen(false); // fechar modal
    }


    const handleDelete = () => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este morador ?");
        if(confirmDelete) {
            // Logica para deletar no banco de dados
            console.log('em breve será deletado')
        }
    }

    const handleEdit = () => {
        // abrir o menu de cadastro de moradores
        console.log("botão para editar cliclado do ")
    }


    return (
        <div className="min-h-screen p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">
                    Lista de Moradores
                </h1>
                <div className="flex justify-between items-center mb-4">
                    <Button 
                        label='Cadastrar Morador'
                        onClick={handleAdd}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    />
                </div>
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                                <th className="text-center py-3 px-4">Nome</th>
                                <th className="text-center py-3 px-4">CPF</th>
                                <th className="text-center py-3 px-4">Data de Nasimento</th>
                                <th className="text-center py-3 px-4">Bloco</th>
                                <th className="text-center py-3 px-4">Unidade</th>
                                <th className="text-center py-3 px-4">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moradores.map((morador) => (
                                <tr key={morador.id} className="border-b">
                                    <td className="py-3 px-4 text-center">{morador.nome}</td>
                                    <td className="py-3 px-4 text-center">{morador.cpf}</td>
                                    <td className="py-3 px-4 text-center">{morador.nascimento}</td>
                                    <td className="py-3 px-4 text-center">{morador.bloco}</td>
                                    <td className="py-3 px-4 text-center">{morador.unidade}</td>
                                    <td className="py-3 px-4 text-center space-x-2">
                                        <Button 
                                            label="Editar"
                                            onClick={() => handleEdit(morador.id)}
                                            className="bg-green-500 text-white px-3 py-1 rounded-md"
                                        />
                                        <Button 
                                            label="Deletar"
                                            onClick={() => handleDelete(morador.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-md"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {moradores.length === 0 && (
                        <div className="text-center py-6 text-gray-600">Nenhum morador registrado.</div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
                    <div 
                        className="srounded-lg shadow-lg p-8 w-full max-w-md mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <RegistrarMorador closeModal={closeModal}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Moradores