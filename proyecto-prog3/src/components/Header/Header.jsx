import React from 'react'
import { Link } from 'react-router-dom';
import '../Header/header.css'


    function Header (){

        return(

            <header className='navbar'>
                <Link to = '/'><img className='logo' src='/logofiz.png' alt=''/></Link> CAMBIAR EL SCR LOGO!!!!!
                    <ul>
                        <li> <Link exact={true} to = "/">Home</Link></li>
                        <li> <Link to = "/Favoritos">Favoritos</Link></li>
                        <li> <Link exact={true} to = "/VerMas">Ver Todas</Link></li>
                    </ul>
            </header>
        )



    }

export default Header;