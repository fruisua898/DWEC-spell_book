import React from 'react';
import {auth} from '../firebase';
import {
    BrowserRouter as Router,
    Navigate,
    useNavigate,
    Routes,
    Route,
    Link
  } from "react-router-dom";


const Header = (props) => {


    const user = props.firebaseUser;
    const navigate = useNavigate();

    const logout = () => {
        auth.signOut()
            .then(()=> {
                navigate("/login");
            })
    }

    return (

        

    <header>
        <h1>SpellBook</h1>
        <span>   
                    
                {user === null? 
                (null
                    ):(
                <button className="logout"
                onClick={() => logout()}>
                    Cerrar Sesión
                    </button>
                )}
            

        </span>
        



    </header>
    )
}

export default Header
