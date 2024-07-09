import { Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

  const getUsuarios = async() => {
    const url = "http://127.0.0.1:8080/usuarios";
    const request = await fetch(url, {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    });
    //console.log(request);
    const response = await request.json();
    console.log(response);
  }

  const setUsuario = async() => {
    const url = "http://127.0.0.1:8080/usuarios";
    const request = await fetch(url, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      body: JSON.stringify({
        "usuario": "Jerónimo",
        "contrasena": "qwe245345"
      })
    });
    const response = await request.json();
    console.log(response);
  }

  useEffect(() => {
    getUsuarios();
  }, []);

	return (
		<div class="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <b>Admin</b>LTE
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="col-4">
                <Link to="/formulario1" className="btn btn-primary btn-block">Sign In</Link>
              </div>
            </div>

            <div className="social-auth-links text-center mt-2 mb-3">
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger" onClick={ () => setUsuario() }>
                <i className="fab fa-google-plus mr-2"></i> Add user
              </a>
            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">Register a new membership</a>
            </p>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Login;