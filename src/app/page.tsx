import './globals.css';

export default function Home() {
  return (
    
    <div className="container">
      
      <button>+</button>
      <h1>Painel Financeiro</h1>

      <section className="resumo">
        <div className="card1">
          <h2 className="entrada">Entradas</h2>
          <p>R$ 7.840,56</p>
        </div>
        <div className="card2">
          <h2 className="saida">Saídas</h2>
          <p>R$ 1.580,45</p>
        </div>
        <div className="card3">
          <h2>Balanço</h2>
          <p>R$ 6.260,11</p>
        </div>
      </section>

      <section className="analise">
        <h2>Análise por Categorias</h2>
        <table className="tabela">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Transações</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alimentação</td>
              <td>10</td>
              <td>R$ 1.508,15</td>
            </tr>
            <tr>
              <td>Mercado</td>
              <td>8</td>
              <td>R$ 508,90</td>
            </tr>
            <tr>
              <td>Educação</td>
              <td>5</td>
              <td>R$ 1.200,00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="transacoes">
        <h2>Transações</h2>
        <table className="tabela">
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
            <tr>
              <td>Supermercado Big Master</td>
              <td>Crédito</td>
              <td>R$ 896,00</td>
              <td>Nubank</td>
              <td>21/03/2024</td>
              <td>1/1</td>
            </tr>
            {/* Adicione mais transações conforme necessário */}
          </tbody>
        </table>
      </section>
    </div>
  );
}
