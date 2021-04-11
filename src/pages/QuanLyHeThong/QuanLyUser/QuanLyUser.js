import { useSpring, animated } from 'react-spring'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import './QuanLyUser.css';
import { capNhatNguoiDung, layDanhSachNguoiDung, themNguoiDung, xoaNguoiDung } from '../../../services/service';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function QuanLyUser(props) {

    let maLoaiNguoiDung = localStorage.getItem('maLoaiNguoiDung');

    const [userRegister, setUserRegister] = useState({
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: "GP01",
            maLoaiNguoiDung: '',
            hoTen: ''
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            maLoaiNguoiDung: '',
            hoTen: ''
        },
        valid: false,
        danhSachNguoiDung:[],
        flag:0
    })

    let submit = (data) => {
        let promise = Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            data: data,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        });
        promise.then(res => {
            alert('Thêm thành công');
            window.location.reload();

        })
        promise.catch(err => {
            alert(err.response.data);
        })
    }

    let deleteUser = (taiKhoan) => {
        let promise = Axios({
            method:'DELETE',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })

        promise.then(res => {
            console.log(res.data);
        })

        promise.catch(err => {
            console.log(err.response.data);
        })
    }

    let handleChange = (e) => {
        let { name, value, type } = e.target;
        let errorMessage = '';
        if (type === 'email') {
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (!regex.test(value)) {
                errorMessage = 'Email' + ' không đúng định dạng';
            }
        }

        if (name === 'soDt') {
            const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (!regex.test(value)) {
                errorMessage = 'Số Điện Thoại' + ' không đúng định dạng số'
            }
        }

        if (value.trim() === '') {
            if (name === 'hoTen') {
                errorMessage = 'Họ tên không được để trống (*)';
            }
            if (name === 'taiKhoan') {
                errorMessage = 'Tài khoản không được để trống (*)';
            }
            if (name === 'matKhau') {
                errorMessage = 'Mật khẩu không được để trống (*)';
            }
            if (name === 'maLoaiNguoiDung') {
                errorMessage = 'Mã loại người dùng không được để trống (*)';
            }
            if (name === 'soDt') {
                errorMessage = 'Số điện thoại không được để trống (*)';
            }
            if (name === 'email') {
                errorMessage = 'Email không được để trống (*)';
            }

        }

        let values = { ...userRegister.values, [name]: value };
        let errors = { ...userRegister.errors, [name]: errorMessage };

        setUserRegister({
            ...userRegister,
            values: values,
            errors: errors
        })
    }

    let checkValid = () => {
        let valid = true;
        for(let key in userRegister.errors) {
            if(userRegister.errors[key] !== "" || userRegister.values[key] === '') {
                valid = false;
            }
        }
        setUserRegister({...userRegister,valid:valid});
    }

    useEffect(() => {
        checkValid();
    }, [userRegister.errors]);

    let handleSubmit = (e) => {
        console.log(userRegister.values);
        submit(userRegister.values);
      }

    useEffect(() => {
        layDanhSachNguoiDung.LoadDanhSachNguoiDung().then(res => {
            setUserRegister({...userRegister,danhSachNguoiDung: res.data})
        })
        .catch(err => {
            alert(err.response.data);
        })
    },[]) 

    let dispatch = useDispatch();

    let user = useSelector( state => state.UserReducer.user);

    useEffect(() => {
        setUserRegister({...userRegister,values: user})
    },[userRegister.flag])

    let renderDanhSachNguoiDung = () => {
        return userRegister.danhSachNguoiDung.map((user,index) => {
            return <tr className='text-light' key={index}>
                <td>{index+1}</td>
                <td>{user.taiKhoan}</td>
                <td>{user.maLoaiNguoiDung}</td>
                <td><button onClick={() => {
                        dispatch({
                            type:'CHINH_SUA_USER',
                            userEdit: user
                        })
                        let newFlag = userRegister.flag + 1;
                        setUserRegister({...userRegister,flag: newFlag });
                }} className='btn btn-info'>Sửa</button></td>
                <td><button onClick={() => {
                    xoaNguoiDung.Xoa(user.taiKhoan).then(res => {
                        alert(res.data);
                        window.location.reload();
                    })
                    .catch(err => {
                        alert(err.response.data);
                    })
                }} className='btn btn-danger'>Xóa</button></td>
            </tr>
        })
    }

    console.log('edit: ',userRegister.values)

    if (localStorage.getItem('taiKhoan') && maLoaiNguoiDung === "QuanTri") {
        return (
            <div className='body-quan-ly-user'>
                <div className='main-quan-ly-user'>
                    <div className='quan-ly-user-container'>
                        <h2>QUẢN LÝ NGƯỜI DÙNG</h2>
                        <div className='row100'>
                        <div className='col'>
                            <div className='inputBox'>
                                <input value={userRegister.values.taiKhoan} style={{color:'wheat'}} onChange={handleChange} type='text' name='taiKhoan' />
                                <span className='text'>Tài khoản</span>
                                <span className='line'></span>
                            </div>
                        </div>
                        <p className='text-center text-danger'>{userRegister.errors.taiKhoan}</p>
                    </div>

                    <div className='row100'>
                        <div className='col'>
                            <div className='inputBox'>
                                <input  value={userRegister.values.matKhau} style={{color:'wheat'}} onChange={handleChange} type='password' name='matKhau' />
                                <span className='text'>Mật khẩu</span>
                                <span className='line'></span>
                            </div>
                        </div>
                        <p className='text-center text-danger'>{userRegister.errors.matKhau}</p>
                    </div>

                    <div className='row100'>
                        <div className='col'>
                            <div className='inputBox'>
                                <input  value={userRegister.values.hoTen} style={{color:'wheat'}} onChange={handleChange} type='text' name='hoTen' />
                                <span className='text'>Họ tên</span>
                                <span className='line'></span>
                            </div>
                        </div>
                        <p className='text-center text-danger'>{userRegister.errors.hoTen}</p>
                    </div>

                    <div className='row100'>
                        <div className='col'>
                            <div className='inputBox'>
                                <input  value={userRegister.values.email} style={{color:'wheat'}} onChange={handleChange} type='email' name='email' />
                                <span className='text text-center'>Email</span>
                                <span className='line'></span>
                            </div>
                        </div>
                        <p className='text-center text-danger'>{userRegister.errors.email}</p>
                    </div>

                    <div className='row100'>
                        <div className='col'>
                            <div className='inputBox'>
                                <input  value={userRegister.values.soDt} style={{color:'wheat'}} onChange={handleChange} type='soDt' name='soDt' />
                                <span className='text text-center'>Số điện thoại</span>
                                <span className='line'></span>
                            </div>
                        </div>
                        <p className='text-center text-danger'>{userRegister.errors.soDt}</p>
                    </div>

                    <div className='row100'>
                        <div className='col'>
                            <div className='inputBox'>
                                <input  value={userRegister.values.maLoaiNguoiDung} style={{color:'wheat'}} onChange={handleChange} type='maLoaiNguoiDung' name='maLoaiNguoiDung' />
                                <span className='text'>Mã loại người dùng</span>
                                <span className='line'></span>
                            </div>
                        </div>
                        <p className='text-center text-danger'>{userRegister.errors.maLoaiNguoiDung}</p>
                    </div>

                        <div className='text-center'>
                            {userRegister.valid ? <button onClick={() => {
                                handleSubmit()
                            }} className='btn btn-success ml-2'>Thêm</button> : <button disabled style={{ cursor: 'not-allowed' }} className='btn'>Thêm</button>}
                             {userRegister.valid ? <button onClick={() => {
                                 let newUser = userRegister.values;
                                 let temp = {
                                    taiKhoan: newUser.taiKhoan,
                                    matKhau: newUser.matKhau,
                                    email: newUser.email,
                                    soDt: newUser.soDt,
                                    maNhom: "GP01",
                                    maLoaiNguoiDung: newUser.maLoaiNguoiDung,
                                    hoTen: newUser.hoTen
                                 }
                                capNhatNguoiDung.CapNhat(temp).then(res => {
                                    console.log(res.data);
                                })
                                .catch(err => {
                                    console.log(err.response.data);
                                })
                            }} className='btn btn-info ml-2'>Cập nhật</button> : <button disabled style={{ cursor: 'not-allowed' }} className='btn'>Cập nhật</button>}
                        </div>
                    </div>
                </div>
                <div className='thong-tin-nguoi-dung text-light'>
                    <h1 className='text-center'>DANH SÁCH NGƯỜI DÙNG</h1>
                    <table className='table'>
                        <thead>
                            <tr className='text-light'>
                                <td>STT</td>
                                <td>Tài khoản</td>
                                <td>Mã loại người dùng</td>
                                <td>Sửa</td>
                                <td>Xóa</td>
                            </tr>
                        </thead>

                        <tbody>
                            {renderDanhSachNguoiDung()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    else {
        alert('Bạn không có quyền truy cập vào hệ thống (*)');
        return <Redirect to='/trangchu' />
    }
}
