const stateDefault = {
    user: {
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: 'GP01',
        maLoaiNguoiDung: '',
        hoTen: ''
    }
}


const UserReducer = (state = stateDefault , action) => {
    switch(action.type) {
        case 'CHINH_SUA_USER' : {
            console.log(action.userEdit);
            return {...state,user: action.userEdit}
        }


        default: return {...state}
    }
}

export default UserReducer;
