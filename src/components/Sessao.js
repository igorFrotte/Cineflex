import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Rodape from "./Rodape";
import Comprador from "./Comprador";
import {validos} from "./validacoes";

export default function Sessao({setCaminho, setPedido}) {

  const [sessao,setSessao] = useState(null);
  const {idSessao} = useParams();
  const [cadeiras, setCadeiras] = useState([]);
  const [compradores, setCompradores] = useState([]);
  const [nAssentos, setNAssentos] = useState([]);
  const [erros, setErros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
    promisse.then(resposta => {
      setCaminho("/filme/"+resposta.data.movie.id);
      setSessao(resposta.data);
    });
  },[]);

  if(sessao === null){ return <Titulo>Carregando...</Titulo>}

    return (
      <>
        <Titulo>Selecione o(s) assento(s)</Titulo>
        <Cadeiras>
          <div>
            {sessao.seats.map((e) => {
              if(cadeiras.filter((el) => el === e.id).length > 0){
                return (
                  <Selecionado onClick={() => {
                    let campos = compradores.filter((el) => el.idAssento === e.id);
                    if(campos[0].nome !== "" || campos[0].cpf !== ""){
                      if(window.confirm("Você realmente gostaria de remover esse assento?") === true){
                        setNAssentos(nAssentos.filter((el) => el !== e.name));
                        setCadeiras(cadeiras.filter((el) => el !== e.id));
                        setCompradores(compradores.filter((el) => el.idAssento !== e.id));
                      }
                    }else{
                      setNAssentos(nAssentos.filter((el) => el !== e.name));
                      setCadeiras(cadeiras.filter((el) => el !== e.id));
                      setCompradores(compradores.filter((el) => el.idAssento !== e.id));
                    }                
                  }} key={e.id}>
                    {e.name}
                  </Selecionado>
                );
              }
              if(e.isAvailable){
                return (
                  <div onClick={() => {
                    const novoObj = {
                      idAssento: e.id,
                      nome: "",
                      cpf: ""
                    }; 
                    setNAssentos([...nAssentos, e.name]);
                    setCadeiras([...cadeiras, e.id]);
                    setCompradores([...compradores, novoObj]);
                  }} key={e.id}>
                    {e.name}
                  </div>
                );
              } 
              return (
                <Indisponivel onClick={() => alert("Esse assento não está disponível")} key={e.id}>
                  {e.name}
                </Indisponivel>
              );
            })}
          </div>
          <div>
            <Selecionado></Selecionado>
            <div></div>
            <Indisponivel></Indisponivel>
          </div>
          <div>
            <p>Selecionado</p>
            <p>Disponível</p>
            <p>Indisponível</p>
          </div>
        </Cadeiras>
        <Formulario>
          <form onSubmit={(e) => {
            e.preventDefault();
            let erro = validos(compradores);
            setErros([...erro]);
            if(erro.length === 0){
              let obj = {ids: cadeiras, compradores: compradores};
              
              let promisse = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",obj);
              promisse.then((res) => {
                setPedido({
                  ...obj, 
                  idSessao: idSessao,
                  nAssentos: nAssentos,
                  titulo: sessao.movie.title, 
                  dataHora: sessao.day.date+" "+sessao.name
                });
                navigate('/sucesso');
              });
              promisse.catch(() => alert("Algo deu errado!"));

            }           
          }}>
            {compradores.map((e, index) => {
              let filtraErro = erros.filter((el) => e.idAssento === el.idAssento);
              let erro = "";
              if(filtraErro.length > 0){
                erro = "CPF inválido!";
              }
              return (
                <Comprador erroCPF={erro} compradores={compradores} index={index} nAssento={nAssentos[index]} key={index} />
              );
            })}
            {cadeiras.length > 0 ? <button type="submit">Reservar assento(s)</button>: ""}
          </form>
        </Formulario>
        <Rodape>
          <div>
            <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
          </div>
          <div>
            <p>{sessao.movie.title}</p>
            <p>{sessao.day.weekday+" - "+sessao.name}</p>
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

const Cadeiras = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 360px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  & > div > div {
    width: 25px;
    height: 25px;
    margin: 10px 5px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #000000;
    cursor: pointer;
  }
  p {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4E5A65;
  }  
`;

const Selecionado = styled.div`
  background: #8DD7CF !important;
  border: 1px solid #45BDB0 !important;
`;

const Indisponivel = styled.div`
  background: #FBE192 !important;
  border: 1px solid #F7C52B !important;
`;

const Formulario = styled.div`
  display: flex;
  justify-content: center;

  form {
    width: 360px;
    display: flex;
    flex-direction: column;
    margin: 40px 0;
  }
  label {
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    margin: 15px 0 3px 0;
  }
  input {
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    padding: 10px;
    font-size: 18px;
    line-height: 21px;
  }
  input::placeholder {
    font-style: italic;
    font-size: 18px;
    line-height: 21px;
    color: #AFAFAF;
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
    margin: 50px auto 130px auto;
    cursor: pointer;
  }
  div {
    margin: 5px;
    color: red;
  }
`;