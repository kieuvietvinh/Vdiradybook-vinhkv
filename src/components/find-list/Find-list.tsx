import React, { useState } from "react";
import HeadstoneItem from "../headstone/HeadstoneItem";

const list = [
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },

  {
    id: 2,
    name: "B2",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 3,
    name: "B3",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 4,
    name: "B4",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
  {
    id: 5,
    name: "B5",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
  {
    id: 6,
    name: "B6",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
  {
    id: 7,
    name: "B7",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 8,
    name: "B8",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 9,
    name: "B9",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
  {
    id: 10,
    name: "B10",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
  {
    id: 11,
    name: "B11",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 12,
    name: "B12",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 13,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
];

const FindList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-auto max-w-5xl pt-2">
      <div className="all  bg-white px-6 py-3 rounded-lg flex justify-between overflow-x-scroll items-center  whitespace-nowrap">
        <ul className="flex items-center gap-1  ">
          <li className="">
            <a className="text-[#FFFFFF] bg-[#4284F3] font-normal text-sm rounded-2xl px-4 py-1 flex ">
              <img src="/image/tatca.png" alt="" />
              <p className="pr-1"> Tất cả</p>
            </a>
          </li>
          <li className="pl-1">
            <a
              className="text-[#636363] bg-white font-normal text-sm rounded-2xl px-4 py-1 flex border  "
              href=""
            >
              <img src="/image/cuuhoa.png" alt="" />
              <p className="pr-1">Cứu hỏa</p>
            </a>
          </li>
          <li className="pl-1">
            <a
              className="text-[#636363] bg-white font-normal text-sm rounded-2xl px-4 py-1 flex border  "
              href=""
            >
              <img src="/image/cuunan.png" alt="" />
              <p className="pr-1"> Cứu nạn</p>
            </a>
          </li>
          <li className="pl-1">
            <a
              className="text-[#636363] bg-white font-normal text-sm rounded-2xl px-4 py-1 flex border "
              href=""
            >
              <img src="/image/thannhan.png" alt="" />
              <p className="pl-1">Tìm nhân thân</p>
            </a>
          </li>
          <li className="pl-1">
            <a
              className="text-[#636363] bg-white font-normal text-sm rounded-2xl px-4 py-1 flex border "
              href=""
            >
              <img src="/image/bando.png" alt="" />
              <p className="pl-1">Xem trên bản đồ</p>
            </a>
          </li>
        </ul>
        <ul className="flex gap-4 items-center">
          <li className="pl-1">
            <a
              className="text-[#4284F3] font-medium text-sm flex  items-center"
              href=""
            >
              <img src="/image/quanhday.png" alt="" />
              <p>Tìm quanh đây</p>
            </a>
          </li>
          {/* <li className="border-l-2 border-[#4284F3] h-4 pl-1 text-center"></li> */}
          <li className="pl-1">
            <a
              className="text-[#4284F3] font-medium text-sm flex items-center "
              href=""
            >
              <img src="/image/boloc.png" alt="" />
              <p className="pr-1"> Bộ lọc</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="relative md:w-[400px] w-[250px] h-9 ">
          <input
            type="search"
            id="search-dropdown"
            className=" p-2.5 w-full text-xs text-[#A89E9F]  rounded-2xl border-s-gray-50 border border-gray-300 pl-12 font-normal"
            placeholder="Tìm kiếm thân nhân..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 left-1 end-0 p-2.5 text-sm font-medium h-full text-[#838383] items-center flex"
          >
            <img className="w-6 h-6" src="/image/Search1.png" alt="" />
          </button>
        </div>
        <div className="">
          <button className="text-white bg-[#4284F3] rounded-[18px] px-4 py-1.5 font-medium text-sm flex items-center gap-2">
            <img src="/image/cong.png" alt="" />
            <p> Tạo SOS</p>
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-1">
          <p className="text-[#636363] font-normal text-sm">Ghé thăm:</p>
          <p className="text-[#1F1F1F] text-sm font-medium">1.000</p>
        </div>
        <div className="border-l-2 border-[#CAD0D7]"></div>
        <div className="flex gap-1">
          <p className="text-[#636363] font-normal text-sm">Đã dâng hương:</p>
          <p className="text-[#1F1F1F] text-sm font-medium">1.000.000.000đ</p>
        </div>
      </div>
      <div className="bg-white w-full p-4 rounded-lg mt-2">
        <div className="">
          <a className="flex justify-center" href="">
            <img src="/image/lietsi.png" alt="" />
          </a>
          <p className="font-normal text-[#1F1F1F] text-sm text-center py-4">
            Nghĩa trang liệt sĩ Tân Xuân, Xã Đông Thạnh, Huyện Hóc Môn, TP. Hồ
            Chí Minh
          </p>
          <div className="flex justify-center ">
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1.5 ">
              <img src="/image/huong.png" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng hương</p>
            </button>
          </div>
        </div>
      </div>
      <div className="list flex gap-4 bg-white mt-4 p-6 rounded-lg flex-wrap ">
        {list.map((lis) => (
          <HeadstoneItem lis={lis} />
        ))}
      </div>
    </div>
  );
};

export default FindList;
