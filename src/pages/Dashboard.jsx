import React from 'react';

const condoData = {
    name: "Condomínio Exemplo",
    numBlocos: 5,
    totalUnidades: 100,
    bloco: [
        { name: 'Bloco A', sindico: 'Pendente' },
        { name: 'Bloco B', sindico: 'Pendente' },
        { name: 'Bloco C', sindico: 'Pendente' },
        { name: 'Bloco D', sindico: 'Pendente' },
        { name: 'Bloco E', sindico: 'Pendente' },
    ]
}

const Dashboard = () => {
    return (
        <div className="container my-4 bg-light rounded shadow-lg p-4">
            {/* Cabeçalho */}
            <div className="dashboard-header mb-4">
                <h1 className="text-center text-primary mb-4">{condoData.name}</h1>
                <div className="row dashboard-info">
                    <div className="col-12 col-md-6 mb-3">
                        <div className="card bg-primary text-white p-3 shadow-sm">
                            <h3 className="card-title">Blocos</h3>
                            <p className="card-text">{condoData.numBlocos}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <div className="card bg-primary text-white p-3 shadow-sm">
                            <h3 className="card-title">Apartamentos</h3>
                            <p className="card-text">{condoData.totalUnidades}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blocos */}
            <div className="row">
                {condoData.bloco.map((bloco, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <div className="card bg-warning text-dark p-3 shadow-sm">
                            <h2 className="card-title">{bloco.name}</h2>
                            <p><strong>Síndico: </strong>{bloco.sindico}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
