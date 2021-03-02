import * as api from "../api";

// Action creaters

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    return dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const newPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    return dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const updatedPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
