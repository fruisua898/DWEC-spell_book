import React from 'react'
import {auth, db} from '../firebase'
import {Navigate, useNavigate} from 'react-router-dom'
import { useCallback } from 'react';

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [error, setError] = React. useState(null);
    const [esRegistro, setEsRegistro] = React.useState(false)
    const navigate = useNavigate();

    const checkForm = e => {
        e.preventDefault();
        if (!email.trim()) {
            setError("Email vacio");
        }
        if (!pass.trim() && pass.length() < 6 && pass.test("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$")){
            setError("La contraseña debe tener 6 caracteres o más, al menos un número y una letra.");
        }

        setError(null)

        if (esRegistro){
            registro()
        }else{
            login()
        }
    }

    /* En la misma documentación de firebase venía una forma por defecto de hacerlo
    pero como hablamos en clase de hacerlo con callback he decidido basarme en el
    mismo formato que en el de registro. */

    const login = useCallback(async () => {
        try {
            
            const res = await auth.signInWithEmailAndPassword(email, pass)
            setEmail("")
            setPass("")
            setError("")
            navigate("/home");
        } catch (error) {
           if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password"){
                setError("Usuario o contraseña no válidos"); 
           }

        }
        
    }) 

    
    const registro = useCallback(async () => {
        try {
            
            var res = await auth.createUserWithEmailAndPassword(email, pass) 
            // crear la colección de firebase  user y hechizos  
            await db.collection('user_info').doc(email).set({
                nickname: "Test",
                email:res.user.email,

                uid:res.user.uid,
                registrado:Date.now()
              })
              await db.collection('hechizos').doc(res.email).set({
                nombre: "",
                rango:"",
                nivel: 0,
                escuela: "",
                owner: {
                        id:res.user.uid,
                        email:res.user.email
                        }
                
              })
            setEmail("")
            setPass("")
            setError(null)
            navigate("/home");
            
        } catch (error) {

            if (error.code === "auth/invalid-email"){
                setError("Email no válido");   
            }

            else if (error.code === "auth/weak-password"){
                setError("Contraseña débil"); 
            }

            else if (error.code === "auth/email-already-in-use"){
                setError("Email en uso");
            }

        }
    }) 

  return (

    <div>
            
            <hr/>
            <div className="form-content">
                <div className="form-content2">
                    <form class="form-login" onSubmit={checkForm}>
                    <h3 className="form-title">
            { esRegistro? "Registro":"Login"}
            </h3>
                        { 
                        error && ( <div className='alert alert-danger'>
                                {error}
                        </div> )
                            } 

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
                        { esRegistro? "Registrarse":"Login" }
                        </button>
               

                        <button 
                            className="btn btn-sm btn-info w-100 mb-2"
                            type="button"
                            onClick={() => setEsRegistro(!esRegistro)}
                        >            
                            { esRegistro? " Ya tengo cuenta":"Deseo registrarme" }
                        </button>

                    </form>   
                </div>
            </div>
        </div>
        )
    }
export default Login