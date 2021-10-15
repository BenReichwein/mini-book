import api from './api'
import {
    GET_POST,
} from './types';
// Creating a post
export const createPost = (formValues) => async (dispatch) => {
  await api.post('posts', {
    title: formValues.title,
    description: formValues.description
  })
  .then(res => {
    dispatch({ type: GET_POST, payload: res.data});
  })
  .catch(err=> {
    alert(err.response.data)
  })
};
// Get all the posts
export const getPost = () => async (dispatch) => {
  const response = await api.get('posts')

  dispatch({ type: GET_POST, payload: response.data});
};
// Delete a single post
export const deletePost = (id) => async (dispatch) => {
  await api.delete(`posts/${id}`)
  .then(res => {
    dispatch({ type: GET_POST, payload: res.data});
  })
  .catch(err => {
    alert(err.response.data)
  })
};
// Comment on a post
export const createComment = (comment, postUid, id) => async (dispatch) => {
  await api.post(`posts/comment/${id}`, {
    postUid,
    postId: id,
    comment
  })
  .then(async (res) => {
    dispatch({ type: GET_POST, payload: res.data});
  })
  .catch(err => {
    alert(err.response.data)
  })
}
// Delete a comment (could be from owner of post or commenter)
export const deleteComment = (comment, commentUid, id) => async (dispatch) => {
  await api({
    method: 'delete',
    url: `posts/comment/${id}`,
    data: {
      commentUid,
      postId: id,
      comment,
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    dispatch({ type: GET_POST, payload: res.data});
  })
  .catch(err=> {
    alert(err.response.data)
  })
};
// Get all users posts that they've posted
export const getUsersPosts = (uid) => async (dispatch) => {
  const response = await api.get(`userPosts/${uid}`)

  dispatch({ type: GET_POST, payload: response.data});
}