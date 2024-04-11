import React from "react";
import Statistical from "../statistical/Statistical";

const Calendar = () => {
  return (
    <div className="">
      <header className="shadow-md">
        <div className="logo">
          <ul>
            <li>
              <a href=" ">
                <img src="/image/logo.png" alt="Flowbite Logo" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/image/ngang.png" alt="user photo" />
              </a>
            </li>
            <li className="farm">
              <a href="">
                <img src="/image/may.png" alt="user photo" />
              </a>
              <a href="">
                <p className="degree">Hanoi, 30.02°C</p>
                <p className="cloud">Mây cụm</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="seach">
          <form className="max-w-[600px] mx-auto">
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
        <div className="user">
          <div>
            <ul>
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
        <div className="left">
          <div className="leftone">
            <div className="community ">
              <p>TRANG CỘNG ĐỒNG</p>
              <img src="/image-left/may.png" alt="" />
            </div>
            <p>MẠNG XÃ HỘI</p>
            <ul>
              <li>
                <a href="#">
                  <img src="/image-left/nhatki.png" alt="" />
                  <span>Nhật Ký</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/quehuong.png" alt="" />
                  <span>Tin tức quê hương</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/toi.png" alt="" />
                  <span>TRang của tôi</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/banbe.png" alt="" />
                  <span>Bạn bè</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/so.png" alt="" />
                  <span>Sổ nhật kí</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/donvi.png" alt="" />
                  <span>Đơn vị, Chi nhánh</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/thongbao.png" alt="" />
                  <span>Thông báo</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <p>CHỨC NĂNG</p>
            </div>
            <ul>
              <li>
                <a href="#">
                  <img src="/image-left/kiemvien.png" alt="" />
                  <span>Kiểm duyệt viên</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/dinhanh.png" alt="" />
                  <span>Định danh cá nhân</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/tailieu.png" alt="" />
                  <span>Tài liệu</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image/chat.png" alt="" />
                  <span>Trò chuyện</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/danglam.png" alt="" />
                  <span>Đang làm</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/lich.png" alt="" />
                  <span>Lịch</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/sinhnhat.png" alt="" />
                  <span>Sinh nhật </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/thoitiet.png" alt="" />
                  <span>Thời tiết </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/amnhac.png" alt="" />
                  <span>Âm nhạc </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <p>NHỮNG TRANG KHÁC</p>
            </div>
            <ul>
              <li>
                <a href="#">
                  <img src="/image-left/kiemvien.png" alt="" />
                  <span>Market Place</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/dinhanh.png" alt="" />
                  <span>Blog</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/tailieu.png" alt="" />
                  <span>Cửa hàng</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image/chat.png" alt="" />
                  <span>Mail</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/danglam.png" alt="" />
                  <span>TRang đặt biệt</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/lich.png" alt="" />
                  <span>Tiện ích</span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/image-left/sinhnhat.png" alt="" />
                  <span> Trang sắp ra mắt </span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Statistical />
        </div>

        <div className="right">
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
              <img className="onemo" src="/image/userone.png" alt="" />
              <img className="towmo" src="/image-left/Ensign.png" alt="" />
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
