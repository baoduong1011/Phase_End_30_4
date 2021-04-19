import {combineReducers,createStore} from 'redux';
import DatVeReducer from './reducers/DatVeReducer';
import UserReducer from './reducers/UserReducer';
import FilmReducer from './reducers/FilmReducer';
import ContactReducer from './reducers/ContactReducer';

const rootReducer = combineReducers({
    DatVeReducer: DatVeReducer,
    UserReducer: UserReducer,
    FilmReducer: FilmReducer,
    ContactReducer: ContactReducer
})

const store = createStore(rootReducer);
export default store;