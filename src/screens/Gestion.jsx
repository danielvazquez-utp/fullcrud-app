import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Titlebreadcrums from "../components/Titlebreadcrums"
import { Link } from "react-router-dom"

const Gestion = () => {
    return (
        <div className='layout-top-nav'>
            <Navbar />
            <div className="content-wrapper m-0">
                <Titlebreadcrums
                    title='Gestión de usuarios'
                    breadcrums={["Usuarios", "Gestión"]}
                    subtitle='' />

                <div className="content">
                    <div className="container">

                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h4 className="card-title">
                                    <i className="fas fa-user"></i>
                                    Usuarios registrados
                                </h4>
                            </div>
                            <div className="card-body">

                            </div>
                            <div className="card-footer">
                                <Link to="/formulario1" className="btn btn-primary">Regresar</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Gestion