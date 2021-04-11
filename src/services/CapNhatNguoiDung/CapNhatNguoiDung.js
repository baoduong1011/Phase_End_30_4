import Axios from 'axios';
class CapNhatNguoiDung {
    CapNhat(userEdit) {
        return Axios({
            method:'PUT',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            data: userEdit,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }
}
export default CapNhatNguoiDung;