import React from 'react';
import logo from '../../assets/imgs/logo1.png';
import './menu.css';
import Button from '../Button';


//import ButtonLink from './components/buttonlink';

function Menu() {
    return (
        <nav className="Menu">
                <a href="/">     
                 <img src={logo} alt="Logo codeflix"/> 
                </a>

                <Button as="a" className="ButtonLink" href="/">
                    Novo vídeo
                </Button >

        </nav>
        
        
    );
}


export default Menu;