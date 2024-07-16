import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Titlebreadcrums from "../components/Titlebreadcrums"
import DataTable from 'react-data-table-component'
import Swal from "sweetalert2"

const Registrados = () => {

    const handleDelete = (id) => {
        Swal.fire({
            title: "¿Deseas actualizar los datos del usuario?",
            showDenyButton: true,
            //showCancelButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No"
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    const [columnas, setColumnas] = useState([
        {
            name: 'Usuario',
            selector: row => row.user,
            sortable: true,
        },
        {
            name: 'Contraseña',
            selector: row => row.pass,
            sortable: true,
        },
        {
            button: true,
            center: true,
            cell: (row) => {
                    return (
                    <>
                        <div className="btn-group">
                            <button className="btn btn-xs btn-info" onClick={() => handleUpdate(row.id)} >
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button className="btn btn-xs btn-danger" onClick={() => handleDelete(row.id)} >
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
        //console.log(data);
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
                        responsive
                    />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Registrados

