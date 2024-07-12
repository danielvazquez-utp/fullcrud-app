import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getUsuarioPyC } from "../utils/usuarios";
import Swal from 'sweetalert2';
import { fullcrudContext } from "../components/fullcrudContext";

const Login = () => {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const { setUsuario } = useContext( fullcrudContext )

  const handleAccess = async() => {
    console.log("Usuario:", user, "Contraseña:", pass)
    if (user!="" && pass!="") {
      const acceso = await getUsuarioPyC( user, pass )
      //console.log(acceso)
      if (acceso.status=="ok") {
        Swal.fire({
          icon: "success",
          title: acceso.msg,
          text: "Tus datos son correctos",
          timer: 1500,
        })
        setUsuario({
          "id_user": 1,
          "name": user,
        })
        window.location.href = "/formulario1"
      }
      if (acceso.status=="error"){
        Swal.fire({
          icon: "error",
          title: acceso.msg,
          text: "Tus datos son incorrectos",
          footer: 'Intentalo nuevamente'
        })
      }
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Error de acceso",
        text: "Ingresa usuario y contraseña",
        footer: '<a href="#">¿Deseas crear una cuenta?</a>'
      })
    }
  }

  useEffect(() => {
    
  }, []);

	return (
		<div class="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <b>Admin</b>LTE
          </div>
          <div className="card-body">
            <p className="login-box-msg">Ingresa tus datos para iniciar sesión</p>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="usuario" value={user} onChange={e => setUser(e.target.value)}  />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="contraseña" value={pass} onChange={e=>setPass(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button 
                  className="btn btn-danger btn-block"
                  onClick={() => handleAccess() }
                >Entrar</button>
              </div>
            </div>
            <hr />
            <p className="mt-3 mb-0 text-center">
              <a href="/nuevo" className="text-center">Crear una cuenta</a>
            </p>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Login;