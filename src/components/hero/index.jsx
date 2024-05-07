import logo from "../../../public/logo.png"
import animation from "../../../public/pharmacist-animate.svg"
export default function Hero() {
  return(
    <div className="w-50 p-4">
     <div>
        <h1>
          <img  src={logo} alt="" />
        </h1>
        <p className="ms-5">Sua farmácia de confiança</p>
     </div>
      <img className="animate" src={animation} alt="" />
    </div>
  )
}