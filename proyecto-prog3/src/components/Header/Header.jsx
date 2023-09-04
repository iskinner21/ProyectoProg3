import React from 'react'
import { Link } from 'react-router-dom';
import '../Header/header.css'


    function Header (){

        return(

            <header className='navbar'>
                <Link to = '/'><img className='logo' src='./assets/VIMoviesLogo.png' alt=''/></Link> 
                    <ul>
                        <li> <Link exact={true} to = "/">Home</Link></li>
                        
                        <li> <Link exact={true} to = "/VerMas">Ver Todas</Link></li>
                    </ul>
            </header>
        )



    }

export default Header;