import "./styles.scss"
export default function Cadastro(prop) {
  return(
    <div style={{backgroundColor: "#f6f4f3"}}  className="cadastro d-flex justify-content-center align-items-center w-50">
      {prop.children}
    </div>
  )
}