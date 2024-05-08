import { usuarios } from "../../../utils/usuarios";
import { useNavigate } from "react-router-dom";

import { alertError } from "../../../utils/alerts";

export default function LoginForm() {
  const navigate = useNavigate();

  function redirecionaUsuario(usuario) {
    if (usuario.type == "administrador") {
      navigate("/clientes");
    } else {
      navigate("/home");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const usuarioLogin = {
      user: formData.get("user"),
      password: formData.get("password"),
    };

    const userFound = getuser(usuarioLogin);

    if (getuser(usuarioLogin) == null) {
      alertError(
        "usuario não encontrado",
        "verifique se digitou usuario e senha corretamente"
      );
      return;
    }

    redirecionaUsuario(userFound);
  }

  function getuser(usuario) {
    const usuarioEncontrado = usuarios.find(
      (u) => u.user == usuario.user && u.password == usuario.password
    );
    if (!usuarioEncontrado) {
      return;
    }
    return usuarioEncontrado;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-100 p-4 ">
        <h2 className="text-dark fw-bolder text-uppercase">Login</h2>
        <div className="form-floating mt-2 mb-2">
          <input
            type="text"
            id="user"
            name="user"
            className="form-control"
            required
          />
          <label htmlFor="user">usuário</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            required
          />
          <label htmlFor="password">senha</label>
        </div>
        <div className="d-flex flex-lg-row justify-content-between align-items-center p-2">
          <div className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {" "}
              Lembre-me
            </label>
          </div>
          <a
            href="#"
            className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            onClick={() => navigate("/remember-password")}
          >
            esqueceu a senha?
          </a>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Entrar
        </button>
        <p className="mt-4">
          Não tem uma conta?
          <a
            onClick={() => navigate("/register")}
            href="#"
            className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Inscreva-se
          </a>
        </p>
      </form>
    </>
  );
}
