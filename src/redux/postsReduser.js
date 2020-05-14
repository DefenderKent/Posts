import { showLoader, hideLoader, showAlert } from "./appReduser";

const CREATE_POST = "POST/CREATE_POST";
export const FETCH_POST = "POST/FETCH_POST";
export const REQUEST_POSTS = "POST/REQUEST_POSTS";

const initialState = {
  posts: [],
  fetchedPost: [],
};

export const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload]) };
    case FETCH_POST:
      return { ...state, fetchedPost: action.payload };
    default:
      return state;
  }
};
export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};
export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS,
  };
  //   return async (dispatch) => {
  //     try {
  //       dispatch(showLoader());
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //       );
  //       const json = await response.json();
  //       dispatch({ type: FETCH_POST, payload: json });
  //       dispatch(hideLoader());
  //     } catch (e) {
  //       dispatch(showAlert("Ошибка сервера"));
  //       dispatch(hideLoader());
  //     }
  //   };
};
