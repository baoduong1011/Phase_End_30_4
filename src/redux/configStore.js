import {combineReducers,createStore} from 'redux';
import DatVeReducer from './reducers/DatVeReducer';

const rootReducer = combineReducers({
    DatVeReducer: DatVeReducer
})

const store = createStore(rootReducer);
export default store;