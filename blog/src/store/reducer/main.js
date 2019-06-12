import createReducer from '../../util/createReducer'
import { MAIN } from '../key' 

const initState = {
    name : 'world'
}

const actionHandle = {
    [MAIN] : (state,action)=>{
        return {
            name : action.payload.name
        }
    }
}

export default createReducer(initState,actionHandle)
