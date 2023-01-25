import * as VideoAPI from '../api/VideoRequest'

export const addVideo = (videoData) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.addVideo(videoData)
  
        dispatch({type: "VIDEO_CREATION", data: data})
        dispatch({type: 'CREATPOST'})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}

export const getVideo = (id) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.getVideo(id)

        dispatch({type: "VIDEO_SINGLE", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}

export const getAllVideo = () => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.getAllVideo()
        dispatch({type: "VIDEO_SUCCESS", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}

export const addView = (id) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.addView(id)
        dispatch({type: "VIDEO_VIEW", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}

export const addLike = (id) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.addLike(id)
        dispatch({type: "VIDEO_LIKE", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}

export const addDislike = (id) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.addDislike(id)
        dispatch({type: "VIDEO_DISLIKE", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}

export const allInteraction = (id) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await VideoAPI.allInteraction(id)
        dispatch({type: "VIDEO_INTERACTION", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}
