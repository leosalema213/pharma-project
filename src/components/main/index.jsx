export default function Main(prop) {
  return(
    <main className="d-flex flex-column justify-content-center vh-100 w-100 align-items-center">
      <div className="container d-flex flex-column flex-md-row shadow bg-white p-0">
        {prop.children}
      </div>
    </main>
  )
}