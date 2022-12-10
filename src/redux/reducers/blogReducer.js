import {
  ADD_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT,
  BLOG_LOADED,
  ADD_TO_HISTORY,
  GET_SINGLE_BLOG,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  history: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case GET_SINGLE_BLOG:
      return {
        blogs: state.blogs.filter(blog => blog._id === action.payload),
      };
    // case ADD_CONTENT:
    //   return {
    //     ...state,
    //     blogs: [...state.blogs, action.payload],
    //   };
    // case ADD_TO_HISTORY:
    //   return {
    //     ...state,
    //     history: [...state.history, action.payload],
    //   };
    // case DELETE_CONTENT:
    //   return {
    //     ...state,
    //     blogs: state.blogs.filter((blog) => blog._id !== action.payload),
    //   };
    // case UPDATE_CONTENT:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export default blogReducer;
