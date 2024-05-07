
export default function Login(prop) {
  return(
      <form  className="w-100 p-4" action="">
        <h2 className="text-dark fw-bolder text-uppercase">Login</h2>
      <div className="form-floating mt-2 mb-2">
        <input type="text" id="user" className="form-control" required />
        <label htmlFor="user">usuário</label>
      </div> 
      <div className="form-floating">
        <input type="password" id="password" className="form-control" required />
        <label htmlFor="password">senha</label>
      </div> 
      <div className="d-flex justify-content-between align-items-center p-2">
      <div className="form-check ">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
        <label className="form-check-label" htmlFor="flexCheckDefault"> Remember me</label>
      </div>
      <a  href="#"  className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >
        esqueceu a senha?
      </a>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">
        Entrar
      </button>
      <p className="mt-4">
        Não tem uma conta?
        <a onClick={prop.singup} href="#" className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >
          Inscreva-se
        </a>
      </p> 
    </form>
  )
}