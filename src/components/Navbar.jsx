import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white m-0">
            <div className="container">
                <Link to="/formulario1" className="navbar-brand">
                    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-1" style={{ opacity: "0.8", width:"30px", marginRight:"20px" }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </Link>

                <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/formulario1" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registrados" className="nav-link">Registrados</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gestion" className="nav-link">Gestión</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </>
  )
}

export default Navbar