export default function Ingresso({nCadeira, comprador}) {
      return (
        <>
            <h1>Ingresso</h1>
            <h3>Assento {nCadeira}</h3>
            <h2>Comprador</h2>
            <h3>Nome: {comprador.nome}</h3>
            <h3>CPF: {comprador.cpf}</h3>
        </>
      );
}