import Axios from 'axios';
class ThongTinRapSer {
    LoadThongTinRap(maHeThongRap) {
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`
        })
    }
}

export default ThongTinRapSer;