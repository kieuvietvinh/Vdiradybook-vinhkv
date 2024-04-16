import React from "react";
import Statistical from "../statistical/Statistical";

const functions = [
  {
    id: 1,
    img: "/image-left/kiemvien.png",
    name: "Kiểm duyệt viên",
  },
  {
    id: 2,
    img: "/image-left/dinhanh.png",
    name: "Định danh cá nhân",
  },

  {
    id: 3,
    img: "/image-left/tailieu.png",
    name: "Tài liệu",
  },
  {
    id: 4,
    img: "/image/chat.png",
    name: "Trò chuyện",
  },
  {
    id: 5,
    img: "/image-left/danglam.png",
    name: "Đang làm",
  },
  {
    id: 6,
    img: "/image-left/lich.png",
    name: "Lịch",
  },
  {
    id: 7,
    img: "/image-left/sinhnhat.png",
    name: "Sinh nhật",
  },
  {
    id: 8,
    img: "/image-left/thoitiet.png",
    name: "Thời tiết",
  },
  {
    id: 9,
    img: "/image-left/amnhac.png",
    name: "Âm nhạc",
  },
];
const network = [
  {
    id: 1,
    img: "/image-left/nhatki.png",
    name: "Nhật Ký",
  },
  {
    id: 2,
    img: "/image-left/quehuong.png",
    name: "Tin tức quê hương",
  },
  {
    id: 3,
    img: "/image-left/toi.png",
    name: "Trang của tôi",
  },
  {
    id: 4,
    img: "/image-left/banbe.png",
    name: "Bạn bè",
  },
  {
    id: 5,
    img: "/image-left/so.png",
    name: "Sổ nhật Ký",
  },
  {
    id: 1,
    img: "/image-left/donvi.png",
    name: "Đơn vị, Chi nhánh",
  },
  {
    id: 1,
    img: "/image-left/thongbao.png",
    name: "Thông báo",
  },
];
const pages = [
  {
    id: 1,
    img: "/image/market.png",
    name: "Market Place",
  },
  {
    id: 2,
    img: "/image/blog.png",
    name: "Blog",
  },
  {
    id: 3,
    img: "/image/cuahang.png",
    name: "Cửa hàng",
  },
  {
    id: 4,
    img: "/image/mail.png",
    name: "Mail",
  },
  {
    id: 5,
    img: "/image/datbiet.png",
    name: "Trang đặt biệt",
  },
  {
    id: 6,
    img: "/image/tienich.png",
    name: "Tiện ích",
  },
  {
    id: 7,
    img: "/image/ramat.png",
    name: "Trang sắp ra mắt",
  },
];
const chatpage = [
  {
    id: 1,
    img: "/image/userone.png",
    name: "Huyền Thương",
    tatel: "Trò chuyện",
  },
  {
    id: 2,
    img: "/image/userone.png",
    name: " Xuân Hái",
    tatel: "5 phút trước",
  },
  {
    id: 3,
    img: "/image/userone.png",
    name: " Thanh Huyền",
    tatel: "5 phút trước",
  },
  {
    id: 4,
    img: "/image/userone.png",
    name: "Hà My",
    tatel: "Trò chuyện",
  },
];

const seach = [
  {
    id: 1,
    img: "/image/s1.png",
  },
  {
    id: 2,
    img: "/image/s2.png",
  },
  {
    id: 3,
    img: "/image/s3.png",
  },
  {
    id: 4,
    img: "/image/s4.png",
  },
  {
    id: 5,
    img: "/image/s5.png",
  },
  {
    id: 6,
    img: "/image/s6.png",
  },
  {
    id: 7,
    img: "/image/s7.png",
  },
  {
    id: 8,
    img: "/image/s8.png",
  },
];

