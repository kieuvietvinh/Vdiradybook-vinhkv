import React, { useState } from "react";
import HierarchySlide from "../hierarchy/HierarchySlide";
import { Link } from "react-router-dom";

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
const linkpage = [
  {
    id: 1,
    page: "Màn thống kê truy cập",
    link: "/page",
  },
  {
    id: 2,
    page: "Màn thanh toán",
    link: "/orderdetails",
  },
  {
    id: 3,
    page: "Màn đặt câu hỏi",
    link: "/populartopic",
  },
  {
    id: 4,
    page: "Màn bạn cần giúp đỡ gì",
    link: "/contribute",
  },
  {
    id: 5,
    page: "Màn thêm nhánh mới",
    link: "/details",
  },
  {
    id: 6,
    page: "Màn danh ngôn",
    link: "/quotations",
  },
  {
    id: 7,
    page: "Màn người dùng",
    link: "/user",
  },
  {
    id: 8,
    page: "Màn tiện ích",
    link: "/utilities",
  },
  {
    id: 9,
    page: "Màn gợi ý kết bạn",
    link: "/suggest",
  },
  {
    id: 8,
    page: "Màn niêm yết",
    link: "/mana",
  },
  {
    id: 9,
    page: "Màn tìm liệt sĩ",
    link: "/findList",
  },
];
const SlidebarLfet = () => {
  return (
    <div>
      <div className="left absolute left-0 top-[70px] z-10 max-[1024px]:hidden ">
        <div className="leftone">
          <div className=" py-2 gap-2  text-center grid grid-cols-2 ">
            <p className="text-[#4284F3] font-normal text-sm border-b-2 border-[#4284F3]">
              Home feed
            </p>
            <p className="text-[#636363] font-normal text-sm ">Shop feed</p>
          </div>
          {linkpage.map((link) => (
            <div>
              <ul>
                <li className="font-normal text-[#1F1F1F] text-sm p-2">
                  <a href={link.link}>{link.page}</a>
                </li>
              </ul>
            </div>
          ))}
          <p className="py-2 text-sm text-[#1F1F1F] font-semibold leading-[22px]">
            MẠNG XÃ HỘI
          </p>
          {network.map((net) => (
            <HierarchySlide net={net} />
          ))}
        </div>

        <div className="pt-2">
          <div>
            <p>CHỨC NĂNG</p>
          </div>
          {functions.map((funct) => (
            <ul key={funct.id}>
              <li className="px-4 py-2">
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
              <li className="px-4 py-2">
                <a href="#">
                  <img src={page.img} alt="" />
                  <span> {page.name} </span>
                  <img className="arrow" src="/image-left/muiten.png" alt="" />
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidebarLfet;
