import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function Review() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-yellow-50 px-3 rounded-lg">
          <div>
            <p className="text-base font-normal text-gray-500 mt-10">
              At vero eos voluptatum et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum error sit voluptate
              deleniti atque corrupti quos dolores et quas molestias excepturi
              sint occaecati.
            </p>
            <div className="flex px-2 mt-5">
              <div className="w-14 mask mask-squircle">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <div className="mt-2 ml-3 text-gray-500">
                <p className="text-black font-blod">Dorothy Bell</p>
                <p>Reader</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
