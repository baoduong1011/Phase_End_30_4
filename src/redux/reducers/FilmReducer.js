const stateDefault = {
    film: {
        maPhim: '',
        tenPhim: '',
        trailer: '',
        moTa: '',
        maNhom: 'GP01',
        ngayKhoiChieu: '',
        danhGia: '',
        hinhAnh:{}
    },
    maPhimTao:''
}

const FilmReducer = (state = stateDefault , action) => {
    switch(action.type) {
        case 'CHINH_SUA_FILM' : {
            let newObject = {
                maPhim: action.data.maPhim,
                tenPhim: action.data.tenPhim,
                trailer: action.data.trailer,
                moTa: action.data.moTa,
                maNhom:'GP01',
                ngayKhoiChieu: action.data.ngayKhoiChieu,
                danhGia: action.data.danhGia,
                hinhAnh: action.data.hinhAnh
            }

            // console.log(newObject);
            return {...state,film: newObject};
        }

        case 'TAO_LICH_PHIM' : {
            console.log(action);
            let newMaPhimTao = action.maPhim;
            state.maPhimTao = newMaPhimTao;
            return {...state}
        }

        default: return {...state}
    }
}

export default FilmReducer;