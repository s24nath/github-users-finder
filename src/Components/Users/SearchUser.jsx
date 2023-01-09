import { useState, useContext } from "react";
import GithubContext from "../../Context/GithubContext";
import { searchUsers } from "../../Context/GithubActions";
import AlertContext from "../../Context/AlertContext";

const SearchUser = () => {
  // Use Context starts
  const { users, clearUsersList, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  // Use Context ends

  // Use State starts
  const [text, setText] = useState("");
  // Use State ends

  // Local function definition
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Sorry, cannot search empty query.", "error");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const data = await searchUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: data,
      });      
      setText("");
    }
  };
  // Local function definition ends

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
                value={text}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => clearUsersList()}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
