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

const Calendar = () => {
  return (
    <div className="">
      <header className="shadow-md px-2">
        <div className="logo">
          <ul>
            <li>
              <a href=" ">
                <img src="/image/logo.png" alt="Flowbite Logo" />
              </a>
            </li>
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
                <p className="degree">Hanoi, 30.02°C</p>
                <p className="cloud">Mây cụm</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="seach ">
          <form className="max-w-[600px] mx-auto max-[1024px]:hidden ">
            <div className="flex">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[#1F1F1F] bg-[#F2F2F2] border border-[#DADADA] rounded-s-full gap-2   "
                type="button"
              >
                <img src="/image/image.png" alt="" />
                Hình ảnh
                <img src="/image/muiten.png" alt="" />
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-full shadow w-44 "
              ></div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-[#1F1F1F] bg-white rounded-e-full border-s-gray-50 border-s-2 border border-gray-300 "
                  placeholder="Thu Hương"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-[#838383]"
                >
                  <img src="/image/Search1.png" alt="" />
                </button>
              </div>
            </div>
          </form>
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
      <div className="container">
        <div className="left absolute left-0 top-[72px] z-10 max-[1024px]:hidden ">
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
        <div className="mx-auto">
          <Statistical />
        </div>
        <div className="right max-[1024px]:hidden">
          <div>
            <div className="right-page">
              <p>Trò chuyện</p>
              <div className="sting">
                <img src="/image-left/caidat.png" alt="" />
                <img src="/image-left/usercong.png" alt="" />
              </div>
            </div>
            <div className="useres">
              <ul>
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
          <div className="">
            <div className="userone">
              <a href="">
                <img className="onemo" src="/image/userone.png" alt="" />
                <img className="towmo" src="/image-left/Ensign.png" alt="" />
              </a>
              <div>
                <div className="chatone">
                  Huyền Thương
                  <img className="teck" src="/image-left/teck.png" alt="" />
                </div>
                <div className="chattow">
                  <img className="sys" src="/image-left/tim.png" alt="" />
                  <div className="chattrue">
                    <img src="/image/chat.png" alt="" />
                    <p>Trò chuyện</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="userone">
              <img className="onemo" src="/image/userone.png" alt="" />
              <img className="towmo" src="/image-left/Ensign.png" alt="" />
              <div>
                <div className="chatone">
                  Xuân Hái
                  <img className="teck" src="/image-left/teck.png" alt="" />
                </div>
                <div className="chattowminit">
                  <img
                    className="sysminit"
                    src="/image-left/timxanh.png"
                    alt=""
                  />
                  <div className="chattrueminit">
                    <p>5 phút trước</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
