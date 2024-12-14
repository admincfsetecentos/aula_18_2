import React, { useState } from 'react';
import './App.css';

// Componente Contador
function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador > 0 ? contador - 1 : 0); // Impede números negativos

  return (
    <div className="contador">
      <h2>Contador</h2>
      <p>Contagem: {contador}</p>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
    </div>
  );
}

// Componente BotaoAlternador
function BotaoAlternador() {
  const [estado, setEstado] = useState("Desligado");

  const alternarEstado = () => {
    setEstado(estado === "Ligado" ? "Desligado" : "Ligado");
  };

  return (
    <div className="botao-alternador">
      <h2>Botão Alternador</h2>
      <button 
        onClick={alternarEstado} 
        style={{ backgroundColor: estado === "Ligado" ? 'green' : 'red', color: 'white' }}
      >
        {estado}
      </button>
    </div>
  );
}

// Componente ListaDeTarefas
function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa) {
      setTarefas([...tarefas, tarefa]);
      setTarefa(''); // Limpa o campo de texto
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div className="lista-tarefas">
      <h2>Lista de Tarefas</h2>
      <input 
        type="text" 
        value={tarefa} 
        onChange={(e) => setTarefa(e.target.value)} 
        placeholder="Digite sua tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} onClick={() => removerTarefa(index)}>
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente principal App
function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao Meu App React</h1>

      {/* Adicionando os componentes */}
      <Contador />
      <BotaoAlternador />
      <ListaDeTarefas />
    </div>
  );
}

export default App;
