import { Routes, Route } from 'react-router-dom'

import TelaLogin from './pages/telaLogin'
import Clientes from './pages/clientes'
import Home from './pages/home'
import Produtos from './pages/produtos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<TelaLogin />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/produtos" element={<Produtos />}/>
    <Route path='clientes' element={<Clientes/>} />
  </Routes>
)

export default Rotas