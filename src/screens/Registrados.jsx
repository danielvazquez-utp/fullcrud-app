import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Titlebreadcrums from "../components/Titlebreadcrums"
import DataTable from 'react-data-table-component'
import Swal from "sweetalert2"
import { borrarUsuarioById } from "../utils/usuarios";

const Registrados = () => {

    const handledelete = (id) => {
        Swal.fire({
            title: "¿desea borrar el usuario?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No",
        }).then( async(result) => {
            if (result.isConfirmed) {
                const respuesta = await borrarUsuarioById(id);
                if (respuesta.status=="ok") {
                    Swal.fire(respuesta.msg, "", "success");
                }
                else{
                    Swal.fire(respuesta.msg, "", "warning");
                }

            } else if (result.isDenied) {
                Swal.fire("Acción cancelada", "", "info");
            }
        })
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
                            <button type="button" class="btn btn-warning" title="Editar usuario">
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button type="button" class="btn btn-danger" title="Borrar usuario" onClick={()=>handledelete(row.id)}>
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
            <Footer />
        </div>
    )
}

export default Registrados

