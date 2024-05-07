import logo from "../../../public/logo.png"
import avatar from "../../../public/avatar.png"


export default function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-between ps-4 pe-4 align-items-center py-3 mb-4 border-bottom">
      <img src={logo} alt="Pharma" />

      <ul className="nav nav-pills">
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
          <a href="#" className="nav-link">Sobre Nós</a>
        </li>
        <li className="nav-item d-flex align-items-center">
          <div className="dropdown text-end">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={avatar} alt="mdo" width="32" height="32" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">Opções</a></li>
              <li><a className="dropdown-item" href="#">Perfil</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item " href="#">Sair</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  )
}