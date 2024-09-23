import React from 'react';
import { Birthdaycake1} from '../../assets';

function Header(){

    return(
        <header>
            <h1>Bakery App</h1>
            <nav>
                <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Cakes</a></li>
                   <li><a href="#">Contact Us</a></li>
                   <img src={Birthdaycake1} alt=""/>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header