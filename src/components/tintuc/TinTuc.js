import React, { useEffect, useState } from 'react'
import { danhSachPhim } from '../../services/service'
import Axios from 'axios';
import './TinTuc.css';
import moment from 'moment';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function TinTuc() {

    let [dsPhim,setDsPhim] = useState({
        mangPhim:[]
    })

    let layDanhSachPhimGP02 = () => {
        let promise = Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
            method:'GET'
        })

        promise.then(res => {
            console.log(res.data);
            setDsPhim({...dsPhim,mangPhim: res.data});
        })

        promise.catch(err => {
            alert(err.response.data);
        })
    }

    useEffect(() => {
        Aos.init({duration:2000});
        layDanhSachPhimGP02();
    },[]);

    let renderDanhSachPhim = () => {
        let newArray = dsPhim.mangPhim;
        return newArray.map((data,index) => {
            if(index <=3) {
                return <div data-aos="fade-up" className='row p-3 m-5'>
                <div className='col-6 text-center'>
                    <h4>{data.tenPhim}</h4>
                    <h5>{data.moTa}</h5>
                    <h5 className='text-warning'>{moment(data.ngayKhoiChieu).format('DD/MM/YYYY')}</h5>
                </div>

                <div className='col-6 text-center'>
                    <img src={data.hinhAnh} style={{width:'150px',height:'150px'}} />
                </div>
            </div>
            }
            else {
                return
            }
        })
    }


    return (
        <div className='tin-tuc-main'>
            <div className='container'>
                {renderDanhSachPhim()}
            </div>
        </div>
    )
}
