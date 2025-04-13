import { useState, useContext } from "react";
import { GithubContext } from "../../context/github/github";
import { AlertContext } from "../../context/alert/alert";
import Alert from "../layout/Alert";
import { searchUsers } from "../../context/github/githubActions";
function SearchUser() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const changeHandler = (e) => setText(e.target.value);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      const users = await searchUsers(text);
      dispatch({ type: "UPDATE_USERS", payload: users });
    }
  };
  const clearHandler = () => {
    setText("");
    dispatch({ type: "CLEAR_USERS" });
  };
  return (
    <>
      <Alert />
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ml-12">
        <div>
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={changeHandler}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <div>
            <button className="btn btn-ghost btn-lg" onClick={clearHandler}>
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchUser;
