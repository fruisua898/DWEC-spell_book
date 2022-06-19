import React from 'react';
import {auth} from '../firebase';
import {useNavigate} from "react-router-dom";


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
        {user === null? 
            (null
                ):(
            <button className="dark-grey"
            onClick={() => logout()}>
                Logout
                </button>
            )} 
        <h1>SpellBook</h1>
  

            
                {user === null? 
                (null
                    ):(
                <p>Bienvenido {user.email}</p>
                )}
            


        



    </header>
    )
}

export default Header
