import React, { useState } from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";

const hashtags = [
  {
    id: 1,
    hastag: "mangxahoi",
    comb: 42,
    solar: "/images/solar.svg",
    mask: "/images/mask.svg",
    oldPrice: 45.0,
    newPrice: 50.0,
    ownerId: 1,
    tabs: [
      {
        id: 1,
        label: "dịch vụ",
      },
      {
        id: 2,
        label: "Thương mại",
      },
      {
        id: 3,
        label: "Kinh doanh",
      },
      {
        id: 4,
        label: "Thương hiệu ",
      },
      {
        id: 5,
        label: "Chung",
      },
    ],
  },
  {
    id: 2,
    hastag: "khampha",
    comb: 34,
    solar: "/images/solar.svg",
    mask: "/images/mask.svg",
    oldPrice: 35.0,
    newPrice: 35.0,
    ownerId: 2,
    tabs: [
      {
        id: 1,
        label: "dịch vụ",
      },
      {
        id: 2,
        label: "Thương mại",
      },

      {
        id: 3,
        label: "Thương hiệu ",
      },
    ],
  },
  {
    id: 3,
    hastag: "amthuc",
    comb: 12,
    solar: "/images/solar.svg",
    mask: "/images/mask.svg",
    oldPrice: 75.0,
    newPrice: 50.0,
    ownerId: 3,
    tabs: [
      {
        id: 1,
        label: "dịch vụ",
      },
      {
        id: 2,
        label: "Thương mại",
      },
      {
        id: 3,
        label: "Kinh doanh",
      },
      {
        id: 4,
        label: "Thương hiệu ",
      },
      {
        id: 5,
        label: "Chung",
      },
    ],
  },
  {
    id: 4,
    hastag: "trituenhantao",
    comb: 14,
    solar: "/images/solar.svg",
    mask: "/images/mask.svg",
    oldPrice: 85.0,
    newPrice: 65.0,
    ownerId: 4,
    tabs: [
      {
        id: 1,
        label: "Công nghệ",
      },
      {
        id: 2,
        label: "Ai",
      },

      {
        id: 3,
        label: "Tương lai",
      },
    ],
  },
];

const Hashtag = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredHashtags = hashtags.filter((hashtag) =>
    hashtag.hastag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: any) => {
    const { value } = event.target;
    setSearchQuery(value);
    setShowSuggestions(value.trim() !== "");
  };

  const handleSuggestionClick = (hashtag: string) => {
    setSearchQuery(hashtag);
    setShowSuggestions(false);
  };

  return (
    <div>
      {filteredHashtags.map((hashtag) => (
        <div
          key={hashtag.id}
          className={`bg-white gap-2 rounded-lg p-2 mt-2 ${
            searchQuery.trim() !== ""
              ? "shadow-md !shadow-[#4284F3]"
              : "shadow-none"
          }`}
        >
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex items-center">
              <span className="text-[#1F1F1F] text-base font-semibold">#</span>
              <span className="text-[#1F1F1F] text-base font-semibold ">
                {hashtag.hastag}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#636363] font-normal text-sm whitespace-nowrap">
                Số lượng sử dụng:
              </span>
              <span className="text-[#1F1F1F] font-medium text-sm">
                {hashtag.comb}
              </span>
              <span className="w-[1.5px] h-5 bg-[#CAD0D7]"></span>
              <VButton className="rounded-full bg-[#0000000D] p-[8px] px-[10px] flex items-center gap-2 h-8 w-8 ">
                <img className="w-3 h-3" src={hashtag.solar} alt="" />
              </VButton>
              <VButton className="rounded-full bg-[#0000000D] p-[8px] px-[10px] flex items-center gap-2 h-8 w-8 ">
                <img className="w-3 h-3" src={hashtag.mask} alt="" />
              </VButton>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[#636363] font-normal text-base line-through">
              {hashtag.oldPrice}.000đ
            </span>
            <span className="text-[#4284F3] font-semibold text-base">
              {hashtag.newPrice}.000đ
            </span>
          </div>
          <div className="tabs pt-4 justify-between flex items-center gap-2 overflow-x-scroll ">
            <div className="flex items-center gap-2">
              {hashtag.tabs.map((tab) => (
                <VButton
                  key={tab.id}
                  className=" w-auto rounded-2xl px-4 py-1 border border-[#4284F3] h-[28px] shadow shadow-[#0000001A]"
                >
                  <p className=" font-normal leading-[16.94px] text-sm !text-[#4284F3] text-inherit whitespace-nowrap">
                    {tab.label}
                  </p>
                </VButton>
              ))}
            </div>
            <div>
              <VButton className="flex items-center gap-2 w-auto bg-[#4284F3] rounded-2xl px-4 py-1 border border-[#0000000D] h-9 shadow shadow-[#0000001A]">
                <img src="/images/shopping.svg" alt="" />
                <p className=" font-normal leading-[16.94px] text-sm !text-white text-inherit whitespace-nowrap">
                  Mua ngay
                </p>
              </VButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hashtag;
