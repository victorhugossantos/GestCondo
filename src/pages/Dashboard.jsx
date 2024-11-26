import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Main Content*/}
      <main className="container mx-auto mt-12">

        {/* Cards de Boas-Vindas*/}
        <div className="bg-gray-200 text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="w-24 h-24 mb-4">
            <img src="https://i.pinimg.com/474x/ae/b3/5c/aeb35cbae341de43a0befa1a47ba1d36.jpg" alt="Logo Condominio" className="rounded-full border-4 border-blue-700"/>
          </div>
          <h2 className="text-2xl font-bold mb-2">Bem-vindo ao GestCondo !</h2>
          <p className="text-gray-600 text-center"> Gerencie seu condomínio com facilidade e eficiência</p>
        </div>

        {/* Informações Resumidas*/}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-gray-400 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold">Condomínio</h3>
            <p className="text-2xl mt-2">Residencial Fulano</p>
          </div>
          <div className="bg-gray-400 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold">Blocos</h3>
            <p className="text-2xl mt-2">5</p>
          </div>
          <div className="bg-gray-400 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold">Unidades</h3>
            <p className="text-2xl mt-2">300</p>
          </div>
          <div className="bg-gray-400 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold">Moradores </h3>
            <p className="text-2xl mt-2">800</p>
          </div>
        </section>

        {/* Ações Rapidas*/}
        <section className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-white"> Ações Rapidas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded=lg shadow-lg">Gerenciar Moradores</button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded=lg shadow-lg">Registrar Ocorrencia</button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded=lg shadow-lg">Configurações do Sistema</button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded=lg shadow-lg">Gerenciar Reservas</button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded=lg shadow-lg">Gerenciar Finanças</button>
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 py-4 text-center mt-12">
        <p className="text-sm">© 2024 GestCondo. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default Dashboard