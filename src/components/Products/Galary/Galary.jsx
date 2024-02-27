// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// // import "./styles.css";
// import { EffectCoverflow, Pagination } from "swiper/modules";
// export default function Galary() {
//   return (
//     <>
//    <div>

//    <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide className="bg-yellow-50 px-3 rounded-lg">
//           <div>
//             <p className="text-base font-normal text-gray-600 mt-10">
//               At vero eos voluptatum et accusamus et iusto odio dignissimos
//               ducimus qui blanditiis praesentium voluptatum error sit voluptate
//               deleniti atque corrupti quos dolores et quas molestias excepturi
//               sint occaecati.
//             </p>
//             <div className="flex px-2 mt-5">
//               <div className="w-14 mask mask-squircle">
//                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//               </div>
//               <div className="mt-2 ml-3 text-gray-500">
//                 <p className="text-black font-blod">Dorothy Bell</p>
//                 <p>Reader</p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//       </Swiper>
//    </div>
//     </>
//   );
// }

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import icone_img from "../../../assets/img/Icone/bookimg.jpg";
import p1 from "../../../assets/img/Book/cover.jpg"
import p2 from "../../../assets/img/Book/cover1.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Galary() {
  return (
    <div className="">
      <div className=" min-h-[400px]-[400px] md:flex">
        <div className=" w-full px-14 md:px-5 mb-10 md:w-5/12 mr-10 md:ml-20 ">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide  className="w-[350px]">
                <img className="w-full bg-cover object-fit" src={p1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full bg-cover" src={p2} alt="" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full md:w-7/12 px-5">
          <img className="h-[400px]"  src={icone_img} alt="" />
        </div>
      </div>
    </div>
  );
}
