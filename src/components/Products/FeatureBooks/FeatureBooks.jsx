import { Card, Tabs } from "flowbite-react";
import img from "../../../assets/img/Book/book.jpg";
import { MdOutlineStarOutline } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

function FeatureBooks() {
  return (
    <div className="overflow-x-auto py-10 ">
      <Tabs aria-label="Tabs with h1 underline" style="underline">
        <Tabs.Item active className="text-[32px] mb-5" title="Feature Books">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
            <Link>
              <div>
                <Card
                  className="max-w-sm group hover:border-blue-600 rounded shadow-xl bg-white"
                  imgAlt="img"
                  imgSrc={img}
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
            <div>
              <Card
                className="max-w-sm group hover:border-blue-600 rounded shadow-xl"
                imgAlt="img"
                imgSrc={img}
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
              </Card>
            </div>
            <div>
              <Card
                className="max-w-sm group hover:border-blue-600 rounded shadow-xl"
                imgAlt="img"
                imgSrc={img}
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
            <div>
              <Card
                className="max-w-sm group hover:border-blue-600 rounded shadow-xl"
                imgAlt="img"
                imgSrc={img}
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
              </Card>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Top Sellard">
          <div>2</div>
        </Tabs.Item>
        <Tabs.Item title="Top Rated">
          <div>3</div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default FeatureBooks;
