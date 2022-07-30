import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Ingresso from "./Ingresso";

export default function Sucesso({setCaminho, pedido}) {

  useEffect(() => {
    setCaminho("/sessao/"+pedido.idSessao);
  }, []); 
  
  if(pedido === null){ return <Infos><Link to="/"><button>Voltar pra Home</button></Link></Infos>}

    return (
      <>
        <Titulo>
          <p>Pedido feito</p> 
          <p>com sucesso!</p>
        </Titulo>
        <Infos>
          <div>
            <h2>Filme e sessão</h2>
            <h3>{pedido.titulo}</h3>
            <h3>{pedido.dataHora}</h3>
            {pedido.compradores.map((e, index) => {
              return (
                <Ingresso key={index} nCadeira={pedido.nAssentos[index]} comprador={e} />
              );
              })}
            <Link to="/"><button>Voltar pra Home</button></Link>
          </div>
        </Infos>
      </>
    );
}

const Titulo = styled.div`
  width: 100%;
  height: 130px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  margin-top: 70px;
  color: #247A6B;
`;

const Infos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 360px;
  }
  h2, h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin: 10px 0 5px 0;
  }
  h3 {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
  }
  h1 {
    margin: 35px 0 5px 0;
  }
  button {
    width: 225px;
    height: 40px;
    background: #E8833A;
    border-radius: 3px;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin: 80px auto 50px auto;
    cursor: pointer;
  }
`;