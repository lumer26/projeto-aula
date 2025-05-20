"use client";

import { useState } from 'react';
import './globals.css'; 
import { FaPiggyBank, FaLock, FaShoppingCart } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

export default function Dashboard() {
  const [transactions] = useState([
    {
      descricao: 'Supermercado Big Master',
      tipo: 'Crédito',
      valor: 896,
      banco: 'Nubank',
      data: '21/03/2024',
      parcelas: '1/1'
    },
    {
      descricao: 'Supermercado Big Master',
      tipo: 'Crédito',
      valor: 896,
      banco: 'Nubank',
      data: '21/03/2024',
      parcelas: '1/1'
    }
  ]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <FaPiggyBank className="icon piggy" />
        <button className="add-button">
          <FiPlus />
        </button>
      </header>

      <div className="summary">
        <div className="card entrada">
          <span>Entradas</span>
          <h2>R$ 7.840,56</h2>
          <p>Somada todas as entradas do período.</p>
        </div>
        <div className="card saida">
          <span>Saídas</span>
          <h2>R$ 1.580,45</h2>
          <p>Somada todas as saídas do período.</p>
        </div>
        <div className="card balanco">
          <span>Balanço</span>
          <h2>R$ 6.260,11</h2>
          <p>Somada todas as entradas e saídas do período.</p>
        </div>
      </div>

      <div className="content">
        <div className="analise">
          <h3>Análise</h3>
          <div className="analise-box"></div>
        </div>

        <div className="categorias">
          <h3>Categorias</h3>
          <ul>
            <li className="categoria selecionada">
              <FaLock /> Alimentação <span>10</span> <strong>R$ 1.508,15</strong>
            </li>
            <li><FaShoppingCart /> Mercado <span>8</span> <strong>R$ 508,90</strong></li>
            <li><FaLock /> Alimentação <span>10</span> <strong>R$ 1.508,15</strong></li>
            <li><FaLock /> Alimentação <span>10</span> <strong>R$ 1.508,15</strong></li>
            <li><FaLock /> Alimentação <span>10</span> <strong>R$ 1.508,15</strong></li>
            <li><FaLock /> Alimentação <span>10</span> <strong>R$ 1.508,15</strong></li>
          </ul>
        </div>
      </div>

      <div className="transacoes">
        <h3>Transações</h3>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Banco</th>
              <th>Data</th>
              <th>Parcelas</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i}>
                <td><FaShoppingCart /> {t.descricao}</td>
                <td>{t.tipo}</td>
                <td className="valor">R$ {t.valor.toFixed(2).replace('.', ',')}</td>
                <td>{t.banco}</td>
                <td>{t.data}</td>
                <td>{t.parcelas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}