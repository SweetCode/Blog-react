import createAction from '../../util/createAction'

export const hello=createAction(type,async=>{
    return {
        name : 'hello'
    }
})