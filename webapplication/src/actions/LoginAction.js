import * as Types from '../constraints/LoginCST'
import callAPI from '../utils/apiCaller'
export const actRegisterProgress = (numberProgress) => {
    return {
        type: Types.Register_PROGRESS,
        numberProgress
    }
}

export const actForgetPassword = (numberProgress) => {
    return {
        type: Types.FORGET_PASSWORD_PROGRESS,
        numberProgress
    }
}

export const actSaveUser = ({ dataUser }) => {
    return {
        type: Types.Handle_Login_Without_Token,
        dataUser
    }
}

export const actHandleLoginRequest = (email, password) => {
    return (dispatch) => {
        return callAPI('Login', 'GET', {
            email,
            password
        }).then(async res => {
            await localStorage.setItem('Token', JSON.stringify(res.data.token));
            dispatch(actSaveUser(res.data))
        })
    }
}

export const actHandleTokeRequest = (Token) => {
    return (dispatch) => {
        return callAPI('Token', 'GET', {
            Token
        }).then(async res => {
            await localStorage.setItem('Token', JSON.stringify(res.data.token));
            dispatch(actSaveUser(res.data))
        })
    }
}