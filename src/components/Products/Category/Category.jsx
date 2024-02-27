import c1 from "../../../assets/img/category/cbook.png";
const Category = () => {
  return (
    <div className="px-5 py-5  bg-white">
        <div className="flex justify-between mb-5">
        <h1 className=" text-xl md:text-[32px] font-blod px-5">Featured Categories</h1>
        <button className="text-lg font-blod mr-6 bg-blue-600 px-3 py-2 rounded-md">
          View all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">

        <div className="border p-5 shadow-xl rounded-xl h-[250px] md:h-[280px]  bg-[#ECDCDC] ">
          <div className=" h-[150px] md:h-[220px] w-[150px] ">
            <img className="h-[150px] md:h-[200px] w-[150px]" src={c1} alt="" />
          </div>
          <h1 className="text-xl  md:-mt-5">Children Books</h1>
        </div>
        
        <div className="border p-5 shadow-xl rounded-xl h-[250px] md:h-[280px]  bg-[#ECDCDC] ">
          <div className=" h-[150px] md:h-[220px] w-[150px] ">
            <img className="h-[150px] md:h-[200px] w-[150px]" src={c1} alt="" />
          </div>
          <h1 className="text-xl  md:-mt-5">Children Books</h1>
        </div>
        <div className="border p-5 shadow-xl rounded-xl h-[250px] md:h-[280px]  bg-[#ECDCDC] ">
          <div className=" h-[150px] md:h-[220px] w-[150px] ">
            <img className="h-[150px] md:h-[200px] w-[150px]" src={c1} alt="" />
          </div>
          <h1 className="text-xl  md:-mt-5">Children Books</h1>
        </div>
        <div className="border p-5 shadow-xl rounded-xl h-[250px] md:h-[280px]  bg-[#ECDCDC] ">
          <div className=" h-[150px] md:h-[220px] w-[150px] ">
            <img className="h-[150px] md:h-[200px] w-[150px]" src={c1} alt="" />
          </div>
          <h1 className="text-xl  md:-mt-5">Children Books</h1>
        </div>
        <div className="border p-5 shadow-xl rounded-xl h-[250px] md:h-[280px]  bg-[#ECDCDC] ">
          <div className=" h-[150px] md:h-[220px] w-[150px] ">
            <img className="h-[150px] md:h-[200px] w-[150px]" src={c1} alt="" />
          </div>
          <h1 className="text-xl  md:-mt-5">Children Books</h1>
        </div>

      
      </div>
    </div>
  );
};

export default Category;
