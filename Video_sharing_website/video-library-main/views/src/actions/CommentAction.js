import * as CommentAPI from '../api/VideoRequest'

export const getComment = (postId) => async (dispatch) => {
    dispatch({type: "VIDEO_START"})
    try {
        const { data } = await CommentAPI.getComment(postId)

        dispatch({type: "VIDEO_COMMENT", data: data})
    } catch (error) {
        dispatch({type: "VIDEO_FAIL"})
    }
}