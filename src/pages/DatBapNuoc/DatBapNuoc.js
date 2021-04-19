import React from 'react'
import { Redirect } from 'react-router'

export default function DatBapNuoc() {
    if(localStorage.getItem('taiKhoan')) {
        return (
            <div>
                
            </div>
        )
    }
    else {
        alert("Bạn hãy đăng nhập và đặt vé(*)")
        return <Redirect to='/dangnhap' />
    }
}
