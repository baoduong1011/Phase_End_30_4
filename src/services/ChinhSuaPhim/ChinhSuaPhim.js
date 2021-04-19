import Axios from 'axios';
class ChinhSuaPhim {
    ChinhSuaPhim(filmEdit) {
        return Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload',
            method:'POST',
            data: filmEdit,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }
}
export default ChinhSuaPhim;