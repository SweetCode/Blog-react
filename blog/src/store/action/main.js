import createAction from '../../util/createAction'
import {  MAIN } from '../key'

export const hello=createAction(MAIN,async=>{
    return {
        name : 'hello'
    }
})