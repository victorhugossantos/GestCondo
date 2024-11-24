import React from "react";

const condoData = {
  name: "Condomínio Exemplo",
  numBlocos: 5,
  totalUnidades: 100,
  bloco: [
    { name: "Bloco A", sindico: "Pendente" },
    { name: "Bloco B", sindico: "Pendente" },
    { name: "Bloco C", sindico: "Pendente" },
    { name: "Bloco D", sindico: "Pendente" },
    { name: "Bloco E", sindico: "Pendente" },
  ],
};

const Dashboard = () => {
  return (
    <div className="min-h-screen text-white p-6 flex flex-col items-center justify-center">
      {/* Card Principal com as Informações do Condomínio */}
      <div className="bg-stone-800 rounded-xl shadow-2xl p-8 w-full max-w-4xl mb-12">
        <h1 className="text-4xl font-extrabold text-blue-500 text-center mb-6">
          {condoData.name}
        </h1>
        <div className="mt-6 flex justify-center gap-12">
          <div className="bg-blue-600 text-white rounded-lg p-6 shadow-xl w-48 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Blocos</h3>
            <p className="text-3xl font-bold">{condoData.numBlocos}</p>
          </div>
          <div className="bg-green-600 text-white rounded-lg p-6 shadow-xl w-48 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Apartamentos</h3>
            <p className="text-3xl font-bold">{condoData.totalUnidades}</p>
          </div>
        </div>
      </div>

      {/* Card de Blocos */}
      <div className="bg-gray-100 text-white rounded-xl p-8 shadow-2xl w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Blocos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {condoData.bloco.map((bloco, index) => (
            <div
              key={index}
              className="bg-gray-700 text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold">{bloco.name}</h3>
              <p className="text-lg mt-2">
                <strong>Síndico: </strong>{bloco.sindico}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
