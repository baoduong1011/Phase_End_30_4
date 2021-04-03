import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/header.css'
export default function Header() {

    let taiKhoan = localStorage.getItem('taiKhoan');
    console.log(taiKhoan);

    return (
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.537)'}} className='main-header-web'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <h3>Studio Film</h3>
                    </div>
                    <div className='col-6'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul style={{color:'wheat'}} className="navbar-nav">
                                    <li className="nav-item active">
                                        <NavLink style={{color:'wheat'}} className="nav-link" to='/trangchu'>Trang chủ <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{color:'wheat'}} className="nav-link" to='/phímapchieu'>Phim mới</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{color:'wheat'}} className="nav-link" to='/dangnhap'>Đăng nhập</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{color:'wheat'}} className="nav-link" to='/dangky'>Đăng ký</NavLink>
                                    </li>
                                    <li className="nav-item nav-user">
                                        <a  style={{color:'wheat'}} className="nav-link" href="#"> <i class="fa fa-user"></i> {taiKhoan}</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
