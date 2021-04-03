import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch , Route } from 'react-router-dom';
import {useSpring,animated} from 'react-spring';
import propsAnimtion1 from './animtionPackages/Animation';
import Header from './components/header/Header';
import TrangChu from './pages/TrangChu/TrangChu';
import DangNhap from './pages/DangNhap/DangNhap';
import DangKy from './pages/DangKy/DangKy';
import DatVe from './pages/DatVe/DatVe';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
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
                <Route exact path='/datve' component={DatVe} />
                <Route exact path='/chitietphim/:idFilm' component={ChiTietPhim} />
                <Route />
            </Switch>
        </BrowserRouter>
    </animated.div>
  );
}

export default App;
