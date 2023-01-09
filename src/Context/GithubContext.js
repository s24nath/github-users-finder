import { createContext, useReducer } from "react";
import githubReducers from "./GithubReducers";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_AUTHKEY = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // Local function definition starts
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const clearUsersList = () => dispatch({ type: "CLEAR_USERS", payload: [] });
  // Local function definition ends

  // Use Reducers starts
  const initialState = {
    users: [],
    userDetails: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducers, initialState);
  // Use Reducers ends

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.loading,
        userDetails: state.userDetails,
        repos: state.repos,
        dispatch,
        clearUsersList,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
