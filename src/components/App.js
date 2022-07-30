import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from './globalStyles';
import Topo from "./Topo";
import Cartaz from "./Cartaz";
import Filme from "./Filme";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";

export default function App() {

  const [pedido, setPedido] = useState(null);
  const [caminho, setCaminho] = useState(false);

    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Topo caminho={caminho} />
          <Routes>
            <Route path="/" element={<Cartaz setCaminho={setCaminho} />} />
            <Route path="/filme/:idFilme" element={<Filme setCaminho={setCaminho} />} />
            <Route path="/sessao/:idSessao" element={<Sessao setCaminho={setCaminho} setPedido={setPedido} />} />
            <Route path="/sucesso" element={<Sucesso setCaminho={setCaminho} pedido={pedido} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}