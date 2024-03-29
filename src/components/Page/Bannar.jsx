import p1 from "../../assets/img/bannar/bannar-1.jpg"
const Bannar = () => {
    return (
        <div className="px-5 md:px-0">
            <div className="carousel w-full h-[400px] ">
                <div id="slide1" className="carousel-item relative w-full bg-cover ">
                    <img src={p1} className="w-full h-[600px] rounded-lg" />
                    <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                        <div className="top-1/4 ml-10 absolute space-y-5 ">
                        <h1 className="lg:text-6xl text-4xl font-semibold text-white" >New Books</h1>
                            <p className="text-base font-normal text-white">The impact of technology on modern society has revolutionized communication, <br /> business, and daily life, creating a global interconnected network.</p>
                            <div className="mt-5">
                            <button className=" bg-blue-600 px-4 py-2 rounded-md text-black mt-2 font-blod ">Shop Now</button></div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-cover  ">
                    <img src={p1} className="w-full h-[600px] rounded-lg" />
                    <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                        <div className="top-1/4 ml-10 absolute space-y-5 ">
                        <h1 className="lg:text-6xl text-4xl font-semibold text-white">Assignment <br /> Marks For Students <br /> Servicing.</h1>
                            <p className="text-base font-normal text-white">The impact of technology on modern society has revolutionized communication, <br /> business, and daily life, creating a global interconnected network.</p>
                            <div className="mt-5">
                                <button className="btn btn-success mr-8">Discover</button>
                                <button className="btn btn-primary">Leats Projects</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-cover  ">
                    <img src={p1} className="w-full h-[600px] rounded-lg" />
                    <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                        <div className="top-1/4 ml-10 absolute space-y-5 ">
                            <h1 className="lg:text-6xl text-4xl font-semibold text-white">Assignment <br /> Marks For Students <br /> Servicing.</h1>
                            <p className="text-base font-normal text-white">The impact of technology on modern society has revolutionized communication, <br /> business, and daily life, creating a global interconnected network.</p>
                            <div className="mt-5">
                                <button className="btn btn-success mr-8">Discover</button>
                                <button className="btn btn-primary">Leats Projects</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Bannar;





