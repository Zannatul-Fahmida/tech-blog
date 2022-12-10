import {
  GET_CONTENT,
  BLOG_LOADED,
  DELETE_CONTENT,
  ADD_CONTENT,
  UPDATE_CONTENT,
  GET_SINGLE_BLOG,
} from "../actionTypes/actionTypes";

export const loadBlog = (blog) => {
  return {
    type: GET_CONTENT,
    payload: blog,
  };
};

export const singleBlog = (id) => {
  return {
    type: GET_SINGLE_BLOG,
    payload: id,
  };
};

// export const addBlog = (data) => {
//   return {
//     type: ADD_CONTENT,
//     payload: data,
//   };
// };

// export const deleteBlog = (id) => {
//   return {
//     type: DELETE_CONTENT,
//     payload: id,
//   };
// };

// export const updateBlog = (data) => {
//   return {
//     type: UPDATE_CONTENT,
//     payload: data,
//   };
// };
