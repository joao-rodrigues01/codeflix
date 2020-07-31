import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/imgs/logo1.png';
import './menu.css';
import Button from '../Button';


//import ButtonLink from './components/buttonlink';

function Menu() {
    return (
        <nav className="Menu">
                <Link to="/">     
                 <img src={logo} alt="Logo codeflix"/> 
                </Link>

                <Button as={Link} className="ButtonLink" to="/cadastro/video">
                    Novo vídeo
                </Button >

        </nav>
        
        
    );
}


export default Menu;