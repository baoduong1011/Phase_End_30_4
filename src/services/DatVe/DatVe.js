import Axios from "axios";
class DatVe {
    DatVe(thongTinDat) {
        return Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            data: thongTinDat,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }
}

export default DatVe;