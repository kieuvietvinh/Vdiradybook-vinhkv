import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const autor = [
  {
    id: 1,
    img: "https://ocopmart.org/static/media/images/product-category/2022_01_14/s80_80/giay-dep-do-da-01-1642151545.png",
    name: " SẢN PHẨM VIP",
  },
  {
    id: 2,
    img: "https://ocopmart.org/static/media/images/product-category/2022_01_14/s80_80/ocop-worker-01-1642151528.png",
    name: "OCOP WORKER ",
  },
  {
    id: 3,
    img: "https://ocopmart.org/static/media/images/product-category/2022_01_14/s80_80/ban-cung-01-1642151566.png",
    name: "BÁN CÙNG",
  },
  {
    id: 4,
    img: "https://ocopmart.org/static/media/images/product-category/2022_01_14/s80_80/san-pham-chung-nhan-ocop-mart-01-1642151578.png",
    name: "SẢN PHẨM OCOPMART",
  },
  {
    id: 5,
    img: "https://ocopmart.org/static/media/images/product-category/2022_01_14/s80_80/tiepthiso-marrt-01-1642151604.png",
    name: "TIẾP THỊ SỐ MART",
  },
  {
    id: 6,
    img: "https://ocopmart.org/static/media/images/product-category/2022_01_14/s80_80/trang-suc-01-1642151617.png",
    name: "TRANG SỨC",
  },
  {
    id: 7,
    img: "https://ocopmart.org/static/media/images/product-category/2022_01_14/s80_80/ocoop-heathy-01-1642151628.png",
    name: "OCOP HEATHY",
  },
  {
    id: 8,
    img: "https://ocopmart.org/static/media/images/product-category/2022_06_13/s80_80/2-1655115239.png",
    name: "OCOP MAIL",
  },
];
const nabar = [
  {
    id: 1,
    tabel: "SỰ KIỆN - TUYỂN DỤNG",
    link: "/page",
  },
  {
    id: 2,
    tabel: " Mua - Bán",
  },
  {
    id: 3,
    tabel: "TIN TỨC OCOP",
  },
  {
    id: 4,
    tabel: "Diễn đànG",
  },
  {
    id: 5,
    tabel: "TÀI LIỆU - VĂN BẢN",
  },
  {
    id: 6,
    tabel: "Video",
  },
];
const rating = [
  {
    id: 1,
    img: (
      <svg
        className="w-[0.9rem] h-[0.9rem] text-yellow-300 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ),
  },
  {
    id: 2,
    img: (
      <svg
        className="w-[0.9rem] h-[0.9rem] text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ),
  },
  {
    id: 3,
    img: (
      <svg
        className="w-[0.9rem] h-[0.9rem] text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ),
  },
  {
    id: 4,
    img: (
      <svg
        className="w-[0.9rem] h-[0.9rem] text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ),
  },
  {
    id: 5,
    img: (
      <svg
        className="w-[0.9rem] h-[0.9rem] text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ),
  },
];
const product = [
  {
    id: 1,
    img: "https://ocopmart.org/static/media/images/news/s200_200/bnao-1624812115-1636964564.jpg",
    name: "VIÊN BỔ NÃO THÔNG MẠCH CERE BRAIN MAX",
    price: 280.0,
    address: "Hà Nội",
    cart: "Thêm Vào",
    brand: "Công ty Cổ phần Tiếp Thị số VZone Digital Marketin",
  },
  {
    id: 2,
    img: "https://ocopmart.org/static/media/images/news/s200_200/bnao-1624812115-1636964564.jpg",
    name: "VIÊN BỔ NÃO THÔNG MẠCH CERE BRAIN MAX",
    price: 280.0,
    address: "Hà Nội",
    cart: "Thêm Vào",
    brand: "Công ty Cổ phần Tiếp Thị số VZone Digital Marketin",
  },
  {
    id: 3,
    img: "https://ocopmart.org/static/media/images/news/s200_200/bnao-1624812115-1636964564.jpg",
    name: "VIÊN BỔ NÃO THÔNG MẠCH CERE BRAIN MAX",
    price: 280.0,
    address: "Hà Nội",
    cart: "Thêm Vào",
    brand: "Công ty Cổ phần Tiếp Thị số VZone Digital Marketin",
  },
  {
    id: 4,
    img: "https://ocopmart.org/static/media/images/news/s200_200/bnao-1624812115-1636964564.jpg",
    name: "VIÊN BỔ NÃO THÔNG MẠCH CERE BRAIN MAX",
    price: 280.0,
    address: "Hà Nội",
    cart: "Thêm Vào",
    brand: "Công ty Cổ phần Tiếp Thị số VZone Digital Marketin",
  },
];
const trend = [
  {
    id: 1,
    img: "https://ocopmart.org/static/media/images/product/2022_07_27/s100_100/imagepickera3c43cd3-e31a-4e92-9d39-81993939fdf6-44427-00001a344de2f948-1658879017.jpg",
    brand: "trà",
  },
  {
    id: 2,
    img: "https://ocopmart.org/static/media/images/product/2022_07_27/s100_100/imagepickera3c43cd3-e31a-4e92-9d39-81993939fdf6-44427-00001a344de2f948-1658879017.jpg",
    brand: "gà",
  },
  {
    id: 3,
    img: "https://ocopmart.org/static/media/images/shop/s100_100/tra-gung-htc-1654170996.png",
    brand: "trứng",
  },
  {
    id: 4,
    img: "https://ocopmart.org/static/media/images/shop/s100_100/ee9734e21d45dd1b8454-1655022957.jpg",
    brand: "gạo",
  },
  {
    id: 5,
    img: "https://ocopmart.org/static/media/images/product/2022_07_27/s100_100/imagepickera3c43cd3-e31a-4e92-9d39-81993939fdf6-44427-00001a344de2f948-1658879017.jpg",
    brand: "mật ong",
  },
  {
    id: 6,
    img: "https://ocopmart.org/static/media/images/shop/s100_100/10-tra-sua-600x849-1655134721.jpg",
    brand: "trà sữa",
  },
  {
    id: 7,
    img: "https://ocopmart.org/static/media/images/product/2022_07_27/s100_100/imagepickera3c43cd3-e31a-4e92-9d39-81993939fdf6-44427-00001a344de2f948-1658879017.jpg",
    brand: "cà phê",
  },
  {
    id: 8,
    img: "https://ocopmart.org/static/media/images/product/2022_07_27/s100_100/imagepickera3c43cd3-e31a-4e92-9d39-81993939fdf6-44427-00001a344de2f948-1658879017.jpg",
    brand: "giỏ hoa",
  },
  {
    id: 9,
    img: "https://ocopmart.org/static/media/images/product/2022_07_27/s100_100/imagepickera3c43cd3-e31a-4e92-9d39-81993939fdf6-44427-00001a344de2f948-1658879017.jpg",
    brand: "rau",
  },
  {
    id: 10,
    img: "https://ocopmart.org/static/media/images/product/2022_07_27/s100_100/imagepickera3c43cd3-e31a-4e92-9d39-81993939fdf6-44427-00001a344de2f948-1658879017.jpg",
    brand: "nem chua Thanh Hóa",
  },
];
const category = [
  { id: 1, name: "SẢN PHẨM VIP" },

  { id: 1, name: "GIÁO DỤC - EDUCATION" },

  { id: 1, name: "    TIN VIP MUA - BÁN" },

  { id: 1, name: "OCOP WORKER" },

  { id: 1, name: "    ƯU ĐÃI" },

  { id: 1, name: " BÁN CÙNG" },

  { id: 1, name: " OCOP WORKER" },

  { id: 1, name: "    Gia vị thực phẩm" },

  { id: 1, name: "TIEPTHISO MART" },

  { id: 1, name: "TRANG SỨC" },

  { id: 1, name: " OCOP HEATHY" },

  { id: 1, name: "  SIÊU THỊ SẢN PHẨM OCOP" },

  { id: 1, name: "  DOANH NGHIỆP SẢN XUẤT " },

  { id: 1, name: "    Trứng các loại" },

  { id: 1, name: "  Thực phẩm chế biến sẵn" },

  { id: 1, name: "ĐẶC SẢN VÙNG MIỀN" },

  { id: 1, name: " OCOP MALL" },

  { id: 1, name: "NÔNG NGHIỆP" },

  { id: 1, name: "  Nhà hàng - Quán ăn" },

  { id: 1, name: "OCOP AFFILIATE MARKETING" },

  { id: 1, name: " Sản phẩm - dịch vụ khác" },

  { id: 1, name: "    QUÀ TẶNG 365" },

  { id: 1, name: "    Thủy - Hảisản" },

  { id: 1, name: " NHA KHOA" },

  { id: 1, name: "    Các loại thịt" },
];
const nation = [
  {
    id: 1,
    img: "https://ocopmart.org/static/media/images/menu/2021_04_02/flag-vi-1617351315.png",
  },
  {
    id: 2,
    img: "https://ocopmart.org/static/media/images/menu/2021_04_02/flag-fr-1617352540.png",
  },
  {
    id: 3,
    img: "https://ocopmart.org/static/media/images/menu/2021_04_02/flag-td-1617352424.png",
  },
  {
    id: 4,
    img: "https://ocopmart.org/static/media/images/menu/2021_04_02/flag-kn-1617352462.png",
  },
  {
    id: 5,
    img: "https://ocopmart.org/static/media/images/menu/2021_04_02/flag-us-1617352485.png",
  },
];

const Home_page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="font-roboto lg:max-w-screen-xl  mx-auto w-full max-w-screen-xl bg-[#fafafa]">
      <div>
        <ul className="flex gap-4 ">
          <li className="bg-blue-500 text-white p-3">
            <a href="/page">Màn thống kê truy cập</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/orderdetails">Màn thanh toán</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/populartopic">Màn đặt câu hỏi</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/contribute">Màn đạt câu hỏi</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/details">Màn mua hàng</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/newbranch">Màn thêm nhánh mới</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/quotations">Màn danh ngôn</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/user">Màn người dùng</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/utilities">Màn tiện ích</a>
          </li>
          <li className="bg-blue-500 text-white p-3">
            <a href="/suggest">Màn gợi ý kết bạn</a>
          </li>
        </ul>
      </div>
      <div className=" justify-between items-center p-4 lg:grid lg:grid-cols-5  grid-cols-1 gap-4 bg-white flex">
        <div>
          <img
            src="https://ocopmart.org/static/media/images/siteinfo/2021_07_30/s150_150/logo-web-1627642464.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>
        <div className=" lg:col-span-3  border-2 border-[#2f80ed] max-[900px]:hidden flex">
          <form className="max-w-sm mx-auto ">
            <select className="bg-gray-50  text-[#000] font-normal text-sm  block w-full px-2.5 h-[40px]">
              <option>Sản phẩm</option>
              <option>Doanh nghiệp</option>
            </select>
          </form>
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            className="border-l lg:w-[255px] h-[40px] px-2  text-[13px] text-[#dedede]"
          />
          <input
            type="text"
            placeholder=" Nhập vị trí của bạn"
            className="border-l lg:w-[255px] h-[40px] px-2  text-[13px] text-[#dedede]"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[40px] px-4 ">
            Tìm kiếm
          </button>
        </div>
        <div>
          <div className="flex items-center gap-4 justify-end ">
            <img
              className="w-10 h-10 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <div className="font-medium text-sm text-[#2f80ed]">
              <div>Giỏ hàng</div>
              <div className="text-sm text-[#000] font-normal">0 Sản phẩm</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mt-5">
          <div className="text-sm font-normal text-center text-[#2f80ed] border-b border-[#2f80ed] uppercase flex bg-white">
            {nabar.map((nab) => (
              <ul key={nab.id} className="flex flex-wrap  pt-[0.6rem]">
                <li className="me-2">
                  <a
                    href="/page"
                    className="inline-block  pl-[1.6rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                  >
                    {nab.tabel}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-4  grid-cols-1 gap-4  pt-3 bg-white">
          <div className="col-span-2 ">
            <Slider {...settings}>
              <div>
                <img
                  className="w-full rounded-md"
                  src="https://ocopmart.org/static/media/files/banners/s800_800/889_1672726212_22463b3c6c441315.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full rounded-md"
                  src="https://ocopmart.org/static/media/files/banners/s800_800/815_1672725428_22663b3c3b428b25.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full rounded-md"
                  src="https://ocopmart.org/static/media/files/banners/s800_800/874_1672725493_90363b3c3f5e2b85.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>
          <div className="">
            <div className="pb-[5px] overflow-hidden">
              <img
                className="w-full rounded-md hover:scale-110 hover:delay-75 hover:duration-150"
                src="https://ocopmart.org/static/media/files/banners/s800_800/874_1672725493_90363b3c3f5e2b85.jpg"
                alt=""
              />
            </div>

            <div className=" overflow-hidden">
              <img
                className="w-full rounded-md hover:scale-110 hover:delay-75 hover:duration-150"
                src="https://ocopmart.org/static/media/files/banners/s800_800/848_1634452050_979616bc252a0d32.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex  p-2 bg-white">
          <div className="w-[65%] flex justify-between py-[15px]">
            <div className="text-[#2f80ed] font-semibold text-[17px] flex items-center justify-center">
              Danh mục
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://ocopmart.org/static/media/files/banners/286_1650352902_1000625e630614097.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://ocopmart.org/static/media/files/banners/791_1650352892_378625e62fc31094.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-[35%] pl-[5px] pt-[5px] ">
            <div className="overflow-hidden float-right">
              <img
                className="max-w-full max-h-[122px]  rounded-md hover:scale-110 hover:delay-75 hover:duration-150"
                src="https://ocopmart.org/static/media/files/banners/s800_800/953_1657167413_39562c65e35cfad6.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full flex  bg-white border  overflow-scroll object-none">
          {autor.map((item) => (
            <div
              key={item.id}
              className="lg:px-2 px-0.5 bg-white border-l  h-[154px] w-[154px] min-w-[154px] "
            >
              <div className=" flex items-center justify-center p-[10px] ">
                <a href="">
                  <img
                    className="rounded-md w-[80px] h-[80px]"
                    src={item.img}
                    alt=""
                  />
                </a>
              </div>
              <div className="mt-[3px] ">
                <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal  text-center">
                  <a href="">{item.name}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 w-full bg-white h-[80px] pb-[16px] overflow-scroll">
        <div className="grid grid-cols-9 border-b-2 items-center">
          <div className="bg-[#4284f3]  px-4 w-32 h-16   flex justify-center items-center relative">
            <div className=" text-white text-[15px] font-medium uppercase relative">
              Sản phẩm hot
            </div>
            <div className=" ">
              <div className=" before:w-[45px] before:h-[46px]   before:bg-[#4284f3] before:block  before:border-4 before:border-solid before:border-transparent before:border-t-4 before:border-l-4 before:border-r-4 before:border-b-4  before:transform before:-rotate-45 before:absolute before:top-[9px] before:-right-[22px]"></div>
            </div>
          </div>
          {autor.map((item) => (
            <div key={item.id} className=" px-[15px] py-[5px] h-auto">
              <div className=" flex items-center justify-center ">
                <a href="">
                  <img className="rounded-md w-7 h-7" src={item.img} alt="" />
                </a>
              </div>
              <div className="mt-[3px] ">
                <div className=" text-xs text-[#000] font-normal  text-center line-clamp-1">
                  <a href="">{item.name}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[#2f80ed] font-semibold text-[1.06rem] ">
        SẢN PHẨM VIP
      </p>
      <div className="lg:grid lg:grid-cols-6 grid-w-fullcols-2 gap-2  w-full pt-5">
        <div className="col-span-2  ">
          <img
            className="h-[23rem] w-full"
            src="https://ocopmart.org/static/media/files/banners/366_1646794299_5916228163b8ac69.jpg"
            alt=""
          />
        </div>
        {product.map((ocop) => (
          <div key={ocop.id} className="bg-white shadow-md  ">
            <div className="w-full h-auto bg-white  overflow-hidden">
              <img
                className="hover:scale-110 hover:delay-300 hover:duration-300"
                src={ocop.img}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-[#000] text-sm font-normal py-[1px] px-[10px]">
                {ocop.name}
              </h3>
            </div>
            <div className="pt-5 py-[1px] px-[10px]">
              <span className="text-[#262261] font-normal text-sm ">
                {ocop.price} đ
              </span>
            </div>
            <div className="flex relative py-[1px] px-[10px]">
              <div>
                <span className="text-black text-[13px] font-normal leading-[1.5px]">
                  {ocop.address}
                </span>
              </div>
              <div className="absolute right-1 mt-[6px]">
                <button className="bg-[#262261] text-white font-normal text-sm py-[2px] px-[4px] rounded-sm ">
                  {ocop.cart}
                </button>
              </div>
            </div>
            <div className="flex justify-center  text-[#262261] text-[13px] mt-[10px] font-normal leading-3">
              <p className="line-clamp-1">{ocop.brand}</p>
            </div>
            <div className=" flex pt-2 relative">
              {rating.map((raty) => (
                <div className="border-yellow-400" key={raty.id}>
                  {raty.img}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 ">
        <img
          className="w-full"
          src="https://ocopmart.org/static/media/files/banners/s1920_1080/396_1646797915_3966228245bd5cec.jpg"
          alt=""
        />
      </div>
      <div className="mt-5">
        <div className="pb-[10px] border-b border-[#dedede] mb-3">
          <p className="text-[#2f80ed] uppercase font-semibold text-[17px]">
            Xu hướng tìm kiếm
          </p>
        </div>
        <div className="grid grid-cols-10 gap-2 bg-white">
          {trend.map((tren) => (
            <div key={tren.id} className="relative ">
              <img src={tren.img} alt="" />
              <h3 className="bg-black bg-opacity-40 w-full line-clamp-1 absolute text-white font-normal text-[13px] h-[26px] left-0 right-0 bottom-0 text-center py-[5px]">
                {tren.brand}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-4  grid-cols-1 gap-5 pt-5">
        <div className="col-span-2 bg-white">
          <div>
            <div className="overflow-hidden">
              <a href="">
                <img
                  className="hover:scale-110 hover:delay-100 hover:duration-300"
                  src="https://ocopmart.org/static/media/images/news/2022_05_18/s700_700/z3422643372693b31c1498dadfaef561cb10691b2f8a48-1652844702.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="p-5">
              <h3 className="text-[#3f3f3f] font-bold text-lg ">
                HỘI CHỢ TRIỂN LÃM THƯƠNG MẠI VÀ GIỚI THIỆU SẢN PHẨM OCOP KHU VỰC
                TÂY NGUYÊN – GIA LAI VÀ GIAO THƯƠNG DOANH NGHIỆP NHẬT BẢN NĂM
                2022
              </h3>
              <div className="text-[#828282] font-normal text-[13px] flex">
                <p>18/05/2022</p>
                <p>Tác giả: Ocopmart</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-white">
            <div className="overflow-hidden">
              <a href="">
                <img
                  className="hover:scale-110 hover:delay-100 hover:duration-300 w-full"
                  src="https://ocopmart.org/static/media/images/news/2022_06_17/s300_300/ocop-1655474327.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="p-3">
              <h2 className="text-[#3f3f3f] text-base font-bold">
                Thành phố Hà Nội công bố các sản phẩm OCOP
              </h2>
              <div className="flex">
                <p className="text-[#828282] text-[13px] font-normal">
                  17/06/2022
                </p>
                <p className="text-[#828282] text-[13px] font-normal">
                  Tác giả: Nguyễn Phương Thảo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-white">
            <h2 className="bg-[#2f80ed] h-11 w-full text-sm font-normal text-white uppercase flex items-center pl-5">
              Video
            </h2>
            <div className="flex px-[10px] py-[15px]">
              <a href="">
                <img
                  src="https://ocopmart.org/static/media/images/video/s100_100/349_1635340084_68061794f3415f91.jpg"
                  alt="Thành Phố Cà Mau chi 18 tỷ đồng. Để tham gia chương trinh OCOP"
                />
              </a>
              <h3 className="text-sm font-normal text-[#000] pl-2">
                Thành Phố Cà Mau chi 18 tỷ đồng. Để tham gia chương trinh OCOP
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 flex bg-white ">
          <div className="overflow-hidden">
            <a href="">
              <img
                className="hover:scale-110 hover:delay-100 hover:duration-300 "
                src="https://ocopmart.org/static/media/images/news/2022_06_14/s300_300/thiet-ke-chua-co-ten-10-1655212196.png"
                alt=""
              />
            </a>
          </div>
          <div className="p-5 w-full">
            <h3 className="font-bold text-base text-[#3f3f3f] ">
              Năm 2021, Hà Nội có 595 sản phẩm được đánh giá phân hạng OCOP
            </h3>
            <div className="font-normal text-sm text-[#000]">
              Chiều 30-12, Hội đồng đánh giá, phân hạng sản phẩm OCOP Hà Nội đã
              tổ chức Hội nghị đánh giá, phân hạng sản phẩm OCOP thành phố năm
              2021.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:grid lg:grid-cols-4 gap-2 grid grid-cols-1 pt-5 mt-[30px]">
          <div className=" px-[15px]">
            <div>
              <h2 className="font-medium text-base text-[#333] mb-5">
                CỘNG ĐỒNG KINH DOANH và TIÊU DÙNG THÔNG MINH OCOP COMMUNITY
              </h2>
              <ul className="text-[#333] font-normal text-sm">
                <li className="mt-[3px]">
                  <a className="hover:text-[#2f80ed]" href="">
                    Quy định sử dụng tính năng Gian hàng trên Ocopmart.org
                  </a>
                </li>
                <li className="mt-[3px]">
                  <a className="hover:text-[#2f80ed]" href="">
                    Quy trình giải quyết tranh chấp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-[15px]">
            <div>
              <h2 className="font-medium text-base text-[#333] mb-5">
                HỖ TRỢ KHÁCH HÀNG
              </h2>
              <ul className="text-[#333] font-normal text-sm">
                <li className="mt-[3px]">
                  <a className="hover:text-[#2f80ed]" href="">
                    {" "}
                    QUY CHẾ HOẠT ĐỘNG{" "}
                  </a>
                </li>
                <li className="mt-[3px]">
                  <a className="hover:text-[#2f80ed]" href="">
                    Trung tâm hỗ trợ khách hàng
                  </a>
                </li>
                <li className="mt-[3px]">
                  <a className="hover:text-[#2f80ed]" href="">
                    Chính sách Bảo mật thông tin cá nhân
                  </a>
                </li>
                <li className="mt-[3px]">
                  <a className="hover:text-[#2f80ed]" href="">
                    Hỗ trợ vận chuyển
                  </a>
                </li>
              </ul>
              <div className="flex mt-[25px]">
                <div>
                  <a href="">
                    <img
                      src="https://ocopmart.org/images/icon-phone.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="pl-5">
                  <p className="font-normal text-sm text-[#000]">
                    Giải đáp thắc mắc, khiếu nại,...
                  </p>
                  <a
                    className="text-[#2f80ed] font-bold text-sm"
                    href="02466.623.632"
                  >
                    02466.623.632
                  </a>
                  <a
                    className="text-[#2f80ed] font-bold text-sm"
                    href="0986.29.00.22"
                  >
                    {" "}
                    0986.29.00.22
                  </a>
                </div>
              </div>
              <div className="flex mt-[25px]">
                <div>
                  <a href="">
                    <img
                      src="	https://ocopmart.org/images/icon-email.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="pl-5">
                  <p className="font-normal text-sm text-[#000]">
                    Hòm thư góp ý
                  </p>
                  <a
                    className="text-[#2f80ed] font-bold text-sm"
                    href="lienhe.ocopmart@gmail.com"
                  >
                    lienhe.ocopmart@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2  px-[15px]">
            <h2 className="font-medium text-base text-[#333] uppercaseb mb-5">
              ĐĂNG KÝ NHẬN TIN TỪ ocopmart.org
            </h2>
            <div>
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center  "></div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-[10px]  text-sm text-[#000] border border-[#ebe2e2] font-light bg-white"
                    placeholder="Nhập email"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute text-[13px] px-[30px] py-[12px]  bottom-0 right-0 bg-[#2f80ed] font-normal uppercase"
                  >
                    đăng ký
                  </button>
                </div>
              </form>
              <div className="w-full flex gap-2 items-center mt-3">
                <a href="">
                  <img
                    className="max-h-[50px] max-w-full"
                    src="	https://ocopmart.org/static/media/images/siteinfo/2021_07_30/icon-app-2-1627642481.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="max-h-[50px] max-w-full"
                    src="	https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=d4ad83d9-300b-4422-a7e5-03a24d303874"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="max-h-[50px] max-w-full"
                    src="	https://ocopmart.org/images/imglg2.jpg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="max-h-[50px] max-w-full"
                    src="	https://ocopmart.org/images/apple-store.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="max-h-[50px] max-w-full"
                    src="https://ocopmart.org/images/logo-app1.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h2 className="text-[#000] font-normal text-sm">0109597338</h2>
                <a href="">
                  <p className="text-[#979797] font-normal text-xs italic">
                    CÔNG TY CỔ PHẦN ĐẦU TƯ VZONE GLOBAL - Giấy chứng nhận đăng
                    ký kinh doanh số 0109329515 do sở Kế hoạch và đầu tư thành
                    phố Hà Nội cấp ngày 01/09/2020 - Người đại diện theo pháp
                    luật: Lê Trung Hiếu- Địa chỉ trụ sở chính: Số 16 ngõ 79
                    Triều Khúc, Phường Thanh Xuân Bắc, Quận Thanh Xuân, Thành
                    phố Hà Nội, Việt Nam- Số điện thoại: 02466.623.632 -
                    0986.29.00.22 - email: lienhe.ocopmart@gmail.com.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 py-[30px]">
          <h2 className="uppercase font-medium text-base text-[#333] mb-5 ">
            Danh mục sản phẩm
          </h2>
          <div className="flex flex-wrap">
            {category.map((catary) => (
              <div
                key={catary.id}
                className="uppercase text-[#7d7d7d] font-normal  hover:border-b "
              >
                <a
                  className="hover:border-b hover:border-blue-600 hover:text-[#2f80ed] whitespace-nowrap text-[13px]"
                  href="/"
                >
                  {catary.name},
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className=" lg:grid lg:grid-cols-4 grid grid-cols-1  pt-5 mt-[30px] ">
            <div className="px-[15px]">
              <h2 className="font-medium text-base text-[#333] leading-6 uppercase">
                Quốc gia khu vực
              </h2>
              <div className="flex ">
                {nation.map((nati) => (
                  <ul key={nati.id}>
                    <li>
                      <a href="">
                        <img src={nati.img} alt="" />
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="px-[15px]">
              <h2 className="font-medium text-base text-[#333] leading-6 uppercase">
                Kết nối với chúng tôi
              </h2>
            </div>
            <div className="px-[15px]"></div>
            <div className=" px-[15px] ">
              <h2 className="font-medium text-base text-[#333] leading-6 uppercase">
                hình thức vận chuyển
              </h2>
              <ul>
                <li>
                  <a href="/" title="Viettel Post">
                    <img
                      className="max-h-[50px] max-w-full"
                      src="https://ocopmart.org/static/media/images/menu/2021_10_05/fotpayment2logo3adeaafb66a984ecf9070f8f10d934158-1633405060.png"
                      alt="Viettel Post"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center font-normal text-[#000] text-sm">
            CÔNG TY CỔ PHẦN ĐẦU TƯ VZONE GLOBAL - Giấy chứng nhận đăng ký kinh
            doanh số 0109329515 do sở Kế hoạch và đầu tư thành phố Hà Nội cấp
            ngày 01/09/2020 - Người đại diện theo pháp luật: Lê Trung Hiếu- Địa
            chỉ trụ sở chính: Số 16 ngõ 79 Triều Khúc, Phường Thanh Xuân Bắc,
            Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam- Số điện thoại:
            02466.623.632 - 0986.29.00.22 - email: lienhe.ocopmart@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home_page;
