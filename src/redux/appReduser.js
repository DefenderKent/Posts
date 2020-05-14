const SHOW_LOADER = "APP/SHOW_LOADER";
const HIDE_LOADER = "APP/HIDE_LOADER";
const SHOW_ALERT = "APP/SHOW_ALERT";
const HIDE_ALERT = "APP/HIDE_ALERT";

const initialState = {
  loading: false,
  alert: null,
};

export const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
export const showLoader = () => {
  return { type: SHOW_LOADER };
};
export const hideLoader = () => {
  return { type: HIDE_LOADER };
};
export const showAlert = (text, dispatch) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};
export const hideAlert = () => {
  return { type: HIDE_ALERT };
};
