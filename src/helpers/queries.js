const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;
const URI_HABITACIONES= import.meta.env.VITE_API_HABITACIONES

/* //! Login 
const admin = {
    email: "admin@usuario.com",
    password: "A12345678a",
    rol: "Administrador"
  };
export const login = (usuario)=>{
    if(usuario.email === admin.email && usuario.password === admin.password){
        sessionStorage.setItem("inicioHotel", JSON.stringify(usuario.email))
        return true
    }else{
        return false
    };
} */

export const crearUsuario = async (usuario) => {
    try {
      const respuesta = await fetch(URI_USUARIOS +"/registrar"  , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

export const iniciarSesion = async(usuario) => {
  try {
    const respuesta = await fetch(URI_USUARIOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario),
    });
    return respuesta
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* //?Habitaciones */
export const leerHabitacionesAPI = async()=>{
  try {
    const respuesta = await fetch(URI_HABITACIONES)
    const listarHabitaciones = await respuesta.json()
    return listarHabitaciones
  } catch (error) {
    console.log(error)
  }
};

/* //?Usuarios */
export const leerUsuariosAPI = async()=>{
  try {
    const respuesta = await fetch(URI_USUARIOS)
    const listarUsuarios = await respuesta.json()
    return listarUsuarios
  } catch (error) {
    console.log(error)
  }
};