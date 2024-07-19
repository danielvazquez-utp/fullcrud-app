import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Titlebreadcrums from "../components/Titlebreadcrums"
import DataTable from 'react-data-table-component'
import Swal from "sweetalert2"
import { borrarUsuarioById, getUsuarioById, updateUsuario } from "../utils/usuarios";

const Registrados = () => {

    const [usuario, setUsuario] = useState("");
    const [passW, setPassW] = useState("");
    const [ide, setIde] = useState("");

    const handledelete = (id) => {
        //console.log("Id: ", id);
        Swal.fire({
            title: "¿desea borrar el usuario?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No",
        }).then( async(result) => {
            if (result.isConfirmed) {
                const respuesta = await borrarUsuarioById(id);
                //console.log(respuesta);
                if (respuesta.status=="ok") {
                    Swal.fire(respuesta.msg, "", "success");
                    getUsuarios();
                }
                else{
                    Swal.fire(respuesta.msg, "", "warning");
                }
            } else if (result.isDenied) {
                Swal.fire("Acción cancelada", "", "info");
            }
        })
    }

    const handleUpdate = async(id) => {
        const respuesta = await getUsuarioById(id);
        console.log(respuesta);
        if (respuesta.status=="ok") {
            setIde(respuesta.data.id_usuario);
            setUsuario(respuesta.data.usuario);
            setPassW(respuesta.data.contrasena);
        }
        else{
            Swal.fire(respuesta.msg, "", "warning");
        }
    }

    const handleConfirmUpdate = async () => {
        const respuesta = await updateUsuario(ide, usuario, passW);
        if (respuesta.status=="ok") {
            Swal.fire(respuesta.msg, "", "success");
        }
        else{
            Swal.fire(respuesta.msg, "", "warning");
        }
    }

    const [columnas, setColumnas] = useState([
        {
            name: 'Usuario',
            selector: row => row.user,
        },
        {
            name: 'Contraseña',
            selector: row => row.pass,
        },
        {
            button: true,
            cell: (row) => {
                return (
                    <>
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-update" title="Editar usuario" onClick={()=>handleUpdate(row.id)}>
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button type="button" className="btn btn-danger" title="Borrar usuario" onClick={()=>handledelete(row.id)}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </>
                )
            }
        }
    ]);

    const [datos, setDatos] = useState([
        {
          id: 1,
          user: 'Beetlejuice',
          pass: '1988',
        },
        {
            id: 2,
            user: 'Ghostbusters',
            pass: '1984',
        },
    ]);

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
        const { data } = response;
        console.log(data);
        let datos_usuarios = []
        data.map( e => {
            const user = {
                id: e.id_usuario,
                user: e.usuario,
                pass: e.contrasena
            }
            datos_usuarios.push(user)
        })
        setDatos(datos_usuarios)
    }
    
    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <div className='layout-top-nav'>
            <Navbar />
            <div className="content-wrapper m-0">

                <Titlebreadcrums
                    title='Usuarios registrados'
                    breadcrums={["Usuarios", "Registrados"]}
                    subtitle='' />

                <div className="content">
                    <div className="container">

                    <DataTable
                        columns={columnas}
                        data={datos}
                        pagination
                        resposive
                    />

                    </div>
                </div>
            </div>

            <div className="modal fade" id="modal-update" style={{ display: "None" }} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Actualizar datos del usuario</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Id</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control-plaintext" value={ ide } />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Usuario</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control-plaintext" value={ usuario } onChange={ (e)=> setUsuario( e.target.value ) } required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control-plaintext" value={ passW } onChange={ (e)=>setPassW( e.target.value ) } required />
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={()=>handleConfirmUpdate()} >Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Registrados

