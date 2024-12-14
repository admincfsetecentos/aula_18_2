import React, { useState } from 'react';

function Contador() {
  // useState inicializa o contador em 0
  const [contador, setContador] = useState(0);

  // Função para incrementar o contador
  const incrementar = () => setContador(prev => prev + 1);

  // Função para decrementar o contador (não permite que fique negativo)
  const decrementar = () => {
    if (contador > 0) {
      setContador(prev => prev - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>{contador}</h1> {/* Exibe o contador */}
      <div>
        <button 
          onClick={incrementar} 
          style={{ padding: '10px', fontSize: '20px', marginRight: '10px' }}
        >
          Incrementar (+1)
        </button>
        <button 
          onClick={decrementar} 
          style={{ padding: '10px', fontSize: '20px' }}
        >
          Decrementar (-1)
        </button>
      </div>
    </div>
  );
}

export default Contador;
