import { Link } from "react-router-dom"
import logo from "../../../public/logo.png"
import menu from "../../../public/menu.svg"


export default function Header() {

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
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">Clientes</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Produtos</a>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link" to="/">Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


