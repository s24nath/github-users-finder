/* Importing Local Components Starts */
import Loader from "../Layout/Loader";
import User from "./User";
/* Importing Local Components Ends */
import { useContext } from "react";
import GithubContext from "../../Context/GithubContext";

const UserLists = () => {
  const { users, isLoading } = useContext(GithubContext);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 l:grid-cols-3 md:grid-cols-2">
        {users.map((currentUser) => (
          <User key={currentUser.id} user={currentUser} />
        ))}
      </div>
    );
  }
};

export default UserLists;
