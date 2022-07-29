import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from './globalStyles';
import Topo from "./Topo";
import Cartaz from "./Cartaz";
import Filme from "./Filme";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";

export default function App() {

  const [oi, setOi] = useState("");

    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Topo />
          <Routes>
            <Route path="/" element={<Cartaz />} />
            <Route path="/filme/:idFilme" element={<Filme setOi={setOi} />} />
            <Route path="/sessao/:idSessao" element={<Sessao />} />
            <Route path="/sucesso" element={<Sucesso oi={oi} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}