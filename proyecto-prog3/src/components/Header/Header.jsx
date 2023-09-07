import React from 'react'
import { Link } from 'react-router-dom';
import '../Header/header.css'


    function Header (){

        return(

            <header className='navbar'>
                <Link to = '/'><img className='logo' src='../../assets/VIMoviesLogo.jpg' alt='img'/></Link> 
                    <ul>
                        <li> <Link exact={true} to = "/">Home</Link></li>
                        <li><Link to="/favorites"> Favorites </Link> </li>
                        <li> <Link exact={true} to = "/VerTodasPop">View All Popular</Link></li>
                        <li> <Link exact={true} to = "/VerTodasTop">View All Top Rated</Link></li>
                    </ul>
            </header>
        )



    }

export default Header;