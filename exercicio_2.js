import React, { useState } from 'react';

function BotaoAlternador() {
  // Estado inicial é 'Desligado'
  const [status, setStatus] = useState(false); // 'false' representa 'Desligado' e 'true' representa 'Ligado'

  // Função para alternar o estado
  const alternarStatus = () => {
    setStatus(prevStatus => !prevStatus); // Alterna o valor booleano
  };

  // Estilo condicional
  const estilo = {
    backgroundColor: status ? 'green' : 'red', // Verde para 'Ligado' e Vermelho para 'Desligado'
    color: 'white',
    padding: '12px 24px',
    fontSize: '20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={alternarStatus} style={estilo}>
        {status ? 'Ligado' : 'Desligado'} {/* Exibe o texto baseado no estado */}
      </button>
    </div>
  );
}

export default BotaoAlternador;

