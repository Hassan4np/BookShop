import cover from "../../../assets/img/Book/cover.jpg";
import cover1 from "../../../assets/img/Book/cover1.jpg";
const BookCover = () => {
  return (
    <div className="px-5">
        <h1 className="text-[32px] font-bold text-center py-10">Best writer</h1>
      <div className="lg:flex justify-between gap-10 py-5">
        <div className="w-full lg:w-5/12">
          <h4 className="text-2xl font-normal mb-[10px] text-gray-500">Deal 24H</h4>
          <h1 className="text-[32px] font-blod mb-[10px] text-black">Flexlam Sample</h1>
          <p className="text-base text-gray-500 mb-2">by Givenchy</p>
          <p className="text-base text-gray-500 mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto, expedita!
          </p>
          <h5 className="text-black font-blod text-xl">
            from <span className="text-blue-600 text-xl font-blod">$47.00</span>
          </h5>
          <div>
            <button className="bg-blue-600 px-5 py-2 text-black rounded-xl font-blod text-lg mt-5 mb-5">Check Bookshelf</button>
          </div>
        </div>
        <div className="flex gap-5 w-full lg:w-7/12  mx-auto ">
          <img className="w-full md:w-[295px] md:h-[415px] rounded-md " src={cover} alt="" />
          <img className=" w-full md:w-[295px] md:h-[415px]  rounded-md " src={cover1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BookCover;
