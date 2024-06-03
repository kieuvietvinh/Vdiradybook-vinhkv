import React, { useState } from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";
import Pending from "../StickerManagement/Pending";
import Uploaded from "../StickerManagement/Uploaded";

const tabs = [
  {
    id: 1,
    category: "Quản lí",
    key: "nanager",
  },
  {
    id: 2,
    category: "Gợi ý",
    key: "suggest",
  },
  {
    id: 3,
    category: "Chờ phê duyệt",
    key: "approval",
  },
  {
    id: 4,
    category: "Đã tham gia",
    key: "Joined",
  },
];
const manages = [
  {
    id: 1,
    backgrou: "/images/Filter.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 2,
    backgrou: "/images/Filter.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 3,
    backgrou: "/images/Filter.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 4,
    backgrou: "/images/Filter.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 5,
    backgrou: "/images/Filter.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 6,
    backgrou: "/images/Filter.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 7,
    backgrou: "/images/Filter.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 8,
    backgrou: "/images/Filter.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
];

const Filter = () => {
  const [transfer, setTransfer] = useState<String>("nanager");
  const handleTransfer = (key: any) => {
    setTransfer(key);
  };

  return (
    <div className="mx-auto w-full max-w-[800px]">
      <div className="relative">
        <img src="/images/Filter.svg" alt="" />
        <VButton className="bg-[#984AFF] rounded-[18px] gap-2 px-4 absolute right-2 bottom-2">
          <img src="/images/tool.svg" alt="" />
          <p>AI Tool</p>
        </VButton>
        <div className="close absolute right-2 bottom-2 member bg-[#984AFF] h-4 w-4 rounded-full flex items-center justify-center">
          <img src="/images/Closewhite.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between py-2">
        <div className=" relative h-9">
          <Input
            className="  px-10 rounded-2xl !max-w-[300px]  py-[6px] relative  font-normal text-xs text-[#A89E9F] bg-white outline-none"
            placeholder="Tìm kiếm nhóm..."
          />
          <img
            className="absolute top-1 left-2 h-6 w-6 "
            src="/images/search.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-2 ">
          <VButton className="flex items-center gap-2 ">
            <img className=" pl-2" src="/images/filter.svg" alt="" />
            <p className="text-sm text-[#4284F3] font-medium whitespace-nowrap">
              Bộc lọc
            </p>
          </VButton>
          <VButton className="flex items-center gap-2 bg-[#4284F3] rounded-[18px]  px-4">
            <img className=" pl-2" src="/images/cong.svg" alt="" />
            <p className="text-sm text-white font-medium">Tạo</p>
          </VButton>
        </div>
      </div>
      <div className="bg-white h-auto w-full rounded-lg">
        <div className="contri w-full   whitespace-nowrap gap-2 overflow-auto  flex justify-around  items-center border-y ">
          {tabs.map((tab) => (
            <VButton
              onClick={() => handleTransfer(tab.key)}
              key={tab.id}
              className={`  leading-[16.94px] w-1/4  ${
                transfer === tab.key
                  ? "border-b-2 border-[#4284F3] !text-[#4284F3] text-sm font-semibold"
                  : "text-sm font-normal hover:text-gray-800 !text-[#636363]"
              }`}
            >
              {tab.category}
            </VButton>
          ))}
        </div>
        {transfer === "Joined" && <Pending />}
        {transfer === "suggest" && <Uploaded />}
        {transfer === "approval" && <Pending />}
        {transfer === "nanager" && (
          <div className=" items-center md:p-0 p-2  lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 sm:grid sm:grid-cols-2 gap-2 w-full h-auto pt-1">
            {manages.map((manage) => (
              <div className="bg-white shadow-md border rounded-md">
                <div className="">
                  <img className="rounded-t-md" src={manage.backgrou} alt="" />
                </div>
                <div className="flex items-center justify-center mt-[-2.25rem] ml-10">
                  <img
                    className="w-20 h-20 rounded-full "
                    src={manage.represent}
                    alt=""
                  />
                  <img
                    className="tecktwo w-10 h-10 "
                    src={manage.ensign}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <div className="py-2">
                    <div className="text-sm font-semibold leading-[16.94px] text-center text-[#1F1F1F]">
                      {manage.name}
                    </div>
                    <div className=" text-center pt-2">
                      <p className="text-[#555770] text-xs">{manage.slogan}</p>
                    </div>
                  </div>
                  <div className="text-xs pb-3 flex items-center gap-1 justify-center pt-4">
                    <a
                      href=""
                      className="text-xs font-medium text-[#1F1F1F] leading-[16.94px] "
                    >
                      {manage.member}
                    </a>
                    <p className="text-xs font-normal text-[#636363] leading-[16.94px]">
                      Thành viên
                    </p>
                  </div>
                  <button className="w-full h-[2.3rem] bg-[#4284f3] rounded-md flex justify-center items-center text-sm text-white font-normal">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Filter;
