import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Topo({caminho=false}) {
    return (
      <Top>
        {caminho? <Link to={caminho}><ion-icon name="return-up-back-outline"></ion-icon></Link> : ""}
        <Link to="/">CINEFLEX</Link>
        </Top>
    );
}

const Top = styled.div`
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  position: fixed;
  background: #C3CFD9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  line-height: 40px;
  
  a {
    color: #E8833A;
  }
  ion-icon {
    position: absolute;
    top: 23px;
    left: calc(100vw/2 - 150px);
    width: 30px;
    height: 25px;
    background: #E8833A;
    border-radius: 3px;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    cursor: pointer;
  }
`;