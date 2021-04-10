import Axios from 'axios';
class DanhSachPhongVe {
    LoadDanhSachPhongVe(maLichChieu) {
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        })
    }
}

export default DanhSachPhongVe;