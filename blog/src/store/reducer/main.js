import createReducer from 'createReduce'

const initState = {
    name : 'world'
}

const actionHandle = {
    [type] : (state,action)=>{
        return {
            name : action.payload.name
        }
    }
}

export default createReducer()
