import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERR, UPDATE_LIKES, DELETE_POST, ADD_POST, ADD_COMMENT } from './types';

// get all posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: POST_ERR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// add a post
export const addPost = formData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/posts', formData, config);
        dispatch({
            type: ADD_POST,
            payload: res.data,
        })
        dispatch(setAlert('Posted!', 'success'));
    } catch (err) {
        dispatch(setAlert('Please select an Aim', 'error'))
        dispatch({
            type: POST_ERR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// add like
export const addLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${id}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, updoots: res.data }
        })
    } catch (err) {
        dispatch({
            type: POST_ERR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// remove like
export const removeLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unlike/${id}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, updoots: res.data }
        })
    } catch (err) {
        dispatch({
            type: POST_ERR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// delete post
export const deletePost = id => async dispatch => {
    try {
        await axios.delete(`/api/posts/${id}`);
        dispatch({
            type: DELETE_POST,
            payload: id
        })
        dispatch(setAlert('Post removed', 'success'));
    } catch (err) {
        dispatch({
            type: POST_ERR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//add comment

export const addComment = (commentForm, id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post(`/api/posts/comment/${id}`, commentForm, config);
        dispatch({
            type: ADD_COMMENT,
            payload: { id, comments: res.data }
        })
    } catch (err) {
        console.log(err)
    }
}