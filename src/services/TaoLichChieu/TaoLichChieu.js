import Axios from 'axios';
class TaoLichChieu {
    TaoLich(data) {
        return Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
            data: data,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }
}

export default TaoLichChieu;