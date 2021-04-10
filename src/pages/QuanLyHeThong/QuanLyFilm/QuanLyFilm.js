import React from 'react'
import { Redirect } from 'react-router';

export default function QuanLyFilm() {
    let maLoaiNguoiDung = localStorage.getItem('maLoaiNguoiDung');
    

    if( localStorage.getItem('taiKhoan') && maLoaiNguoiDung === "QuanTri") {
        return (
            <div>
                FILM
            </div>
        )
    }
    else {
        alert('Bạn không có quyền truy cập vào hệ thống (*)');
        return <Redirect to='/trangchu' />
    }
}
