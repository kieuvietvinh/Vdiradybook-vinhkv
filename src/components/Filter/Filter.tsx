import React from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";

const tabs = [
  {
    id: 1,
    category: "Quản lí",
    key: "using",
  },
  {
    id: 2,
    category: "Gợi ý",
    key: "pending",
  },
  {
    id: 3,
    category: "Chờ phê duyệt",
    key: "uploaded",
  },
  {
    id: 4,
    category: "Đã tham gia",
    key: "uploaded",
  },
];

const Filter = () => {
  return (
    <div className="mx-auto w-full max-w-[800px]">
      <div className="relative">
        <img src="/images/Filter.svg" alt="" />
        <VButton className="bg-[#984AFF] rounded-[18px] gap-2 px-4 absolute right-2 bottom-2">
          <img src="/images/tool.svg" alt="" />
          <p>AI Tool</p>
        </VButton>
      </div>
      <div className="flex items-center justify-between pt-2">
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
        <div className="flex items-center gap-2">
          <VButton className="flex items-center gap-2 ">
            <img className=" pl-2" src="/images/filter.svg" alt="" />
            <p className="text-sm text-[#4284F3] font-medium">Bộc lọc</p>
          </VButton>
          <VButton className="flex items-center gap-2 bg-[#4284F3] rounded-[18px]  px-4">
            <img className=" pl-2" src="/images/cong.svg" alt="" />
            <p className="text-sm text-white font-medium">Tạo</p>
          </VButton>
        </div>
      </div>
      <div className="contri w-full whitespace-nowrap  grid grid-cols-4  items-center border-y overflow-x-scroll">
        {tabs.map((tab) => (
          <VButton
            key={tab.id}
            className="whitespace-nowrap  leading-[16.94px] text-sm font-normal hover:text-gray-800 !text-[#636363] "
          >
            {tab.category}
          </VButton>
        ))}
      </div>
    </div>
  );
};

export default Filter;
