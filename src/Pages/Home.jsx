/* Importing Local Components Starts */
import UserLists from "../Components/Users/UserLists";
import SearchUser from "../Components/Users/SearchUser";
/* Importing Local Components Ends */

const Home = () => {
  return (
    <>
      <SearchUser />
      <UserLists />
    </>
  );
};

export default Home;
