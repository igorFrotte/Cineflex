import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Cartaz() {

  const [filmes,setFilmes] = useState(null);

  useEffect(() => {
    const promisse = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
    promisse.then(resposta => setFilmes(resposta.data));
  },[]);

  if(filmes === null){ return <Titulo>Carregando...</Titulo>}

    return (
      <>
        <Titulo>Selecione o filme</Titulo>
        <Filmes>
          {filmes.map((e) => {
            return (
              <Link key={e.id} to={"/filme/" + e.id} >
                <div>
                  <img alt={e.title} src={e.posterURL} />
                </div>
              </Link>
            );
          })}
        </Filmes>
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
  margin-top: 70px;
  color: #293845;
`;

const Filmes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: space-evenly;

  a {
    cursor: pointer;
  }

  div {
    width: 150px;
    height: 210px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }

  img {
    width: 130px;
    height: 190px;
  }
`;

