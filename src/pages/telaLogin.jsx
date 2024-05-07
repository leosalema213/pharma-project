import Cadastro from ".././components/cadastro"
import Hero from ".././components/hero"
import Main from ".././components/main"
import Formulario from ".././components/form"
import Login from ".././components/login"
import { useState } from "react"

export default function TelaLogin() {

  const [isRegistering, setIsRegistering] = useState(false);

  return(
    <>
      <Main>
        <Hero/>
        <Cadastro> 
        {isRegistering == true ? (
           <Formulario singin={() => setIsRegistering(false)} />
        ):(
          <Login singup={() => setIsRegistering(true)} />
        )}
        </Cadastro> 
       
      </Main>
    </>
  )
}
