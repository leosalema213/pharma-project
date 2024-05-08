import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";

import { registerSchema } from "../../../utils/registerValidation";



export default function RegisterForm() {

  function alertSucess(username) {
    Swal.fire({
      icon: "success",
      title:`USUARIO:  ${username}`,
      text: "Criado com sucesso.",
      showConfirmButton: false,
      timer: 4000,
    });
  } 

  function handlesubmit(values) {  
    alertSucess(values.userName)

    navigate("/")
  }

  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        fullName: "",
        userName: "",
        email: "",
        confirmEmail: "",
        password: "",
      }}
      validationSchema={registerSchema}
      onSubmit={handlesubmit}
    >
      <Form className="w-100 p-0 ps-2 pe-2">
        <h2 className="text-dark fw-bolder text-uppercase">Cadastre-se</h2>
        <p className="text-body-tertiary">É rápido e fácil.</p>
        <div className="form-floating">
          <Field
            type="text"
            id="fullName"
            name="fullName"
            className="form-control"
          />
          <label htmlFor="fullName">Nome</label>
          <p className="text-danger m-0">
            <ErrorMessage name="fullName" />
          </p>
        </div>
        <div className="form-floating mt-2 mb-2">
          <Field
            type="text"
            id="userName"
            name="userName"
            className="form-control"
          />
          <label htmlFor="userName">usuario</label>
          <p className="text-danger m-0">
            <ErrorMessage className="teste" name="userName" />
          </p>
        </div>
        <div className="form-floating">
          <Field
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
          <label htmlFor="email">e-mail</label>
          <p className="text-danger m-0">
            <ErrorMessage name="email" />
          </p>
        </div>
        <div className="form-floating mt-2 mb-2">
          <Field
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            className="form-control"
          />
          <label htmlFor="confirmEmail">confirme seu e-mail</label>
          <p className="text-danger m-0">
            <ErrorMessage name="confirmEmail" />
          </p>
        </div>
        <div className="form-floating mb-2">
          <Field
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
          <label htmlFor="password">senha</label>
          <p className="text-danger m-0">
            <ErrorMessage name="password" />
          </p>
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
      </Form>
    </Formik>
  );
}
