import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './TaoLichChieu.css';

export default function TaoLichChieu() {
    


    return (
        <div className='tao-lich-chieu-main'>
            <div style={{background:'rgba(0, 0, 0, 0.564)'}} className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div style={{maxHeight:'500px',height:'500px'}} className="modal-content bg-dark">
                            <div className="modal-header">
                                <h5 className="modal-title text-dark text-center" id="exampleModalLongTitle"></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='box'>
                                    <h2 className='text-center'>Tạo lịch chiếu</h2>
                                    <form>
                                        <div className='inputBox'>
                                            <input  type='text' name="maPhim" required />
                                            <label>Mã phim</label>
                                            
                                        </div>

                                        <div className='inputBox'>
                                            <input type='text' name="ngayChieuGioChieu" required />
                                            <label>Ngày chiếu giờ chiếu</label>
                                          
                                        </div>

                                        <div className='inputBox'>
                                            <input  type='text' name="maRap" required />
                                            <label>Mã rạp</label>
                                            
                                        </div>

                                        <div className='inputBox'>
                                            <input type='text' name="giaVe" required />
                                            <label>Giá vé</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button  className="btn btn-primary">Tạo lịch</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
