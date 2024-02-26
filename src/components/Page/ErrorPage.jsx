import { Link } from "react-router-dom";
import error from "../../assets/img/logo/404.png";
const ErrorPage = () => {
  return (
    <div className="flex justify-center align-center py-5">
      <div>
        <img src={error} alt="" />
        <div className="text-center">
          <Link to="/">
            <button className="bg-blue-600 px-4 py-2 font-blod rounded-md">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
