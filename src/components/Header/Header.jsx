import React from 'react'
import { Link } from 'react-router-dom';
import '../Header/header.css'


    function Header (){

        return(

            <header className='navbar'>
                <Link to = '/'><img className='logo' src='/img/VIMoviesLogo.jpg' alt='img'/></Link> 
                    <ul>
                        <li> <Link  to = "/">Home</Link></li>
                        <li><Link to="/Favoritos"> Favorites </Link> </li>
                        <li> <Link  to = "/VerTodasPop">View All Popular</Link></li>
                        <li> <Link  to = "/VerTodasTop">View All Top Rated</Link></li>
                    </ul>
            </header>
        )



    }

export default Header;