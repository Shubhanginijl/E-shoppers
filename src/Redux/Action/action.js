import * as types from "./actiontype";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification} from "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";

export let Signup = (email, password) => {
  return async dispatch => {
  createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(({user})=> {
            dispatch({
              type: "Upload",
              // payload: uploadData,
            }); 
        sendEmailVerification(user)
    })
  };
};

export let Createuser = (email, password) => {
  return async dispatch => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ userData }) => {
        if (userData.emailVerified=== true) {
          if (userData) {
            dispatch({
              type: "createData",
              // payload: user,
            });
            toast.success(`sucessfully ${email} has been logged in`);
            window.location.assign("/");
          }
        }
      })
      .catch(alert);
  };
};

export let AddBasket = item => ({
  type: types.Addtobasket,
  payload: item,
});

export let removeBasket = id => ({
  type: types.remove_from_cart,
  payload: id,
});
