import logo from "/public/logo.png"
import animation from "/public/pharmacist-animate.svg"

import "./styles.scss"

export default function Hero() {
  return(
    <div className="hero p-4 w-50 d-flex d-md-block justify-content-center">

      <div>
        <h1>
          <img src={logo} alt="" />
        </h1>
        <p className="ps-5 w-100 d-none d-md-block">Sua farmácia de confiança</p>
      </div>

      <img className="d-none d-md-block" src={animation} alt="" />
      
    </div>
  )
}