import Axios from 'axios';
class LayThongTinLichChieu  {
    LoadThongTinLichChieu(maPhim) {
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        })
    }
}
export default LayThongTinLichChieu;