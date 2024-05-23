import React from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";
import Link from "next/link";

const tabs = [
  {
    id: 664570,
    img: "/images/dantoc.svg",
    name: "Dân tộc",
  },
  {
    id: 664574,
    img: "/images/nghanhnghe.svg",
    name: "Ngành nghề",
  },
  {
    id: 664575,
    img: "/images/tongiao.svg",
    name: "Tôn giáo",
  },
  {
    id: 664579,
    img: "/images/truyenthong.svg",
    name: "Truyền thống",
  },
  {
    id: 664572,
    img: "/images/ngayle.svg",
    name: "Ngày lễ",
  },
];

const Listurgent = [
  {
    id: 1,
    img: "/images/dang.svg",
    fire: "Cứu hỏa",
    information: " Thành lập Đảng cộng sản Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "999 người quan tâm · 999 người theo dõi",
    status: 1,
    listrescue: 1,
  },
  {
    id: 2,
    img: "/images/thuoc.svg",
    fire: "Cứu hỏa",
    information: "Ngày Thầy thuốc Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "150 người quan tâm · 458 người theo dõi",
    status: 2,
    listrescue: 2,
  },
  {
    id: 3,
    img: "/images/thanhnien.svg",
    fire: "Cứu hỏa",
    information: " Ngày thành lập Đoàn TNCS Hồ Chí Minh",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    status: 3,
    listrescue: 3,
  },
  {
    id: 4,
    img: "/images/dang.svg",
    fire: "Cứu hỏa",
    information: " Thành lập Đảng cộng sản Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "999 người quan tâm · 999 người theo dõi",
    status: 1,
    listrescue: 1,
  },
  {
    id: 5,
    img: "/images/thuoc.svg",
    fire: "Cứu hỏa",
    information: "Ngày Thầy thuốc Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "150 người quan tâm · 458 người theo dõi",
    status: 2,
    listrescue: 2,
  },
  {
    id: 6,
    img: "/images/thanhnien.svg",
    fire: "Cứu hỏa",
    information: " Ngày thành lập Đoàn TNCS Hồ Chí Minh",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    status: 3,
    listrescue: 3,
  },
];

const Traditional = () => {
  return (
    <div className="max-w-5xl mx-auto max-[900px]:px-2">
      <div className="relative">
        <img className="" src="/images/Banner.svg" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-9 flex  items-center">
          <Input
            className="sm:w-[450px] md:w-[600px] w-[320px]  px-10 rounded-2xl  py-[6px] relative  font-normal text-xs text-[#A89E9F] bg-white outline-none"
            placeholder="Tìm kiếm"
          />
          <img
            className="absolute top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 "
            src="/images/search.svg"
            alt=""
          />
          <div className="border-l-2 border-[#CAD0D7] absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
            <img className="   pl-2" src="/images/filter.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="py-2">
        <img src="/images/vietnam.svg" alt="" />
      </div>
      <div className="flex items-center gap-2 ">
        {tabs.map((tab) => (
          <VButton
            key={tab.id}
            className="flex items-center gap-2 w-auto bg-white  rounded-2xl px-4 py-1 border border-[#0000000D] h-8 shadow shadow-[#0000001A]"
          >
            <img src={tab.img} alt="" />
            <p className=" font-normal leading-[16.94px] text-sm text-[#636363]">
              {tab.name}
            </p>
          </VButton>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 max-[500px]:grid-cols-1 gap-4 pt-2  ">
        {Listurgent.map((list) => (
          <div
            key={list.id}
            className="bg-white border rounded-[16px] w-full h-auto "
          >
            <div className="relative">
              <div>
                <img className="w-full " src={list.img} alt="" />
              </div>
            </div>
            <div className="p-4">
              <div>
                <p className="text-[#1F1F1F] text-sm font-medium line-clamp-2 leading-[16.94px]">
                  {list.information}
                </p>
              </div>
              <div className="text-xs font-normal leading-[14.52px]  text-[#DD2B17] pt-2 flex items-center gap-2">
                <img src="/image/diachi.png" alt="" />
                <p>{list.address}</p>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <img src="/image/calluser.png" alt="" />
                <p className="text-xs font-medium leading-[14.52px]  text-[#1F1F1F]">
                  {list.followers}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <button className="w-full h-[36px] bg-white rounded-[18px] flex justify-center items-center text-sm text-[#4284F3] font-medium border border-[#4284F3] gap-2">
                  <img src="/image/chiduong.png" alt="" />
                  <p>Quan tâm </p>
                </button>
                <button className="w-full h-[36px] bg-white] rounded-[18px] flex justify-center items-center text-sm text-[#4284F3] border border-[#4284F3] font-medium gap-2">
                  <p>Tham gia</p>
                  <img src="/image/chitiet.png" alt="" />
                </button>
                <button className="min-w-9 h-9 bg-[#0000000D] rounded-full flex justify-center items-center">
                  ...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traditional;
