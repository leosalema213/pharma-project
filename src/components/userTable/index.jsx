import { usuarios } from "../../utils/usuarios";
import "./styles.scss";

export default function UserTable() {
  return (
    <div className="table-responsive small">
      <h3 className="text-center">Lista de Usuarios</h3>

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
          {usuarios.map((user) => (
            <tr key={user.name}>
              <td className="checkbox">
                <input
                  type="checkbox"
                  className=" form-check-input"
                  value={user.id}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.user}</td>
              <td>{user.email}</td>
              <td
                className={
                  user.type == "administrador" ? "text-primary" : ""
                }
              >
                {user.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
