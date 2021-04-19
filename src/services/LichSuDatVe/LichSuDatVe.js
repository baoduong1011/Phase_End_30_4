import Axios from 'axios';
class LichSuDatVe {
    LichSuDatVe(data) {
        return Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            data: data
        })
    }
}

export default LichSuDatVe;