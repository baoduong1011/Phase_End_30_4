import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch , Route, Router } from 'react-router-dom';
import {useSpring,animated} from 'react-spring';
import propsAnimtion1 from './animtionPackages/Animation';
import Header from './components/header/Header';
import TrangChu from './pages/TrangChu/TrangChu';
import DangNhap from './pages/DangNhap/DangNhap';
import DangKy from './pages/DangKy/DangKy';
import DatVe from './pages/DatVe/DatVe';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import {} from './pages/DatVe/DatVe';
import QuanLyUser from './pages/QuanLyHeThong/QuanLyUser/QuanLyUser';
import QuanLyFilm from './pages/QuanLyHeThong/QuanLyFilm/QuanLyFilm';
import QuanLyHeThong from './pages/QuanLyHeThong/QuanLyHeThong';
function App() {
      const propsAnimtion1 = useSpring({
        opacity:1,
        from: {
            opacity:0
        },
        config: {
            duration:3000
        }
      })
  return (
    <animated.div style={propsAnimtion1}>
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path='/trangchu' component={TrangChu} />
                <Route exact path='/dangnhap' component={DangNhap} />
                <Route exact path='/dangky' component={DangKy} />
                <Route exact path='/datve/:idLichChieu' component={DatVe} />
                <Route exact path='/chitietphim/:idFilm' component={ChiTietPhim} />
                <Route exact path='/quanlyuser' component={QuanLyHeThong} />
                <Route exact path='/quanlyfilm' component={QuanLyHeThong} />
                <Route exact path='/quanlyhethong' component={QuanLyHeThong} />
                <Route exact path='/' component={TrangChu} />
            </Switch>
        </BrowserRouter>
    </animated.div>
  );
}

export default App;
