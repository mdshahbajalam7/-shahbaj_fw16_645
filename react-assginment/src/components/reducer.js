import { ERROR_DATA, GET_PROFILE, LOGIN } from "../components/actiontype";

const initalstates = {
  isloading: false,
  profiledata: {},
  token: "",
  username: "",
};

export const reducergetdata = (state = initalstates, { type, payload }) => {
  switch (type) {
    case GET_PROFILE: {
      console.log("payload", payload);
      return {
        ...state,
        // isloading: true,
        profiledata: payload,
      };
    }
    case LOGIN: {
      console.log("payload.username", payload.username);
      console.log("payload.token", payload.token);
      return {
        ...state,
        username: payload.username,
        token: payload.token,
        profiledata: {},
      };
    }
    case ERROR_DATA: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
