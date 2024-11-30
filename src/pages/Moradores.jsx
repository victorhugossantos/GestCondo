import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import RegistrarMorador from "./RegistrarMorador";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import LoadingSpinner from "../components/LoadingSpinner";

const Moradores = () => {
    const [moradores, setMoradores] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    
    // Funções do modal
    const handleAdd = () => {    
        setIsModalOpen(true); // abrir modal
    }

    const closeModal = () => {
        setIsModalOpen(false); // fechar modal
    }

    // Função para mostrar os moradores

    const fetchMoradores = async () => {
        setIsLoading(true)
        try {
            const moradoresRef = collection(db, 'moradores')
            const snapshot = await getDocs(moradoresRef)
            const moradoresList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMoradores(moradoresList)
            
        } catch (error){
            console.error("erro ao carregar moradores", error)
        } finally {
            setIsLoading(false);
        }
        
    }

    // Função para exluir morador
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este morador ?");
        if(confirmDelete) {
            // Logica para deletar no banco de dados
            try {
                const moradorRef = doc(db, "moradores", id)
                await deleteDoc(moradorRef)

                // apos excluir, refaz a leitura da lista 
                fetchMoradores();
            } catch (error) {
                console.error("Erro ao excluir Morador", error)
            }
        }
    }

    const handleEdit = () => {
        // abrir o menu de cadastro de moradores
        console.log("botão para editar cliclado do ")
    }

    // UseEffect para carregar os moradores ao montar o componente
    useEffect(() => {
        fetchMoradores();
    }, []);


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

                {/* Tabela de moradores*/}
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
                            {isLoading ? (
                                <tr><td colSpan="6" className="text-center py-6"><LoadingSpinner /></td></tr>
                            ) : (
                                moradores.map((morador) => (
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
                                ))
                            )}
                        </tbody>
                    </table>
                    {moradores.length === 0 && !isLoading && (
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