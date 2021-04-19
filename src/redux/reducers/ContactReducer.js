const stateDefault = {
    arrayComments:[
        {
            hoTen:'',
            email:'',
            danhGia:''
        }
    ]
}

const ContactReducer = (state = stateDefault , action) => {
    switch(action.type) {
        case 'CONTACT_REDUCER' : {
            console.log(action);
        }
        default: return {...state}
    }
}

export default ContactReducer;