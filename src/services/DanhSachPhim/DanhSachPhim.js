import Axios from 'axios';
class DanhSachPhim {
    LoadDanhSach() {
        return Axios({
            method:'GET',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
        })
    }
}

export default DanhSachPhim;