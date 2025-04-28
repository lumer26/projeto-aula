'use client';
import { useState } from "react";

export default function Home() {
  // Estado para o número digitado
  const [numero, setNumero] = useState<string>(""); 
  // Estado para a lista de números
  const [numerosLista, setNumerosLista] = useState<string[]>([]);

  // Função para adicionar o número na lista
  const criarNumero = () => {
    if (numero.trim() !== "") {
      setNumerosLista([...numerosLista, numero]); // Adiciona o número à lista
      setNumero(""); // Limpa o campo após adicionar
    }
  };

  // Função para excluir o último número da lista
  const excluirNumero = () => {
    setNumerosLista(numerosLista.slice(0, -1)); // Remove o último número
  };

  return (
    <div>
      <h1 className="titulo">Projeto aula</h1>

      <div className="entrada">
        <input
          type="number"
          placeholder="Digite um número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)} // Atualiza o estado do número
        />
      </div>  

      <div>
        <h3 className="lista_entrata_saida">
          <button className="list_criar" onClick={criarNumero}>Criar</button>
          <button className="list_excluir" onClick={excluirNumero}>Excluir</button>
        </h3>
      </div>

      <div className="numero_criado">
        <h2>Números Criados:</h2>
        <ul>
          {numerosLista.map((num, index) => (
            <li key={index}>{num}</li> // Exibe cada número na lista
          ))}
        </ul>
      </div>
    </div>
  );
}
