import DAT_VE_REDUCER from "../actions/action";

const stateDefault = {
        maLichChieu:'',
        maCumRap:'',
        maHeThongRap:'',
        logo:'',
        dsGheDangDat:[
            
        ]
}


const DatVeReducer = (state = stateDefault , action) => {
   switch(action.type) {
       case 'DAT_VE_REDUCER' : {
           state.maLichChieu = action.maLichChieu;
           state.maCumRap = action.maCumRap;
           state.maHeThongRap = action.maHeThongRap;
           return {...state};
       }

       case 'DAT_GHE' : {
           let mangGheDangDat = [...state.dsGheDangDat];
        //    let index = mangGheDangDat.findIndex(ghe => ghe.maGhe === action.gheDangDat.maGhe);
        let index = mangGheDangDat.findIndex(ghe => ghe.maGhe === action.gheDangDat.maGhe);
           if(index !==-1 ) {
               mangGheDangDat.splice(index,1);
           }
           else {
               mangGheDangDat.push(action.gheDangDat);
           }
           state.dsGheDangDat = mangGheDangDat;
           return {...state}
       }
       default: return {...state};
   }
}

export default DatVeReducer;