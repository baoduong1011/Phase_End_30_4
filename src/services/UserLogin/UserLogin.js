import Axios from 'axios';
class UserLogin {
    DangNhap(data) {
        return Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data
        })
    }
}

export default UserLogin;