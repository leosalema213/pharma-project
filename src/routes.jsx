import { Routes, Route } from 'react-router-dom'

import TelaLogin from './pages/telaLogin'
import Clientes from './pages/clientes'
import Home from './pages/home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<TelaLogin />}/>
    <Route path="/home" element={<Home />}/>
    <Route path='clientes' element={<Clientes/>} />
  </Routes>
)

export default Rotas