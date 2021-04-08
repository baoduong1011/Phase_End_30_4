import Axios from 'axios';
class ChiTietHeThongRap {
    LoadingChiTietHeThongRap(maHeThongRap) {
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
        })
    }
}

export default ChiTietHeThongRap;