const Calendar = () => {
  return (
    <div className="">
      <header className="shadow-md px-6 w-full">
        <div className="logo">
          <ul>
            <li className="max-[1024px]:hidden ">
              <a href="">
                <img src="/image/ngang.png" alt="user photo" />
              </a>
            </li>
            <li className="farm ">
              <a className="max-[1024px]:hidden" href="">
                <img src="/image/may.png" alt="user photo" />
              </a>
              <a className="max-[1024px]:hidden" href="">
                <p className="degree">Hà Nội, 24 độ C</p>
                <p className="cloud">Trời nắng</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="containerSeach  max-w-5xl flex  justify-between gap-6">
          <div>
            <a href=" ">
              <img
                className="w-full h-auto"
                src="/image/logo.png"
                alt="Flowbite Logo"
              />
            </a>
          </div>
          <form className="w-[498.22px]  max-[1024px]:hidden">
            <div className="flex">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-[#1F1F1F]  border border-[#DADADA] rounded-s-full gap-2   "
                type="button"
              >
                <img src="/image/mn.png" alt="" />
                Mọi người
                <img className="pl-2" src="/image/muixuong.png" alt="" />
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y  rounded-full shadow w-44 "
              ></div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-[#1F1F1F] bg-white rounded-e-full border-s-gray-50 border-s-2 border border-gray-300 "
                  placeholder="Tìm kiếm Vdiraybook..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 left-0 end-0 p-2.5 text-sm font-medium h-full text-[#838383]"
                >
                  <img className="w-6 h-6" src="/image/Search1.png" alt="" />
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center gap-4 pl-4">
            {seach.map((seac) => (
              <ul key={seac.id}>
                <li>
                  <a href="">
                    <img src={seac.img} alt="" />
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="user ">
          <div className="max-[1024px]:hidden">
            <ul className="">
              <li>
                <a href="">
                  <img src="/image/home.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/user.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/chat.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/sos.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/notification.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/userone.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="mx-auto pt-2">
        <Statistical />
      </div>
      <div className="container">
        <div className="left absolute left-0 top-[70px] z-10 max-[1024px]:hidden ">
          <div className="leftone">
            <div className="community py-2">
              <p>TRANG CỘNG ĐỒNG</p>
              <img src="/image-left/may.png" alt="" />
            </div>
            <p className="py-2">MẠNG XÃ HỘI</p>
            {network.map((net) => (
              <ul>
                <li>
                  <a href="#">
                    <img src={net.img} alt="" />
                    <span>{net.name}</span>
                    <img
                      className="arrow"
                      src="/image-left/muiten.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            ))}
          </div>
          <div className="pt-2">
            <div>
              <p>CHỨC NĂNG</p>
            </div>
            {functions.map((funct) => (
              <ul key={funct.id}>
                <li>
                  <a href="#">
                    <img src={funct.img} alt="" />
                    <span>{funct.name}</span>
                  </a>
                </li>
              </ul>
            ))}
          </div>
          <div className=" relative pt-2">
            <div>
              <p>NHỮNG TRANG KHÁC</p>
            </div>
            {pages.map((page) => (
              <ul key={page.id}>
                <li>
                  <a href="#">
                    <img src={page.img} alt="" />
                    <span> {page.name} </span>
                    <img
                      className="arrow"
                      src="/image-left/muiten.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="right max-[1024px]:hidden ">
          <div>
            <div className="right-page">
              <p>Trò chuyện</p>
              <div className="sting">
                <img src="/image-left/caidat.png" alt="" />
                <img src="/image-left/usercong.png" alt="" />
              </div>
            </div>
            <div className="">
              <ul className="useres">
                <li>
                  <a className="one" href="">
                    <img src="/image-left/usereys.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/image-left/useres.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {chatpage.map((chat) => (
            <div className="">
              <div className="userone">
                <a href="">
                  <img className="onemo" src={chat.img} alt="" />
                  <img className="towmo" src="/image-left/Ensign.png" alt="" />
                </a>
                <div>
                  <div className="chatone">
                    {chat.name}
                    <img className="teck" src="/image-left/teck.png" alt="" />
                  </div>
                  <div className="chattow">
                    <img className="sys" src="/image-left/tim.png" alt="" />
                    <div className="chattrue">
                      <img src="/image/chat.png" alt="" />
                      <p>{chat.tatel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
