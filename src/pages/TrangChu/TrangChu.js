import React from 'react'
import Carousel1 from '../../components/carousel1/Carousel1';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Video1 from './video1.mp4';

export default function TrangChu() {
    return (
        <div className='main-trang-chu'>
            <Carousel1/>
            <Contact/>
            <Footer/>
        </div>
    )
}
