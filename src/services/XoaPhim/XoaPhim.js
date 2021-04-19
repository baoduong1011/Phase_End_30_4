import Axios from "axios";
class XoaPhim {
    XoaPhim(maPhim) {
        return Axios({
            method:'DELETE',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }
}

export default XoaPhim;