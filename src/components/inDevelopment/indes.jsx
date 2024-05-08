import image from '/public/building-animate.svg'

export default function InDevelopment() {
  return(
    <div className="container">
      <div className="d-flex flex-column flex-md-row">
        <div className="col-12 col-md-8">
            <img src={image} alt="" />
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
          <h2>Página em desenvolvimento</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum, aut tempora ullam debitis quae quod molestiae consectetur possimus a ducimus magni officiis unde suscipit praesentium itaque explicabo, ipsam doloremque!</p>
        </div>
      </div>
  </div>
  )
}