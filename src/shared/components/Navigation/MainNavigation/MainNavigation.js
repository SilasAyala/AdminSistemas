import React from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader";

const MainNavigation = (props) => {
    return(
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span/>
                <span/>
                <span/>
            </button>

            <h1 className="main-navigation__title">
                <Link to="/"> Tu Gimnasio </Link>
            </h1>
            <div className='collapse navbar-collapse text-center' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link active'>
                                Acerca
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/servicios' className='nav-link active'>
                                Servicios
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contacto' className='nav-link active'>
                                Contacto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/registro' className='nav-link active'>
                                Registrate
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/" id="usuario"> <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="User"></img> </a>  
                        </li>
                    </ul>
                </div>
        </MainHeader>
    );
}

export default MainNavigation;