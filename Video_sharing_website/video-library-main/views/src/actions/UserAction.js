import * as UserAPI from '../api/UserRequest'

export const getUserInfo = (id) => async (dispatch) => {
    dispatch({type: "AUTH_START"})
    try {
        const { data } = await UserAPI.getUserInfo(id)
        dispatch({type: "USER_AUTH", data: data})
    } catch (error) {
        dispatch({type: "AUTH_ERROR"})
    }
}