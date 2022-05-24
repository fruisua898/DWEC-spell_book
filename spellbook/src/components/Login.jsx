import React from 'react'

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [error, setError] = React. useState(null);
    const [esRegistro, setEsRegistro] = React.useState(false)

    const datosForm = e => {
        e.preventDefault();
        if (!email.trim()) {
            setError("Email vacio");
        }
        if (!pass.trim() && pass.length() < 6 && pass.test("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$")){
            setError("La contraseña debe tener 6 caracteres o más, al menos un número y una letra.");
        }

    }

  return (
    <div className="mt-5">
    <h3 className="text-center">
    { 
      esRegistro? "Registro":"Login"
    }
    </h3>
    <hr/>
    <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
         <form onsubmit={datosForm}>

           <input 
                type="email" 
                className="form-control mb-2"
                placeholder="Introduce el email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <input 
                type="password" 
                className="form-control mb-2"
                placeholder="Introduce el password"
                onChange={e => setPass(e.target.value)}
                value={pass}

            />
            <button 
                className="btn btn-lg btn-dark w-100 mb-2"
            >     
             Registrarse
            </button>
            <button 
                className="btn btn-sm btn-info w-100 mb-2"
                type="button"
                onClick={() => setEsRegistro(!esRegistro)}
            >            
              { 
              esRegistro? " Ya tengo cuenta":"Deseo registrarme"
              }
            </button>

        </form>   
        </div>
    </div>
</div>
  )
            }
export default Login