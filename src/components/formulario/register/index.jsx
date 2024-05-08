
import { useNavigate } from "react-router-dom";


export default function RegisterForm() {
  const navigate = useNavigate()

  return (
    <form className="w-100 p-4" action="">
      <h2 className="text-dark fw-bolder text-uppercase">Cadastre-se</h2>
      <p className="text-body-tertiary">É rápido e fácil.</p>
      <div className="form-floating">
        <input type="text" id="name" className="form-control" required />
        <label htmlFor="name">Nome</label>
      </div>
      <div className="form-floating mt-2 mb-2">
        <input type="text" id="user" className="form-control" required />
        <label htmlFor="user">usuario</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          id="confirm-email"
          className="form-control"
          required
        />
        <label htmlFor="confirm-email">e-mail</label>
      </div>
      <div className="form-floating mt-2 mb-2">
        <input
          type="email"
          id="confirm-email"
          className="form-control"
          required
        />
        <label htmlFor="confirm-email">confirme seu e-mail</label>
      </div>
      <div className="form-floating mb-2">
        <input
          type="password"
          id="password"
          className="form-control"
          required
        />
        <label htmlFor="password">senha</label>
      </div>
      <p>
        Já tem uma conta?
        <a
          onClick={() => navigate("/")}
          href="#"
          className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          Entrar
        </a>
      </p>
      <button className="btn btn-primary w-100 py-2" type="submit">
        Sign in
      </button>
    </form>
  );
}
