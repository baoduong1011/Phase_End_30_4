import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Contact() {
    const dispatch = useDispatch();
    useEffect(() => {
        Aos.init({duration: 2000});
    },[])
    const [state,setState] = useState({
        values:{
            hoTen:'',
            email:'',
            danhGia:''
        },
        errors:{
            hoTen:'',
            email:'',
            danhGia:''
        },
        valid: false
    })

    let handleChange = (e) => {
        let {name,value} = e.target;
        let errorMessage = "";
        if(value.trim() === "") {
            if(name === 'hoTen') {
                errorMessage = 'Họ tên không được bỏ trống (*)';
            }
            if(name === 'email') {
                errorMessage = 'Email không được bỏ trống (*)';
            }
            if(name === 'danhGia') {
                errorMessage = 'Đánh giá không được bỏ trống (*)';
            }
        }

        let newValues = {...state.values,[name]: value};
        let newErrors = {...state.errors,[name]:errorMessage};
        setState({
            ...state,
            values: newValues,
            errors: newErrors
        })
    }

    let checkValid = () => {
        let valid = true;
        for(let key in state.errors) {
            if(state.errors[key] !== "" || state.values[key] === "") {
                valid = false;
            }
        }
        setState({...state,valid: valid});
    }

    useEffect(() => {
        checkValid();
    },[state.errors]);

    return (
        <div className='main-contact'>
            <section className='contact'>
                <div className='content'>
                    <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    <p>FILM STUDIO rất hân hạnh được đón tiếp quý khách! Hãy liên hệ với chúng tôi, chúng tôi luôn lắng nghe và đồng cảm với các bạn!</p>
                </div>
                <div className='containerr'>
                    <div data-aos="zoom-in-up" className='contactInfo'>
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
                    <div  className='contactForm'>
                     <form >
                            <h2 className='text-center'>CHO TÔI BIẾT CẢM NHẬN </h2>
                            <div className='inputBox'>
                                <input onChange={handleChange} type='text' name='hoTen' required='required' />
                                <span>Tên của bạn: </span>
                                <p className='text-center text-danger'>{state.errors.hoTen}</p>
                            </div>

                            <div className='inputBox'>
                                <input onChange={handleChange} type='text' name='email' required='required' />
                                <span>Email: </span>
                                <p className='text-center text-danger'>{state.errors.email}</p>
                            </div>

                            <div className='inputBox'>
                                <textarea onChange={handleChange} type='text' name='danhGia' required='required' />
                                <span>Đánh giá:  </span>
                                <p className='text-center text-danger'>{state.errors.danhGia}</p>
                            </div>

                            <div className='inputBox text-center'>
                                {state.valid ? <button className='btn btn-info' onClick={() => {
                                    dispatch({
                                        type:'CONTACT_REDUCER',
                                        data: state.values
                                    })
                                    alert("Cám ơn bạn đã nhận xét");
                                    
                                }}>Send</button> : <button className='btn btn-info' disabled style={{cursor:'not-allowed'}}>Send</button>}
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}
