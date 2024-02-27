import { Link } from "react-router-dom";

const Navbar = () => {
  const lists = (
    <>
    <Link to="/"><li><a className="font-blod text-lg text-">Home</a></li></Link>

      <li>
        <a className="font-blod text-lg">Products</a>
      </li>

      <li>
        <a className="font-blod text-lg">About</a>
      </li>
    </>
  );
  return (
    <div >
      <div className="navbar bg-yellow-50 shadow-2xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {lists}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BookShop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{lists}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className=" bg-blue-600 px-4 py-2 rounded-md text-black mt-2 font-blod ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
