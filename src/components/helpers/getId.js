const { jwtDecode } = require("jwt-decode");

function getId(){
    const token = localStorage.getItem("token")
    if(token){
        const decodedToken = jwtDecode(token)
        const id = decodedToken.id_usuario
        return id
    } else {
        console.error("No ha iniciado sesión")
    }
}

export {getId}

