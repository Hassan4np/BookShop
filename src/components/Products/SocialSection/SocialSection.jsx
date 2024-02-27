import {
  FaFacebook,
  FaGoogle,
  FaPinterest,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
const SocialSection = () => {
  return (
    <div className="py-5 bg-black px-5 mt-5 text-white ">
      <div className="md:flex px-5 ">
        <div className=" w-full md:w-2/4">
          <h4 className="text-white text-xl font-blod mb-5">
            Get up to date on the last news, special event and news arrivals
          </h4>
          <div className="mb-5 flex">
            <input
              className="px-5 py-3 rounded-2xl "
              type="email"
              name="email"
              placeholder="Enter your Email"
              id=""
            />
            <div>
              <button className="text-lg px-5 md:px-10 py-3 rounded-xl bg-blue-600 ml-5">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 w-full">
          <h1 className="text-xl font-blod mb-5">
            Follow our social media accounts for news and updates
          </h1>
          <div className="flex justify-center" >
            <div className="text-2xl text-white flex  ">
              <FaFacebook className="mr-3" />
              <FaTwitch  className="mr-3"></FaTwitch>
              <FaPinterest  className="mr-3"></FaPinterest>
              <FaYoutube  className="mr-3"></FaYoutube>
              <FaGoogle  className="mr-3"></FaGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
