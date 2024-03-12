import { NavBar } from "./components/NavBar/NavBar"
import NuestraHistoria from "./pages/Historia"
import Home from "./pages/Home"
import Inscripciones from "./pages/Inscripciones"
import Consultas from "./pages/Consultas"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/historia" element={<NuestraHistoria/>} />
        <Route path="/inscripciones" element={<Inscripciones/>} />
        <Route path="/consultas" element={<Consultas/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
