import Header from "../components/header";
import ManageUsers from "../components/manageUsers";
import UserTable from "../components/userTable";
import Footer from "../components/footer";


export default function Users() {


  return(
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ManageUsers />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
              <UserTable />          
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
