import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { chiTietPhimSer, thongTinRapSer } from '../../services/service';
import './css/ChiTietPhim.css';
import Video1 from './chitietphim.mp4';
export default function ChiTietPhim(props) {
    let maPhim = props.match.params.idFilm;
    // console.log(maPhim);
    const [chiTietPhim, setChiTietPhim] = useState({
        chiTiet: {},
        arrayMaHeThongRap:[],

    })
    // console.log(chiTietPhim.chiTiet);
    let layThongTinRapChieu = () => {
        let index = 0;
        let arrayMaHeThongRap = [{maHeThongRap:'',maCumRap:''}];
        let arrayLichChieu = chiTietPhim.chiTiet.lichChieu;
        for(let key in arrayLichChieu) {
            console.log(arrayLichChieu[key].thongTinRap);
            index = arrayMaHeThongRap.findIndex(x => x.maCumRap === arrayLichChieu[key].thongTinRap.maCumRap );
            if(index === -1) {
                arrayMaHeThongRap.push({
                    maCumRap: arrayLichChieu[key].thongTinRap.maCumRap,
                    maHeThongRap: arrayLichChieu[key].thongTinRap.maHeThongRap
                })
            }
        }
        setChiTietPhim({...chiTietPhim,arrayMaHeThongRap: arrayMaHeThongRap});
    }
    let renderRapPhim = () => {
       return chiTietPhim.arrayMaHeThongRap.map((img,index) => {
           let imgSrc = "";
            thongTinRapSer.LoadThongTinRap(img.maHeThongRap).then(res => {
                imgSrc = res.data.logo;
            })
            return <div key={index}>
                <img src={imgSrc} />
            </div>
       })
    }

    useEffect(() => {
        for(let key = 0 ; key < chiTietPhim.arrayMaHeThongRap.length ; key++) {
            thongTinRapSer.LoadThongTinRap(chiTietPhim.arrayMaHeThongRap[key].maHeThongRap).then(res => {
                console.log(res.data);
            })
        }
    },[chiTietPhim.arrayMaHeThongRap])

    useEffect(() => {
        layThongTinRapChieu();
    },[chiTietPhim.chiTiet])
    console.log(chiTietPhim.arrayMaHeThongRap);
    useEffect(() => {
        chiTietPhimSer.LoadChiTietPhim(maPhim).then(res => {
            setChiTietPhim({ ...chiTietPhim, chiTiet: res.data });
        })
            .catch(err => {
                console.log(err.response.data);
            })
    }, [])
    return (
        <div className='main-chi-tiet-film'>
            <div className='container-fluid bg1-chi-tiet-phim'>
                <div className='row'>
                    <div className='col-6'>
                        <iFrame src={chiTietPhim.chiTiet.trailer} width="680" height="480" allowfullscreen></iFrame>
                    </div>

                    <div className='col-6 body-text'>
                        <div className='body-text-chi-tiet-phim'>
                            <h1 data-text={chiTietPhim.chiTiet.tenPhim} className='text-center'> <i class="fa fa-film"></i> {chiTietPhim.chiTiet.tenPhim}</h1>
                        </div>
                        <div className='mo-ta-chi-tiet-phim'>
                            <h4 className='text-center'>NGÀY KHỞI CHIẾU: {chiTietPhim.chiTiet.ngayKhoiChieu} </h4>
                            <h5 className='text-center'>Mô tả: {chiTietPhim.chiTiet.moTa}</h5>
                        </div>
                        <div style={{ marginLeft: '10%' }} className='text-warning text-center'>
                            <div>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg2-main-chi-tiet-phim'>
                <video width='100%' height='100%' autoPlay muted loop>
                    <source src={Video1} type="video/mp4" />
                </video>

                <div className='quan-ly-rap'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-3'>
                                {renderRapPhim()}
                            </div>

                            <div className='col-9'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
