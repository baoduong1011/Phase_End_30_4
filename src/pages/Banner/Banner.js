import React, { useEffect } from 'react'
import './Banner.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
export default function Banner() {
    
    useEffect(() => {
        Aos.init({duration: 2000});
    },[])

    return (
        <div className='banner-main'>
           <div className='presume-main'>
           <div data-aos="fade-down " className='text'>
                <h2> C Y B E R S O F T <i class="fab fa-react"></i></h2>
            </div>
            <svg>
                <filter id='cybersoft'>
                    <feTurbulence id='turbulence' baseFrequency="0.1 0.1" numOctaves="2" seed="3">
                    <animate attributeName="baseFrequency" dur="10s" values="0.1 0.1; 0.12 0.2" repeatCount="indefinite"></animate>

                    </feTurbulence>
                        
                    <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
                </filter>
            </svg>
           </div>
        </div>
    )
}
