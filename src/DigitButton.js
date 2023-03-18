import {ACTIONS} from './App'

export default DigitButton({ dispatch, digit}){
    return (<button  onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit} })}>{digit}</button>)
}