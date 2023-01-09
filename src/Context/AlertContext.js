import { createContext, useReducer } from "react";
import alertReducers from "./AlertReducers";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  // Local function definition starts
  const setAlert = (msg, type) => {
    dispatch({
      type: "ALERT_TYPE",
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: "CLOSE_ALERT",
      });
    }, 3000);
  };
  // Local function definition ends

  // Use Reducers starts
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducers, initialState);
  // Use Reducers ends
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
