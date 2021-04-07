/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null, 
    user:null

  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Load User

  //Register User

  //Login User

  //Logout

  //Clear Erros

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;