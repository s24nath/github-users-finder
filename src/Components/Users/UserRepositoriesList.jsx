import PropTypes from "prop-types";
/* Importing Local Components Starts */
import Repository from "./Repository";
/* Importing Local Components Ends */

const UserRepositoriesList = ({ repoList }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Recent Repositories
        </h2>
        {repoList.map((currRepo) => (
          <Repository key={currRepo.id} repoDetails={currRepo} />
        ))}
      </div>
    </div>
  );
};

UserRepositoriesList.protoTypes = {
  repoList: PropTypes.array.isRequired,
};

export default UserRepositoriesList;
