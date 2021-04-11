import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import DAT_VE_REDUCER from '../../redux/actions/action';
// import DAT_GHE from '../../redux/actions/action';
import { danhSachPhongVe, datVe, thongTinRapSer } from '../../services/service';
import './css/DatVe.css';

export default function DatVe(props) {


    let [film,setFilm] = useState({
        thongTinPhim:{},
        danhSachGhe:[],
    })


    let DatVe = (thongTinDatVe) => {
        let promise = Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            data: thongTinDatVe,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        }) 

        promise.then(res => {
            alert(res.data);
        })

        promise.catch(err => {
            console.log(err.response.data);
        })
    }


    let maLichChieu2 = props.match.params.idLichChieu;

    let dsGheDangDat = useSelector(state => state.DatVeReducer.dsGheDangDat);

    console.log(dsGheDangDat);

    let maLichChieu = useSelector(state => state.DatVeReducer.maLichChieu);
    console.log(maLichChieu);
    useEffect(() => {
        danhSachPhongVe?.LoadDanhSachPhongVe(maLichChieu2).then(res => {
            setFilm({...film,thongTinPhim: res.data.thongTinPhim,danhSachGhe: res.data.danhSachGhe});
        })
        .catch(err => {
            console.log(err.response.data);
        })
    },[])

    console.log(film);

    let dispatch = useDispatch();

    let accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);


   if(localStorage.getItem('taiKhoan')) {
    return (
        <div className='dat-ve-main text-light'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8 text-center'>
                        <div className='manHinh mt-2 mb-2'>
                            <img src="https://tix.vn/app/assets/img/icons/screen.png" /> 
                        </div>

                        <div className='danhSachGhe '>
                            {film.danhSachGhe?.map((ghe,index) => {
                                let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''; 

                                let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';
                                let noiDung = ghe.daDat ? 'X' : ghe.stt;

                                let disabled = ghe.daDat ? 'disabled' : '';

                                let indexGheDangDat = dsGheDangDat?.findIndex(ghedd => ghedd.maGhe === ghe.maGhe);

                                let classGheDangDat = indexGheDangDat !== -1 ? 'gheDangDat' : ''; 

                                return <Fragment key={index}>
                                    <button onClick={() => {
                                         dispatch({
                                             type:'DAT_GHE',
                                             gheDangDat : {
                                                maGhe: ghe.maGhe,
                                                giaVe: ghe.giaVe,
                                                stt: ghe.stt
                                             }
                                             
                                         })
                                    }} disabled={disabled} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{noiDung}</button>
                                    {(index+1) % 16 === 0 ? <br /> : ''}
                                </Fragment>
                            })}
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className='display-4 text-center'>
                            {dsGheDangDat?.reduce((total,ghe,index) => {
                                return total+= ghe.giaVe;
                            },0).toLocaleString()}đ
                        </div>
                        <hr />
                        <div className='text-center'>
                            <img src={film.thongTinPhim?.hinhAnh} style={{width:'150px',height:'200px'}} />    
                        </div>
                        <h1 className='text-center'>{film.thongTinPhim?.tenPhim}</h1>
                        <h5 className='text-center'>{film.thongTinPhim?.tenCumRap} - {film.thongTinPhim?.tenRap}</h5>
                        <h5 className='text-center'>{film.thongTinPhim?.ngayChieu} - {film.thongTinPhim?.gioChieu}</h5>
                        <hr />
                        <div>Ghế: {
                            
                            dsGheDangDat?.map((ghe,index) => {
                                return <span key={index}>
                                        {ghe.stt} <span> </span>
                                </span>
                            })
                            
                        }</div>
                        <hr />
                        <button onClick={() => {
                            let taiKhoan = localStorage.getItem('taiKhoan');
                            let objectDatVe = {
                                "maLichChieu": props.match.params.idLichChieu,
                                "danhSachVe": dsGheDangDat,
                                'taiKhoanNguoiDung': taiKhoan
                            }

                            // console.log('objectDatVe: ',objectDatVe);
                            // console.log('taiKhoan: ',taiKhoan);
                            // datVe.DatVe(objectDatVe).then(res => {
                            //     console.log(res.data);
                            // })
                            // .catch(err => {
                            //     console.log(err.response.data);
                            // })

                            DatVe(objectDatVe);
                        }} className='btn btn-success w-100 p-5' style={{fontSize:'25px'}}>ĐẶT VÉ</button>
                    </div>
                </div>
            </div>
        </div>
    )
   }
   else {
       alert("Hãy đăng nhập để đặt vé (*)");
        return <Redirect to='/dangnhap' />
   }
}
