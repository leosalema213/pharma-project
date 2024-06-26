import "./styles.scss"

export default function ManageUsers() {
  return (
    <div className="container-fluid mb-4">
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-between">
        <h3>Gerenciar Usuarios</h3>
        <div className="buttons d-flex gap-2">
          <button type="button" className="btn btn-success">Cadastrar</button>
          <button type="button" className="btn btn-primary">Alterar</button>
          <button type="button" className="btn btn-danger">Excluir</button>
        </div>
      </div>
    </div>
  )
}