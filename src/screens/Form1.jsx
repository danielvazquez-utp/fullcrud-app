import { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Titlebreadcrums from '../components/Titlebreadcrums';
import Swal from 'sweetalert2';
import { fullcrudContext } from "../components/fullcrudContext";
import { useLocation } from 'react-router-dom';

const Form1 = () => {

    const { state } = useLocation();
    const [nombre, setNombre] = useState('');
    const [apaterno, setApaterno] = useState('');
    const [amaterno, setAmaterno] = useState('');
    const [fnac, setFnac] = useState('');
    const [edocivil, setEdocivil] = useState('Soltero');
    const [hijos, setHijos] = useState("No");
    const [nohijos, setNohijos] = useState(0);
    const [otroedo, setOtroedo] = useState('');
    //const { usuario } = useContext( fullcrudContext );
    //console.log(usuario);
    

    const setPersona = async() => {
      const url = "http://127.0.0.1:8080/personas";
      const request = await fetch(url, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }),
        body: JSON.stringify({
          "nombres": nombre,
          "apellidoP": apaterno,
          "apellidoM": amaterno,
          "fechaNac": fnac,
          "estadoCivil": edocivil,
          "numhijos": nohijos
        })
      });
      const response = await request.json();
      console.log(response);
      //alert(response.msg);
      Swal.fire({
        title: "Mensaje",
        text: response.msg,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }

    

  return (
    <div className='layout-top-nav'>
          <Navbar />

          <div className="content-wrapper m-0">

              <Titlebreadcrums 
              title='Agregar usuarios' 
              breadcrums={["Usuarios", "Agregar"]} 
              subtitle='' />

              <div className="content">
                  <div className="container">
                      
                      <div className="row">
                          <div className="col-lg-6">

                              <div className="card card-primary card-outline">
                                  <div className="card-header">
                                      <h5 className="card-title">Datos personales</h5>
                                  </div>
                                  <div className="card-body">
                                      <div className="form-group">
                                        <label>Nombre(s)</label>
                                        <input type="text" className="form-control" placeholder="Juan Carlos" value={ nombre } onChange={ e => setNombre(e.target.value) } />
                                      </div>
                                      <div className="form-group">
                                        <label>Apellido Paterno</label>
                                        <input type="text" className="form-control" placeholder="Sosa" value={ apaterno } onChange={ e => setApaterno( e.target.value ) } />
                                      </div>
                                      <div className="form-group">
                                        <label>Apellido Materno</label>
                                        <input type="text" className="form-control" placeholder="López" value={ amaterno } onChange={ e => setAmaterno( e.target.value ) } />
                                      </div>
                                      <div className="form-group">
                                        <label>Fecha de nacimiento</label>
                                        <input type="date" className="form-control" value={ fnac } onChange={  e => setFnac( e.target.value ) } />
                                      </div>
                                      <div className="form-group">
                                        <label>Estado civil ({ edocivil })</label>
                                        <div className="form-check">
                                          <input type="radio" className="form-check-input" name="civil" value="Soltero" checked={ edocivil === "Soltero" } onChange={ e => setEdocivil(e.target.value)} />
                                          <label className="form-check-label">
                                            Soltero(a)
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input type="radio" className="form-check-input" name="civil" value="Casado" checked={ edocivil === "Casado" } onChange={ e => setEdocivil(e.target.value)} />
                                          <label className="form-check-label">
                                            Casado(a)
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input type="radio" className="form-check-input" name="civil" value="Divorciado" checked={ edocivil === "Divorciado" } onChange={ e => setEdocivil(e.target.value)} />
                                          <label className="form-check-label">
                                            Divorciado(a)
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input type="radio" className="form-check-input" name="civil" value="Otro" checked={ edocivil === "Otro" } onChange={ e => setEdocivil(e.target.value)} />
                                          <label className="form-check-label">
                                            Otro
                                          </label>
                                        </div>
                                      </div>

                                      {
                                        edocivil==="Otro" && (
                                          <div className="form-group">
                                            <label>¿Cuál?</label>
                                            <input type="text" className="form-control" placeholder="López" value={ otroedo } onChange={ e => setOtroedo( e.target.value )} />
                                          </div>    
                                        )  
                                      }

                                      <div className="form-group">
                                        <label>¿Tienes hijos?</label>

                                        <div className="form-check">
                                          <input type="radio" className="form-check-input" name="hijos" value="Si" checked={ hijos === "Si" } onChange={ e => setHijos(e.target.value)} />
                                          <label className="form-check-label">
                                            Si
                                          </label>
                                        </div>

                                        <div className="form-check">
                                          <input type="radio" className="form-check-input" name="hijos" value="No" checked={ hijos === "No" } onChange={ e => setHijos(e.target.value)} />
                                          <label className="form-check-label">
                                            No
                                          </label>
                                        </div>
                                      </div>


                                      {
                                        hijos === "Si" && (
                                          <div className="form-group">
                                            <label>No. de hijos</label>
                                            <input type="number" className="form-control" placeholder="0" value={ nohijos } onChange={ e => setNohijos( e.target.value )} />
                                          </div>      
                                        )
                                      }
                                      
                                      
                                  </div>
                                  <div className='card-footer'>
                                    <button className='btn btn-primary' onClick={() => setPersona() }>Agregar</button>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="col-lg-6">
                              <div className="card">
                                  <div className="card-header">
                                      <h5 className="card-title m-0">Usuario</h5>
                                  </div>
                                  <div className="card-body">
                                      <h6 className="card-title">Nombre: { state?.usuario } </h6>
                           
                                  </div>
                              </div>

                              <div className="card card-primary card-outline">
                                  <div className="card-header">
                                      <h5 className="card-title m-0">Featured</h5>
                                  </div>
                                  <div className="card-body">
                                      <h6 className="card-title">Special title treatment</h6>

                                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                      <a href="#" className="btn btn-primary">Go somewhere</a>
                                  </div>
                              </div>
                          </div>
                          
                      </div>

                      <div className="modal fade" id="modal-default" style={{ display: "None" }} aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title">Default Modal</h4>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>One fine body…</p>
                            </div>
                            <div className="modal-footer justify-content-between">
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                  </div>
              </div>
          </div>

          <Footer />
    </div>
  )
}

export default Form1