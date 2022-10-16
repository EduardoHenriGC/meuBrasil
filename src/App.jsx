import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/index";
import Praias from "./pages/praias";
import PontoTuristico from "./pages/ponto turistico";
import Shows from "./pages/shows";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <GlobalStyle />
        <br />
        <br />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="praias" element={<Praias />}></Route>
          <Route path="turistico" element={<PontoTuristico />}></Route>
          <Route path="show" element={<Shows />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
