import { Card } from "flowbite-react";
import icone from "../../../assets/img/Icone/icone.png";
import icone1 from "../../../assets/img/Icone/icone2.png";
import icone2 from "../../../assets/img/Icone/icone3.png";
import icone3 from "../../../assets/img/Icone/icone4.png";
import { Link } from "react-router-dom";

const Pay_Icone = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 bg-white py-5">
      <Link to="#">
        <Card href="#" className="max-w-sm px-5 border-none  ">
          <div className=" flex justify-center">
            <img className="h-[50px] w-[50px]" src={icone} alt="" />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            Instant Download
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        </Card>
      </Link>
      <Link to="#">
        <Card href="#" className="max-w-sm px-5 border-none ">
          <div className=" flex justify-center">
            <img className="h-[50px] w-[50px]" src={icone1} alt="" />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Pay with Easy
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        </Card>
      </Link>
      <Link to="#">
        <Card href="#" className="max-w-sm px-5 border-none ">
          <div className=" flex justify-center">
            <img className="h-[50px] w-[50px]" src={icone2} alt="" />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Best Deal
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        </Card>
      </Link>
      <Link to="#">
        <Card href="#" className="max-w-sm px-5 border-none ">
          <div className=" flex justify-center">
            <img className="h-[50px] w-[50px]" src={icone3} alt="" />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Secure Payment
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        </Card>
      </Link>
    </div>
  );
};

export default Pay_Icone;
