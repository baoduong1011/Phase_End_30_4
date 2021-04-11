import ChiTietHeThongRap from "./ChiTietPhim/ChiTietHeThongRa";
import ChiTietPhimSer from "./ChiTietPhim/ChiTietPhimSer";
import LayThongTinLichChieu from "./ChiTietPhim/LayThongTinLichChieu";
import DanhSachPhim from "./DanhSachPhim/DanhSachPhim";
import ThongTinRapSer from "./ThongTinRap/ThongTinRapSer";
import UserLogin from "./UserLogin/UserLogin";
import UserRegister from "./UserRegister/UserRegister";
import DanhSachPhongVe from './DanhSachPhongVe/DanhSachPhongVe';
import DatVe from "./DatVe/DatVe";
import ThemNguoiDung from "./ThemNguoiDung/ThemNguoiDung";
import LayDanhSachNguoiDung from "./LayDanhSachNguoiDung/LayDanhSachNguoiDiung";
import XoaNguoiDung from "./XoaNguoiDung/XoaNguoiDung";
import CapNhatNguoiDung from "./CapNhatNguoiDung/CapNhatNguoiDung";





export const userLoginService = new UserLogin();
export const userRegisterService = new UserRegister();
export const danhSachPhim = new DanhSachPhim();
export const chiTietPhimSer = new ChiTietPhimSer();
export const thongTinRapSer = new ThongTinRapSer();
export const chiTietHeThongRap = new ChiTietHeThongRap();
export const layThongTinLichChieu = new LayThongTinLichChieu();
export const danhSachPhongVe = new DanhSachPhongVe();
export const datVe = new DatVe();
export const themNguoiDung = new ThemNguoiDung();
export const layDanhSachNguoiDung = new LayDanhSachNguoiDung();
export const xoaNguoiDung = new XoaNguoiDung();
export const capNhatNguoiDung = new CapNhatNguoiDung();