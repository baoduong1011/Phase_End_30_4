const stateDefault = {
    user: {
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: 'GP01',
        maLoaiNguoiDung: '',
        hoTen: ''
    },
    taiKhoanDatVe:''
}


const UserReducer = (state = stateDefault , action) => {
    switch(action.type) {
        case 'CHINH_SUA_USER' : {
            console.log(action.userEdit);
            return {...state,user: action.userEdit}
        }

        case 'LICH_SU_DAT_VE' : {
            return {...state,taiKhoanDatVe: action.taiKhoanDatve};
        }

        default: return {...state}
    }
}

export default UserReducer;
