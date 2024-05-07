
export default function Main(prop) {
  return(
    <main className="d-flex justify-content-center vh-100 align-items-center">
      <div className="container d-flex">
        {prop.children}
      </div>
    </main>
  )
}