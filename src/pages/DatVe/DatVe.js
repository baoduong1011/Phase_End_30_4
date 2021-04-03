import React from 'react'
import { Redirect } from 'react-router';

export default function DatVe() {
   if(localStorage.getItem('taiKhoan')) {
    return (
        <div>
            Đặt vé
        </div>
    )
   }
   else {
       alert("Hãy đăng nhập để đặt vé (*)");
        return <Redirect to='/dangnhap' />
   }
}
