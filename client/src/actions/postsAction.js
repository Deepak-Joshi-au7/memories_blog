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
