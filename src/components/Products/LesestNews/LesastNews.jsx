import { Card } from "flowbite-react";
import b from "../../../assets/img/Book/cover.jpg";
import { CiClock2 } from "react-icons/ci";

const LesastNews = () => {
  return (
    <div className="py-5">
      <h1 className="text-[32px] font-blod text-center py-10">
        Our Lastest New
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
        <div className="h-[450px]">
          <Card className="max-w-sm  relative  ">
            <img src={b} className="h-[200px] w-full" alt="" />
            <div className="flex px-4 py-2 bg-blue-600 w-[140px] absolute top-6">
              <CiClock2 className="text-base text-white mt-[2px] mr-1 " />
              <h5 className="text-white"> Feb 26 2024</h5>
            </div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div>
              <button className=" rounded-md text-[16px] text-blue-600 mt-2 font-blod ">
                Read more
              </button>
            </div>
          </Card>
        </div>
        <div className="h-[450px]">
          <Card className="max-w-sm   ">
            <img src={b} className="h-[200px] w-full" alt="" />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div>
              <button className=" rounded-md text-[16px] text-blue-600 mt-2 font-blod ">
                Read more
              </button>
            </div>
          </Card>
        </div>
        <div className="h-[450px]">
          <Card className="max-w-sm   ">
            <img src={b} className="h-[200px] w-full" alt="" />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div>
              <button className=" rounded-md text-[16px] text-blue-600 mt-2 font-blod ">
                Read more
              </button>
            </div>
          </Card>
        </div>
        <div className="h-[450px]">
          <Card className="max-w-sm   ">
            <img src={b} className="h-[200px] w-full" alt="" />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div>
              <button className=" rounded-md text-[16px] text-blue-600 mt-2 font-blod ">
                Read more
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LesastNews;
