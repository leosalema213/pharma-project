import Hero from ".././components/hero"
import Main from ".././components/main"
import LoginForm from "../components/formulario/login"

export default function Login() {



  return(
    <>
      <Main>
        <Hero/>
          <div id="cadastro" className="d-flex justify-content-center align-items-center">
              <LoginForm />
          </div>
      </Main>
    </>
  )
}
