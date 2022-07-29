import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Rodape from "./Rodape";

export default function Filme({setPedido}) {

  const [filme,setFilme] = useState(null);
  const {idFilme} = useParams();

  useEffect(() => {
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);
    promisse.then(resposta => setFilme(resposta.data));
  },[]);

  if(filme === null){ return <Titulo>Carregando...</Titulo>}

    return (
      <>
        <Titulo>Selecione o horário</Titulo>
        <TodaSessao>
          {filme.days.map((e, index) => {
            return (
              <div key={index}>
                <p>{e.weekday+" - "+e.date}</p>
                <div>
                  {e.showtimes.map((el) => {
                    return (
                      <Link to={"/sessao/" + el.id} key={el.id}>{el.name}</Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </TodaSessao>
        <Rodape>
          <div>
            <img src={filme.posterURL} alt={filme.title} />
          </div>
          <div>
            <p>{filme.title}</p>
          </div>
        </Rodape>
      </>
    );
}

const Titulo = styled.div`
  width: 100%;
  height: 110px;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #293845;
  margin-top: 70px;
`;

const TodaSessao = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 130px;

  & > div {
    width: 350px;
    height: 120px;
  }
  & > div > p {
    color: #293845;
    font-size: 20px;
    line-height: 23px;
  }
  & > div > div {
    display: flex;
  }
  & > div > div > a {
    width: 85px;
    height: 45px;
    background: #E8833A;
    border-radius: 3px;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 25px 10px 0 0;
  }
`;