
export default function Formulario() {
  return(
      <form className="w-100 p-4" action="">
      <div className="form-floating">
        <input type="text" id="name" className="form-control" />
        <label htmlFor="name">Nome</label>
      </div> 
      <div className="form-floating mt-2 mb-2">
        <input type="text" id="user" className="form-control" />
        <label htmlFor="user">usuário</label>
      </div> 
      <div className="form-floating">
        <input type="email" id="confirm-email" className="form-control" />
        <label htmlFor="confirm-email">e-mail</label>
      </div> 
      <div className="form-floating mt-2 mb-2">
        <input type="email" id="name" className="form-control" />
        <label htmlFor="confirm-email">confirme seu e-mail</label>
      </div> 
      <div className="form-floating">
        <input type="password" id="password" className="form-control" />
        <label htmlFor="password">senha</label>
      </div> 
      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
        <label className="form-check-label" htmlFor="flexCheckDefault"> Remember me</label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">
        Sign in
      </button>
    </form>
  )
}