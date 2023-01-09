import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Error 404</h1>
          <p className="text-5xl mb-8">Sorry, page not found.</p>
          <Link className="btn btn-primary btn-md" to="/">
            <FaHome className="mr-2" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
