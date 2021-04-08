import DAT_VE_REDUCER from "../actions/action";

const stateDefault = {
        maLichChieu:'',
        maCumRap:'',
        maHeThongRap:'',
        logo:''
}

const DatVeReducer = (state = stateDefault , action) => {
   switch(action.type) {
       case 'DAT_VE_REDUCER' : {
           state.maLichChieu = action.maLichChieu;
           state.maCumRap = action.maCumRap;
           state.maHeThongRap = action.maHeThongRap;
           return {...state};
       }
       case 'LOGO_RAP_PHIM' : {
           console.log(action);
       }
       default: return {...state};
   }
}

export default DatVeReducer;