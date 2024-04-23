import React, { useState } from "react";
import { useRouter } from "next/router";

const tabs = [
  {
    id: 1,
    img: "/image/nghiatrang.png",
    name: "Nghĩa trang",
  },
  {
    id: 2,
    img: "/image/sukien.png",
    name: "Sự kiện quan trọng",
  },
];

const Thurify = () => {
  const [activeTab, setActiveTab] = useState();
  const router = useRouter();
  const handleClick = (index: any) => {
    setActiveTab(index);
    router.push({
      query: { id: index },
      pathname: router.pathname,
    });
  };
  return (
    <div>
      <div className="catego flex items-center gap-4 pt-4 justify-between overflow-x-scroll whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` flex items-center gap-2  rounded-[18px] px-4 py-1  justify-center ${
              activeTab === tab.id
                ? "  bg-[#4284f3]  text-white"
                : " bg-white border text-[#636363]"
            }`}
            onClick={() => handleClick(tab.id)}
          >
            <img src={tab.img} alt="" />
            <p className=" font-medium text-sm"> {tab.name}</p>
          </button>
        ))}
        {/* <button
          onClick={() => handleClick(2)}
          className="flex items-center gap-2 border border-[#0000001A] rounded-[18px] px-4 py-1 bg-white justify-center"
        >
          <img src="/image/sukien.png" alt="" />
          <p className="text-[#636363] font-medium text-sm">
            Sự kiện quan trọng
          </p>
        </button> */}
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
    </div>
  );
};

export default Thurify;
