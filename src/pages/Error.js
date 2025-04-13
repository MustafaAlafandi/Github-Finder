import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
function Error() {
  return (
    <div className="hero my-auto h-screen ">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops:</h1>
          <p className="text-5xl mb-8">404 - Page not found!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
