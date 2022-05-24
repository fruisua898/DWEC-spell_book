import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

    const navigate = useNavigate();

  return (
    <div className="navbar navbar-dark bg-dark mt-5">
        <Link className="navbar-brand mx-3">AUTH</Link>
        <div>
            <div className='d-flex'>
                <NavLink className="btn btn-dark mr-2">
                    Inicio
                </NavLink>
                   
                    <NavLink className="btn btn-dark mr-2">
                        Home
                    </NavLink>

                        <button 
                            className="btn btn-dark"
                        >
                            Cerrar Sesión
                        </button>

                    <NavLink className="btn btn-dark mr-2">
                        Login
                    </NavLink>

            </div>
        </div>
    </div>
  )
}

export default Navbar