const videoReducer = (
    state = { videos: [], video: {}, comments: [], interaction: {}, loading: false, error: false,},
    action
) => {
    switch(action.type) {
        case "VIDEO_START" :
            return { ...state, loading: true, error:false}
        case "VIDEO_CREATION" :
            return { ...state, videos: [...state.videos.video, action.data.video], loading: false, error:false}
        case "VIDEO_SUCCESS":
            return { ...state, videos: action.data, loading: false, error:false}
        case "VIDEO_INTERACTION":
            return { ...state, interaction: action.data, loading: false, error:false}
        case "VIDEO_VIEW":
        case "VIDEO_LIKE":
        case "VIDEO_DISLIKE":
        case "VIDEO_SINGLE":
            return { ...state, video: action.data, loading: false, error:false}
        case "VIDEO_COMMENT":
            return { ...state, comments: action.data, loading: false, error:false}
        case "VIDEO_FAIL":
            return { ...state, loading: false, error: true}
        default:
            return state
    }
}

export default videoReducer