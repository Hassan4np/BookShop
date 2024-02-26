import b from "../../assets/img/bannar/bannar-1.jpg";
import b1 from "../../assets/img/bannar/bannar-2.jpg";

const Bannar_2 = () => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
      <div
        className=" relative h-[230px] w-full bg-no-repeat bg-cover rounded-md  "
        style={{ backgroundImage: `url(${b})` }}
      >
        <div className="absolute top-[15%] right-[40%] text-gray-300">
          <h6 className="text-xl text-gray-300">Discount up to</h6>
          <h1 className="text-[32px] font-bold text-blue-600">20% OFF</h1>
          <p className="text-2xl">
            For<span className="text-black font-bold"> Coocking Book</span>
          </p>
          <button className=" bg-blue-600 px-4 py-2 rounded-md text-black mt-2 font-blod ">
            Shop Now
          </button>
        </div>
      </div>
      <div
        className="relative h-[230px] w-full bg-no-repeat bg-cover rounded-md "
        style={{ backgroundImage: `url(${b1})` }}
      >
        <div className="absolute top-[15%] right-[30%] text-gray-300">
          <h6 className="text-xl text-gray-300">Discount up to</h6>
          <h1 className="text-[32px] font-bold text-blue-600">60% OFF</h1>
          <p className="text-2xl">
            For<span className="text-black font-bold"> Coocking Book</span>
          </p>
          <button className=" bg-blue-600 px-4 py-2 rounded-md text-black mt-2 font-blod ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannar_2;
