export default function Main(prop) {
  return(
    <main className="d-flex justify-content-center vh-100 align-items-center">
      <div className="container d-flex shadow bg-white p-0">
        {prop.children}
      </div>
    </main>
  )
}