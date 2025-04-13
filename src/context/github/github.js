import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";
export const GithubContext = createContext({
  users: [],
  isLoading: false,
});
const Provider = ({ children }) => {
  const initial_state = {
    users: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initial_state);
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default Provider;
