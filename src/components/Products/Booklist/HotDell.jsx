import b from "../../../assets/img/Book/book.jpg";
import c from "../../../assets/img/Book/cover.jpg";
import { MdOutlineStarOutline } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const HotDell = () => {
  return (
    <div className="py-5">
      <div className="flex justify-between">
        <h1 className="text-[32px] font-blod px-5">Hot Deal Today</h1>
        <button className="text-lg font-blod mr-6 bg-blue-600 px-3 rounded-md">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
      <Link>
      <div className="py-5">
          <Card
            className="max-w-sm group hover:border-blue-600 rounded shadow-xl bg-white"
            imgAlt="img"
            imgSrc={b}
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 dark:text-white">
              বাংলাদেশ ভারত সম্পর্ক,
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              দেবদুলাল বন্দ্যোপাধ্যায়
            </p>
            <div className="flex justify-between">
              <p className="text-lg font-medium text-blue-600">$500</p>
              <IoBagHandleOutline className="text-2xl text-black group-hover:text-blue-600 "></IoBagHandleOutline>
            </div>
            <Rating
              className="text-yellow-400"
              placeholderRating={4}
              emptySymbol={<MdOutlineStarOutline />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
          </Card>
        </div>
      </Link>
        <div className=" group hover:border-green-500 card w-[300px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
          <figure className=" h-[246px] w-full pt-10">
            <img src={b} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-lg font-normal text-[#4D4D4D]">
              বঙ্গবন্ধু উদ্ধৃতি
            </h2>
            <p className="card-title text-[12px] font-normal text-[#4D4D4D]">
              শিবু কুমার শীল
            </p>
            <div className="flex justify-between">
              <p className="text-lg font-medium text-blue-600">$500</p>
              <IoBagHandleOutline className="text-2xl text-black group-hover:text-green-500 "></IoBagHandleOutline>
            </div>
            <Rating
              className="text-[#FF6A00]"
              placeholderRating={4}
              emptySymbol={<MdOutlineStarOutline />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
          </div>
        </div>
        <div className=" group hover:border-green-500 card w-[300px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
          <figure className=" h-[246px] w-full pt-10">
            <img src={b} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-lg font-normal text-[#4D4D4D]">
              বঙ্গবন্ধু উদ্ধৃতি
            </h2>
            <p className="card-title text-[12px] font-normal text-[#4D4D4D]">
              শিবু কুমার শীল
            </p>
            <div className="flex justify-between">
              <p className="text-lg font-medium text-blue-600">$500</p>
              <IoBagHandleOutline className="text-2xl group-hover:text-green-500 "></IoBagHandleOutline>
            </div>
            <Rating
              className="text-[#FF6A00]"
              placeholderRating={4}
              emptySymbol={<MdOutlineStarOutline />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
          </div>
        </div>
        <div className=" group hover:border-green-500 card w-[300px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
          <figure className=" h-[246px] w-full pt-10">
            <img src={b} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-lg font-normal text-[#4D4D4D]">
              বঙ্গবন্ধু উদ্ধৃতি
            </h2>
            <p className="card-title text-[12px] font-normal text-[#4D4D4D]">
              শিবু কুমার শীল
            </p>
            <div className="flex justify-between">
              <p className="text-lg font-medium text-blue-600">$500</p>
              <IoBagHandleOutline className="text-2xl group-hover:text-green-500 "></IoBagHandleOutline>
            </div>
            <Rating
              className="text-[#FF6A00]"
              placeholderRating={4}
              emptySymbol={<MdOutlineStarOutline />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDell;

// import b from "../../../assets/img/Book/book.jpg";
// import { MdOutlineStarOutline } from "react-icons/md";
// import { IoBagHandleOutline } from "react-icons/io5";
// import { FaStar } from "react-icons/fa";
// import Rating from "react-rating";

// const Booklist = () => {
//   return (
//     <div className="py-10">
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         <div className=" group hover:border-green-500 card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
//           <figure className="px-10 h-[246px] w-[246px] pt-10">
//             <img src={b} alt="Shoes" className="rounded-xl" />
//           </figure>
//           <div className="card-body ">
//             <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">
//               new book
//             </h2>
//             <div className="flex justify-between">
//               <p className="text-[16px] font-medium">$500</p>
//               <IoBagHandleOutline className="text-2xl group-hover:text-green-500 "></IoBagHandleOutline>
//             </div>
//             <Rating
//               className="text-[#FF6A00]"
//               placeholderRating={4}
//               emptySymbol={<MdOutlineStarOutline />}
//               placeholderSymbol={<FaStar />}
//               fullSymbol={<FaStar />}
//             />
//           </div>
//         </div>
//         <div className=" group hover:border-green-500 card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
//           <figure className="px-10 h-[246px] w-[246px] pt-10">
//             <img src={b} alt="Shoes" className="rounded-xl" />
//           </figure>
//           <div className="card-body ">
//             <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">
//               new book
//             </h2>
//             <div className="flex justify-between">
//               <p className="text-[16px] font-medium">$500</p>
//               <IoBagHandleOutline className="text-2xl group-hover:text-green-500 "></IoBagHandleOutline>
//             </div>
//             <Rating
//               className="text-[#FF6A00]"
//               placeholderRating={4}
//               emptySymbol={<MdOutlineStarOutline />}
//               placeholderSymbol={<FaStar />}
//               fullSymbol={<FaStar />}
//             />
//           </div>
//         </div>
//         <div className=" group hover:border-green-500 card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
//           <figure className="px-10 h-[246px] w-[246px] pt-10">
//             <img src={b} alt="Shoes" className="rounded-xl" />
//           </figure>
//           <div className="card-body ">
//             <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">
//               new book
//             </h2>
//             <div className="flex justify-between">
//               <p className="text-[16px] font-medium">$500</p>
//               <IoBagHandleOutline className="text-2xl group-hover:text-green-500 "></IoBagHandleOutline>
//             </div>
//             <Rating
//               className="text-[#FF6A00]"
//               placeholderRating={4}
//               emptySymbol={<MdOutlineStarOutline />}
//               placeholderSymbol={<FaStar />}
//               fullSymbol={<FaStar />}
//             />
//           </div>
//         </div>
//         <div className=" group hover:border-green-500 card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
//           <figure className="px-10 h-[246px] w-[246px] pt-10">
//             <img src={b} alt="Shoes" className="rounded-xl" />
//           </figure>
//           <div className="card-body ">
//             <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">
//               new book
//             </h2>
//             <div className="flex justify-between">
//               <p className="text-[16px] font-medium">$500</p>
//               <IoBagHandleOutline className="text-2xl group-hover:text-green-500 "></IoBagHandleOutline>
//             </div>
//             <Rating
//               className="text-[#FF6A00]"
//               placeholderRating={4}
//               emptySymbol={<MdOutlineStarOutline />}
//               placeholderSymbol={<FaStar />}
//               fullSymbol={<FaStar />}
//             />
//           </div>
//         </div>
//         <div className=" group hover:border-green-500 card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
//           <figure className="px-10 h-[246px] w-[246px] pt-10">
//             <img src={b} alt="Shoes" className="rounded-xl" />
//           </figure>
//           <div className="card-body ">
//             <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">
//               new book
//             </h2>
//             <div className="flex justify-between">
//               <p className="text-[16px] font-medium">$500</p>
//               <IoBagHandleOutline className="text-2xl group-hover:text-green-500 "></IoBagHandleOutline>
//             </div>
//             <Rating
//               className="text-[#FF6A00]"
//               placeholderRating={4}
//               emptySymbol={<MdOutlineStarOutline />}
//               placeholderSymbol={<FaStar />}
//               fullSymbol={<FaStar />}
//             />
//           </div>
//         </div>
//         <div className=" group hover:border-green-500 card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
//           <figure className="px-10 h-[246px] w-[246px] pt-10">
//             <img src={b} alt="Shoes" className="rounded-xl" />
//           </figure>
//           <div className="card-body ">
//             <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">
//               new book
//             </h2>
//             <div className="flex justify-between">
//               <p className="text-[16px] font-medium">$500</p>
//               <IoBagHandleOutline className="text-2xl group-hover:text-green-500 "></IoBagHandleOutline>
//             </div>
//             <Rating
//               className="text-[#FF6A00]"
//               placeholderRating={4}
//               emptySymbol={<MdOutlineStarOutline />}
//               placeholderSymbol={<FaStar />}
//               fullSymbol={<FaStar />}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booklist;
