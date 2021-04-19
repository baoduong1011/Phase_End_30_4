import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './css/header.css'
import swal from 'sweetalert';
export default function Header() {

    let flag = false;
    if(localStorage.getItem('taiKhoan')) {
        flag = true;
    }

    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.537)' }} className='main-header-web'>
            <nav>
                <label className='logo'><i class="fa fa-film"></i> Studio Film</label>
                <ul className='ulHeader'>
                    <li className="navitem active">
                        <NavLink className="navlink" to='/trangchu'>Trang chủ</NavLink>
                    </li>
                    <li className="navitem">
                        <NavLink className="navlink" to='/khuyenmai'>Khuyến mãi</NavLink>
                    </li>
                    <li className="navitem">
                        <NavLink className="navlink" to='/dangnhap'>Đăng nhập</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navlink" to='/dangky'>Đăng ký</NavLink>
                    </li>
                    <li className="navitem nav-user">
                        <a  className="nav-link" href="#"> <i class="fa fa-user"></i> {localStorage.getItem('taiKhoan')} - {flag ? <span onClick={() => {
                            localStorage.clear();
                            
                            swal({
                                title: "Đăng xuất thành công!",
                                text: "Cám ơn bạn đã luôn đồng hành cùng Film Studio",
                                icon: "success",
                                button: "OK",
                            })
                            setTimeout(function() {
                                window.location.replace('/trangchu');
                            },2500)
                        }}> <i class="fa fa-sign-out-alt"></i> </span> : <span></span>} </a>
                    </li>

                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                    </div>
                </ul>
                <label id='icon'>
                    <i class="fa fa-bars"></i>
                </label>
            </nav>
        </div>
    )
}
