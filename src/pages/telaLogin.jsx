import Hero from ".././components/hero"
import Main from ".././components/main"
import RegisterForm from "../components/formulario/register"
import LoginForm from "../components/formulario/login"
import { useState } from "react"

export default function TelaLogin() {

  const [isRegistering, setIsRegistering] = useState(false);

  return(
    <>
      <Main>
        <Hero/>
        <div id="cadastro" className="d-flex justify-content-center align-items-center">
          {isRegistering == true ? (
            <RegisterForm signIn={() => setIsRegistering(false)} />
          ):(
            <LoginForm signUp={() => setIsRegistering(true)} />
          )}
        </div>
      </Main>
    </>
  )
}
