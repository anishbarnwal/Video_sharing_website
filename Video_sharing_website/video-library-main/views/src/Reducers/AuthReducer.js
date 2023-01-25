const authReducer = (
    state = { authdata: null, userData: null, loading: false, error: false, updateLoading: false },
    action
) => {
    switch (action.type) {
        case 'AUTH_START':
            return {...state, loading: true, error: false }
        
        case 'AUTH_SUCCESS':
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return { ...state, authData: action.data, loading: false, error: false }

        case 'USER_AUTH':
            return { ...state, userData: action.data, loading: false, error: false }
        
        case 'AUTH_ERROR':
            return { ...state, loading: false, error: true }
        
        case 'SIGN_OUT':
            localStorage.clear()
            return {...state, authData: null, loading: false, error: false}

        default:
            return state
    }

}

export default authReducer;