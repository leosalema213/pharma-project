import { Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import FotgotPassword from './pages/forgotPassword'
import Register from './pages/register'
import Clientes from './pages/clientes'
import Home from './pages/home'
import Produtos from './pages/produtos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/remember-password" element={<FotgotPassword />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/produtos" element={<Produtos />}/>
    <Route path='clientes' element={<Clientes/>} />
  </Routes>
)

export default Rotas