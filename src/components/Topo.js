import styled from "styled-components";

export default function Topo() {
    return (
      <Top>CINEFLEX</Top>
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
  color: #E8833A;
  font-size: 34px;
  line-height: 40px;
`;