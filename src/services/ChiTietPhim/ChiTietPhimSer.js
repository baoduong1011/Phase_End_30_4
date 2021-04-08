import Axios from 'axios';
class ChiTietPhimSer {
    LoadChiTietPhim(idFilm) {
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`
        })
    }
}



export default ChiTietPhimSer;
// export default ChiTietHeThongRap;