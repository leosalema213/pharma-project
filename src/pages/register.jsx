import Hero from ".././components/hero";
import Main from ".././components/main";
import RegisterForm from "../components/formulario/register";

export default function Register() {
  return (
    <>
      <Main>
        <Hero />
        <div
          id="cadastro"
          className="d-flex justify-content-center align-items-center"
        >
          <RegisterForm />
        </div>
      </Main>
    </>
  );
}
