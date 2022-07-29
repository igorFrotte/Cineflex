import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from './globalStyles';
import Topo from "./Topo";
import Cartaz from "./Cartaz";
import Filme from "./Filme";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";

export default function App() {

  const [pedido, setPedido] = useState({});

    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Topo />
          <Routes>
            <Route path="/" element={<Cartaz />} />
            <Route path="/filme/:idFilme" element={<Filme />} />
            <Route path="/sessao/:idSessao" element={<Sessao setPedido={setPedido} />} />
            <Route path="/sucesso" element={<Sucesso pedido={pedido} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}