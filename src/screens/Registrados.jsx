import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Titlebreadcrums from "../components/Titlebreadcrums"
import DataTable from 'react-data-table-component'

const Registrados = () => {

    const [columnas, setColumnas] = useState([
        {
            name: 'Usuario',
            selector: row => row.user,
        },
        {
            name: 'Contraseña',
            selector: row => row.pass,
        },
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
                        selectableRows
                    />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Registrados