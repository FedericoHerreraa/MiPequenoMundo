import { NavBar } from "./components/NavBar/NavBar"
import NuestraHistoria from "./pages/Historia"
import Home from "./pages/Home"
import Inscripciones from "./pages/Inscripciones"
import MediosDePago from "./pages/MediosDePago"
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
        <Route path="/pago" element={<MediosDePago/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
