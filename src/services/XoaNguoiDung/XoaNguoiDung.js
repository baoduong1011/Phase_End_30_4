import Axios from 'axios';
class XoaNguoiDung {
    Xoa(taiKhoan) {
        return Axios({
            method:'DELETE',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }
}

export default XoaNguoiDung;