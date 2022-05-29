import axios from "axios";
import { ERROR_DATA, GET_PROFILE, LOGIN} from "../components/actiontype";

// import { GET_DATA } from "./actiontype"

export const getdataget = (dispatch, token, username) => {
  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json())
    .then((data) => {
      console.log("data",data);
      dispatch({
        type: GET_PROFILE,
        payload: data,
      });
    })
    .catch((Error) => console.log(Error));
};
export const Error = () => {
  return {
    type: ERROR_DATA,
  };
};

export const loginaction=(dispatch,logindata)=>{
    axios.post("https://masai-api-mocker.herokuapp.com/auth/login",logindata)
        .then(res=>dispatch({
            type:LOGIN,
            payload:{token:res.data,username:logindata.username}
        }))
        .catch(e=>console.log(e))
}