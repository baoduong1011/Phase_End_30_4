import Axios from 'axios';
class TimKiem {
    TimKiem(key) {
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${key}`
        })
    }
}

export default TimKiem;