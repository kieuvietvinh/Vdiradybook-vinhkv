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
    name: "B13",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
  {
    id: 14,
    name: "B11",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 15,
    name: "B12",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 16,
    name: "B13",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
];

const FindList = () => {
  return (
    <div className="mx-auto max-w-5xl ">
      <div className="flex items-center gap-2">
        <button>
          <img src="/image/tenvo.png" alt="" />
        </button>
        <p className="text-base font-semibold leading-5">Tìm thân nhân</p>
      </div>
      <div className="bg-white w-full rounded-lg mt-2 bg-[url('/image/ablietsi.png')]">
        <div className=" p-2 w-full bg-[#0a06068e] rounded-lg">
          <a className="flex justify-center" href="">
            <img src="/image/lietsi.png" alt="" />
          </a>
          <p className="font-normal text-white text-sm text-center py-4 ">
            Nghĩa trang liệt sĩ Tân Xuân, Xã Đông Thạnh, Huyện Hóc Môn, TP. Hồ
            Chí Minh
          </p>
          <div className=" flex-wrap flex whitespace-nowrap justify-center gap-4">
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1 bg-white">
              <img src="/image/huong.png" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng hương</p>
            </button>
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1 bg-white">
              <img src="/image/hoa.ico" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng hoa</p>
            </button>
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1 bg-white">
              <img src="/image/qualietsi.png" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng quả</p>
            </button>
          </div>
        </div>
      </div>
      <div className="catego flex items-center gap-4 pt-4 justify-between overflow-x-scroll whitespace-nowrap">
        <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1 bg-[#4284F3] justify-center">
          <img src="/image/nghiatrang.png" alt="" />
          <p className="text-white font-medium text-sm"> Nghĩa trang</p>
        </button>
        <button className="flex items-center gap-2 border border-[#0000001A] rounded-[18px] px-4 py-1 bg-white justify-center">
          <img src="/image/sukien.png" alt="" />
          <p className="text-[#636363] font-medium text-sm">
            Sự kiện quan trọng
          </p>
        </button>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <p className="text-[#636363] font-normal text-sm">Ghé thăm:</p>
            <p className="text-[#1F1F1F] text-sm font-medium">1.000</p>
          </div>
          <div className="border-l-2 border-[#CAD0D7]"></div>
          <div className="flex gap-1">
            <p className="text-[#636363] font-normal text-sm">Đã dâng hương:</p>
            <p className="text-[#4284F3] text-sm font-extrabold">
              1.000.000.000đ
            </p>
          </div>
        </div>
        <div className="">
          <button className="text-[#4284F3] bg-white border border-[#4284F3] rounded-[18px] px-4 py-1.5 font-medium text-sm flex items-center gap-1 justify-center">
            <img src="/image/cong.png" alt="" />
            <p> Tạo sự kiện</p>
          </button>
        </div>
        <div>
          <ul>
            <li className="pl-1">
              <a
                className="text-[#4284F3] font-medium text-sm flex items-center gap-1"
                href=""
              >
                <img src="/image/boloc.png" alt="" />
                <p className="pr-1"> Bộ lọc</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="list flex gap-3 bg-white mt-4 p-6 rounded-lg flex-wrap ">
        {list.map((lis) => (
          <HeadstoneItem key={lis.id} lis={lis} />
        ))}
      </div>
    </div>
  );
};

export default FindList;
