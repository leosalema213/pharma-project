import Header from "../components/header";
import GerenciarClientes from "../components/gerenciarClientes";
import TabelaClientes from "../components/tabelaClientes";
import Footer from "../components/footer";


export default function Clientes() {


  return(
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <GerenciarClientes />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
              <TabelaClientes />          
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
