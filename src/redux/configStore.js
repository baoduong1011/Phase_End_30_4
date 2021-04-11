import {combineReducers,createStore} from 'redux';
import DatVeReducer from './reducers/DatVeReducer';
import UserReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
    DatVeReducer: DatVeReducer,
    UserReducer: UserReducer
})

const store = createStore(rootReducer);
export default store;