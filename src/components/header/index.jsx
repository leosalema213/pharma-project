import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

import logo from "/logo.png"
import menu from "/menu.svg"

export default function Header() {
const navigate = useNavigate()
  
function ExitAccount() {
  Swal.fire({
    title: "Deseja sair da conta?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#198754",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, sair da conta",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/')
    }
  });
}

  return (
    <header className="d-flex flex-wrap gap-2 flex-md-nowrap justify-content-between ps-4 pe-4 align-items-center py-3 mb-4 border-bottom">
      <h1>
        <img className="w-75" src={logo} alt="Pharma" />
      </h1>

      <a className="d-md-none" data-bs-toggle="collapse" href="#menu" role="button" aria-expanded="false" aria-controls="collapseExample">
       <img src={menu} alt="" />
      </a>

      <nav id="menu" className="collapse navbar-collapse d-md-flex  justify-content-end">
        <ul className="nav nav-pills d-flex flex-column flex-md-row">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/usuarios" className="nav-link" >Usuarios</Link>
          </li>
          <li className="nav-item">
            <Link to="/produtos" className="nav-link">Produtos</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link" onClick={ExitAccount}>Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


