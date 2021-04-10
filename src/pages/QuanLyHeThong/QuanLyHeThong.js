import { animated, useSpring } from '@react-spring/web';
import React from 'react'
import { BrowserRouter, Link, NavLink, Redirect, Route, Router, Switch } from 'react-router-dom'
import './css/QuanLyHeThong.css';
import QuanLyFilm from './QuanLyFilm/QuanLyFilm';
import QuanLyUser from './QuanLyUser/QuanLyUser';
export default function QuanLyHeThong() {

    const propsAnimtion1 = useSpring({
        opacity:1,
        from: {
            opacity:0
        },
        config: {
            duration:3000
        }
      })
      

      let maLoaiNguoiDung = localStorage.getItem('maLoaiNguoiDung');

      if( localStorage.getItem('taiKhoan') && maLoaiNguoiDung === "QuanTri") {
        return (
            <animated.div style={propsAnimtion1} className='quan-ly-he-thong-main'>
              <div className='container-fluid'>
                    <div className='row'>
                    <BrowserRouter>
                        <div className='col-2'>
                            <NavLink className='link' to='/quanlyfilm'>Quản lý Film</NavLink>
                            <br/>
                            <NavLink className='link' to='/quanlyuser'>Quản lý User</NavLink>
                        </div>
    
                        <div className='col-10'>
                            <Switch>
                            <Route exact path='/quanlyuser' component={QuanLyUser} />
                            <Route exact path='/quanlyfilm' component={QuanLyFilm} />
                            </Switch>
                        </div>
    
                    </BrowserRouter>
                    </div>
              </div>
            </animated.div>
        )
    }
    else {
        alert('Bạn không có quyền truy cập vào hệ thống (*)');
        return <Redirect to='/trangchu' />
    }
}
