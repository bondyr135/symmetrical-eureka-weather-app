
const INITIAL_STATE = {
  open: false,
  msg: ""
}

/*
  Holds modal's state.
  Default state: close
*/

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        open: true,
        msg: action.payload.msg
      };
    case "CLOSE_MODAL":
      return {
        open: false,
        msg: ""
      };
    default: return state;
  }
}

export default modalReducer;