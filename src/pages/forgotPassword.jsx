import Hero from ".././components/hero";
import Main from ".././components/main";
import RememberPassword from "../components/formulario/rememberPassword";

export default function FotgotPassword() {

  return (
    <>
      <Main>
        <Hero />
        <div
          id="cadastro"
          className="d-flex justify-content-center align-items-center"
        >
          <RememberPassword />
        </div>
      </Main>
    </>
  );
}
