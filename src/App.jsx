import Formulario from "./components/form"
import Hero from "./components/hero"
import Main from "./components/main"

function App() {
  return(
    <>
      <Main>
        <Hero/>
        <div className="d-flex justify-content-center w-50 bg-primary">
          <Formulario />
        </div>
      </Main>
    </>
  )
}

export default App
