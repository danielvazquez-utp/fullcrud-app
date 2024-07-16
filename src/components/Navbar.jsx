import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        navigate("/", {
            replace: true,
            state: {
              logeado: false,
            }
        });
    }

    const handleClick = (to) => {
        navigate(to, {
            replace: true,
            state: {
                logeado: true,
                id: state.id_usuario,
                usuario: state.usuario
            }
        });
    }

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
                            <button className="btn btn-xs" onClick={ () => handleClick("/formulario1") }>Formulario</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-xs" onClick={ () => handleClick("/registrados") }>Registrados</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-xs" onClick={ () => handleClick("/gestion") }>Gestión</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger btn-xs ml-2" onClick={ () => logout() }>Salir</button>
                        </li>
                    </ul>
                </div>

                  <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                      <li className="nav-item">
                        Bienvenido <strong>{ state.usuario }</strong>
                      </li>
                  </ul>

            </div>
        </nav>
    </>
  )
}

export default Navbar