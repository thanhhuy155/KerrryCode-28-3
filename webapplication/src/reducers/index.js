import {combineReducers} from 'redux'
import {handleProgressBar} from './RegisterationProgressbar'
import {handleForgetPasswordProgress} from './ForgetPasswordProgressReducer'
import {handleLogin} from './Login'
const appReducers = combineReducers ({
    handleProgressBar,
    handleForgetPasswordProgress,
    handleLogin
})


export default appReducers