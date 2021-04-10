import Axios from 'axios';
import { datVe } from '../service';
class ThemNguoiDung {
    Them(data) {
        return Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            data: data
        })
    }
}

export default ThemNguoiDung;