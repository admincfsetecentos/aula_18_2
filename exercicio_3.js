import React, { useState } from 'react';

function ListaDeTarefas() {
  // useState para controlar o valor do input e as tarefas
  const [tarefaInput, setTarefaInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  // Função para adicionar a tarefa na lista
  const adicionarTarefa = () => {
    if (tarefaInput.trim() !== '') {
      setTarefas(prevTarefas => [...prevTarefas, tarefaInput]);
      setTarefaInput(''); // Limpa o campo de entrada após adicionar
    }
  };

  // Função para remover tarefa ao clicar
  const removerTarefa = (index) => {
    setTarefas(prevTarefas => prevTarefas.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      {/* Campo de entrada para nova tarefa */}
      <input
        type="text"
        value={tarefaInput}
        onChange={(e) => setTarefaInput(e.target.value)} // Atualiza o valor do input
        placeholder="Digite sua tarefa"
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
      {/* Botão para adicionar tarefa */}
      <button
        onClick={adicionarTarefa}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Adicionar Tarefa
      </button>

      {/* Lista de tarefas */}
      <ul style={{ padding: '0', listStyleType: 'none' }}>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            onClick={() => removerTarefa(index)} // Remove a tarefa ao clicar
            style={{
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
