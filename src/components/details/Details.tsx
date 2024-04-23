import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Details = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <></>,
  };
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="font-roboto lg:max-w-screen-lg  mx-auto w-full max-w-screen-lg bg-white rounded-lg">
      <div className="relative md:grid gap-3 grid-cols-2  ">
        <div className="px-[0.95rem] ">
          <div className="w-full pt-4 relative overflow-hidden ">
            <Slider {...settings}>
              <div>
                <img
                  className="w-full h-[400px] rounded-md"
                  src="https://ocopmart.org/static/media/images/news/bnao-1624812115-1636964564.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full  h-[400px] rounded-md"
                  src="https://ocopmart.org/static/media/images/news/s200_200/lavenza1-1649844023-1654338983.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full  h-[400px] rounded-md"
                  src="https://ocopmart.org/static/media/images/news/s200_200/360x240cdg-1649390776-1654337888.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>
          <div className="lg:max-w-screen-xl  mx-auto w-full max-w-screen-xl ">
            <div className="mb-[1.88rem] ">
              <img
                className="w-20 h-20 border border-black"
                src="https://ocopmart.org/static/media/images/news/bnao-1624812115-1636964564.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" mt-3 w-full px-[0.94rem]">
          <div className=" ">
            <h2 className="text-2xl font-normal text-graxam font-Sans">
              VIÊN BỔ NÃO THÔNG MẠCH CERE BRAIN MAX
            </h2>
          </div>
          <div className="mb-[10px]">
            <h1 className="text-black text-sm font-normal">Danh mục:</h1>
          </div>
          <div className=" mb-[5px]">
            <div className="text-[#ff0000] font-semibold text-xl">
              420.000 Đ
            </div>
          </div>
          <div className="border-t mb-[15px]"></div>

          <div className="mt-5 text-[#333] text-sm font-normal leading-6">
            <p className="">Ngày đăng bán : 15/11/2021</p>
            <p className="">Số lượt xem: 2440 </p>
            <p className="">Đánh giá:</p>
          </div>
          <div className="pt-4">
            <p className="text-[#333] text-sm font-normal">
              Trạng thái:
              <b className="text-[#ff0000]">Còn hàng</b>
            </p>
          </div>
          <div className="pt-4 text-[#333] text-sm font-normal leading-6">
            <p>Giao hàng từ:</p>
            <p>Đến:</p>
            <p>Vận chuyển:</p>
            <p className="italic">Phí vận chuyển:</p>
          </div>
          <div className="pt-5">
            <div className="flex items-center ">
              <div className=" font-normal text-sm">
                <p>Số lượng</p>
              </div>
              <button
                onClick={handleDecrease}
                className="border text-graxam font-bold  px-2 rounded-l ml-3"
              >
                -
              </button>
              <input
                className="w-14 text-center border-t border-b text-graxam font-semibold outline-none pl-3"
                type="number"
                value={count}
                readOnly
              />
              <button
                onClick={handleIncrease}
                className="border text-graxam font-bold  px-2 rounded-r"
              >
                +
              </button>
            </div>
            <div className="md:grid gap-4 grid-cols-2 pt-5  ">
              <button className="w-full h-10 p-2 bg-[#2f80ed] flex justify-center items-center text-white font-normal text-sm rounded-sm mb-[0.95rem]">
                Thêm vào giỏ hàng
              </button>
              <button className="w-full bg-[#2f80ed] h-10  p-2 flex justify-center items-center text-sm text-white font-normal  rounded-sm [0.95rem]">
                Mua ngay
              </button>
            </div>
            <div className="text-base mt-[0.95rem]">
              <p>
                Gọi mua hàng:
                <b className="text-[#2f80ed] font-normal text-xl ml-2">
                  0916495363
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
