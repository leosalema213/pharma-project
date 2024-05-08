import { usuarios } from "../../utils/usuarios"
import "./styles.scss"

export default function TabelaClientes() {
  return (
    <div className="table-responsive small">
      <h3 className="text-center">Lista de clientes</h3>

      <table className="table table-hover table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nome</th>
            <th scope="col">Usuario</th>
            <th scope="col">Email</th>
            <th scope="col">tipo</th>
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {usuarios.map((cliente) => (
            <>
            <tr key={cliente.id}>
              <td className="checkbox"><input type="checkbox" className=" form-check-input" value={cliente.id}/></td>
              <td >{cliente.name}</td>
              <td>{cliente.user}</td>
              <td>{cliente.email}</td>
              <td className={cliente.type == "administrador" ? "text-primary" : ""}>
                {cliente.type}
              </td>
            </tr>
            </>
          ))}
        </tbody>
      </table>
  </div>
  )
}