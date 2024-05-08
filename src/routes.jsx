import { Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import FotgotPassword from './pages/forgotPassword'
import Register from './pages/register'
import Users from './pages/users'
import Home from './pages/home'
import Produtos from './pages/produtos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/remember-password" element={<FotgotPassword />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/produtos" element={<Produtos />}/>
    <Route path='/usuarios' element={<Users/>} />
  </Routes>
)

export default Rotas