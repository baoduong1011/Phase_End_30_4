import ChiTietPhimSer from "./ChiTietPhim/ChiTietPhimSer";
import DanhSachPhim from "./DanhSachPhim/DanhSachPhim";
import ThongTinRapSer from "./ThongTinRap/ThongTinRapSer";
import UserLogin from "./UserLogin/UserLogin";
import UserRegister from "./UserRegister/UserRegister";

export const userLoginService = new UserLogin();
export const userRegisterService = new UserRegister();
export const danhSachPhim = new DanhSachPhim();
export const chiTietPhimSer = new ChiTietPhimSer();
export const thongTinRapSer = new ThongTinRapSer();