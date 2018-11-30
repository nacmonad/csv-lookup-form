import { createStore } from 'redux'
import { combineReducers } from 'redux'
import form from './form';
import workbook from './workbook';


const rootReducer = combineReducers({
    form,
    workbook,
    
})

export default createStore(rootReducer)