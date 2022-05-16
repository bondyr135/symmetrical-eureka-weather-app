
const INITIAL_STATE = {
  open: false,
  msg: ""
}


const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_MODAL": 
      return  {
        open: true,
        msg: action.payload.msg
      };
    case "CLOSE_MODAL":
      return  {
        open: false,
        msg: ""
      };
    default: return state;
  }
}

export default modalReducer;