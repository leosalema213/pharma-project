import "./styles.scss"
export default function Cadastro(prop) {
  return(
    <div className="cadastro d-flex justify-content-center align-items-center">
      {prop.children}
    </div>
  )
}