export const getUsuarios = async() => {
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
    return response;
}

export const setUsuario = async(user, pass) => {
    const url = "http://127.0.0.1:8080/usuarios";
    const request = await fetch(url, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      body: JSON.stringify({
        "usuario": user,
        "contrasena": pass
      })
    });
    const response = await request.json();
    return response;
}

export const getUsuarioPyC = async(user, pass) => {
    const url = "http://127.0.0.1:8080/usuarioByUC";
    const request = await fetch(url, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      body: JSON.stringify({
        "usuario": user,
        "contrasena": pass
      })
    });
    const response = await request.json();
    return response;
}