import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { usuarios } from "../../../utils/usuarios";
import { alertError } from "../../../utils/alerts";

export default function RememberPassword() {
  function alertSucess(nome) {
    Swal.fire({
      icon: "success",
      title:`OLÁ ${nome}`,
      text: "um email de recuperação foi enviado para você.",
      showConfirmButton: false,
      timer: 4000,
    });
  } 

  function getUserwithEmail(email) {
    const user = usuarios.find((u) => u.email == email);

    if (!user) {
      return;
    }
    return user;
  }

  function handlesubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const emailRecovery = formData.get("recovery-email");

    if (!getUserwithEmail(emailRecovery)) {
      alertError("Usuario não encontrado","verifique se digitou o email correto")
      return;
    }

    const nome = getUserwithEmail(emailRecovery).name;
    alertSucess(nome)
    navigate('/')
  
  }

  const navigate = useNavigate();

  return (
    <form className="w-100 p-4" onSubmit={handlesubmit}>
      <h2 className="text-dark fw-bolder text-uppercase">Recuperar conta</h2>
      <p className="text-body-tertiary">insira seu email para recuperação</p>
      <div className="form-floating">
        <input
          type="email"
          id="email"
          className="form-control"
          name="recovery-email"
          required
        />
        <label htmlFor="email">e-mail</label>
      </div>
      <div className="d-flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="btn btn-danger w-100 py-2 mt-4"
          type="button"
        >
          cancelar
        </button>
        <button className="btn btn-primary w-100 py-2 mt-4" type="submit">
          enviar
        </button>
      </div>
    </form>
  );
}
