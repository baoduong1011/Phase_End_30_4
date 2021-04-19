import React from 'react';
import './Footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Footer() {
    
    return (
        <div className='footer-main'>
            <ul>
                <li  className='one'><i class="fab fa-facebook-f"></i></li>
                <li className='two'><i class="fab fa-twitter"></i></li>
                <li className='three'><i class="fab fa-instagram"></i></li>
                <li className='four'><i class="fab fa-youtube"></i></li>
            </ul>
        </div>
    )
}
