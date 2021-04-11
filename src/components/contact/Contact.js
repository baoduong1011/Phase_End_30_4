import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className='main-contact'>
            <section className='contact'>
                <div className='content'>
                    <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    <p>FILM STUDIO rất hân hạnh được đón tiếp quý khách! Hãy liên hệ với chúng tôi, chúng tôi luôn lắng nghe và đồng cảm với các bạn!</p>
                </div>
                <div className='containerr'>
                    <div className='contactInfo'>
                        <div className='box'>
                            <div className='icon'><i class="fa fa-map-marker-alt"></i></div>
                            <div className='text'>
                                <h3>Địa chỉ</h3>
                                <p>KTX Khu B - Làng đại học quốc gia Thành phố Hồ Chí Minh , Dĩ An - - Bình Dương </p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'><i class="fa fa-at"></i></div>
                            <div className='text'>
                                <h3>Email</h3>
                                <p>baoduong101110@gmail.com</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'><i class="fa fa-phone"></i></div>
                            <div className='text'>
                                <h3>Cybersoft</h3>
                                <p>985-551-3866</p>
                            </div>
                        </div>
                    </div>
                    <div className='contactForm'>
                     <form>
                            <h2 className='text-center'>CHO TÔI BIẾT CẢM NHẬN </h2>
                            <div className='inputBox'>
                                <input type='text' name='' required='required' />
                                <span>Tên của bạn: </span>
                            </div>

                            <div className='inputBox'>
                                <input type='text' name='' required='required' />
                                <span>Email: </span>
                            </div>

                            <div className='inputBox'>
                                <textarea type='text' name='' required='required' />
                                <span>Đánh giá:  </span>
                            </div>

                            <div className='inputBox text-center'>
                                <input type='submit' name="" value="Send" />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}
