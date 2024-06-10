import React, { useState } from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";

const topics = [
  {
    id: 1,
    img: "/images/dulich.svg",
    name: "Du lịch",
    tab: "1",
  },
  {
    id: 2,
    img: "/images/amthuc.svg",
    name: "Ẩm thực",
    tab: "2",
  },
  {
    id: 3,
    img: "/images/congnghe.svg",
    name: "Công nghệ",
    tab: "3",
  },
  {
    id: 4,
    img: "/images/thoitrang.svg",
    name: "Thời trang",
    tab: "4",
  },
  {
    id: 5,
    img: "/images/suckhoe.svg",
    name: "Thể thao và Sức khỏe",
    tab: "5",
  },
  {
    id: 6,
    img: "/images/giaoduc.svg",
    name: "Giáo dục",
    tab: "6",
  },
];
const tabs = [
  {
    id: 1,
    name: "Tất cả",
    className: "bg-[#4284F3]",
  },
  {
    id: 2,
    name: "Khuyến mãi",
    className: "bg-[#DD2B17]",
  },
  {
    id: 3,
    name: "Flash Sale",
    className: "bg-[#DD2B17]",
  },
  {
    id: 4,
    name: "Bán chạy",
    className: "bg-[#FF8300]",
  },
  {
    id: 5,
    name: "Mới nhất",
    className: "bg-[#7000FF]",
  },
  {
    id: 6,
    name: "HOT nhất",
    className: "bg-[#DD2B17]",
  },
];
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
  {
    id: 5,
    hastag: "amthucmientrung",
    comb: 12,
    solar: "/images/solar.svg",
    mask: "/images/mask.svg",
    oldPrice: 65.0,
    newPrice: 40.0,
    ownerId: 5,
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
  const [myhashtagId, setMyhashtagId] = useState([]);

  const handaddId = (e: any) => {
    setMyhashtagId(e.id);
    console.log("e.id :", e.id);
  };

  return (
    <div className="max-w-[51rem] mx-auto max-[900px]:px-2">
      <div className="relative">
        <img className="" src="/images/bannerhashtag.svg" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-9 flex  items-center">
          <Input
            className="sm:w-[350px] md:w-[500px] w-[220px]  px-10 rounded-2xl  py-[6px] relative  font-normal text-sm text-[#1F1F1F] bg-white outline-none"
            placeholder="Nhập hashtag bạn muốn tìm kiếm,..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {showSuggestions && (
            <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-lg z-10 ">
              {filteredHashtags.map((hashtag) => (
                <div
                  key={hashtag.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1"
                  onClick={() => handleSuggestionClick(hashtag.hastag)}
                >
                  <img className=" h-5 w-5 " src="/images/search.svg" alt="" />
                  {hashtag.hastag}
                </div>
              ))}
            </div>
          )}
          <img
            className="absolute top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 "
            src="/images/search.svg"
            alt=""
          />
          <div className="border-l-2 border-[#CAD0D7] absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
            <img className="pl-2" src="/images/filter.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="py-2">
        <img src="/images/vietnam.svg" alt="" />
      </div>
      <div className="tabs flex items-center gap-2 whitespace-nowrap overflow-scroll">
        <p className="text-[#1F1F1F] font-normal text-sm leading-[16.94px]">
          Gợi ý chủ đề:
        </p>
        {topics.map((topic) => (
          <VButton
            key={topic.id}
            className="flex items-center  gap-2 w-auto bg-white rounded-2xl px-4 py-1 border border-[#0000000D] h-8 shadow shadow-[#0000001A]"
          >
            <img src={topic.img} alt="" />
            <p className=" font-normal leading-[16.94px] text-sm !text-[#636363] text-inherit">
              {topic.name}
            </p>
          </VButton>
        ))}
      </div>
      <div className="tabs flex items-center gap-2 whitespace-nowrap overflow-scroll pt-2">
        {tabs.map((tab) => (
          <VButton
            key={tab.id}
            className={`flex items-center  gap-2 w-auto h-[30px] rounded-2xl px-4 py-1 border border-[#0000000D]  shadow shadow-[#0000001A] ${tab.className}`}
          >
            <p className=" font-normal leading-[16.94px] text-sm !text-white text-inherit">
              {tab.name}
            </p>
          </VButton>
        ))}
      </div>
      {filteredHashtags.map((hashtag) => (
        <div
          key={hashtag.id}
          className={`bg-white gap-2 rounded-lg p-2 mt-2 ${
            searchQuery.toLowerCase() === hashtag.hastag.toLowerCase()
              ? "shadow-md shadow-[#4284F3]"
              : "shadow-none"
          } ${""}`}
        >
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex items-center">
              <span className="text-[#1F1F1F] text-base font-semibold">#</span>
              <span className="text-[#1F1F1F] text-base font-semibold">
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
                  className="  w-auto rounded-2xl px-3 py-1 bg-white border border-[#4284F3] h-[28px] shadow shadow-[#0000001A]"
                >
                  <p className=" font-normal leading-[16.94px] text-sm !text-[#4284F3] text-inherit whitespace-nowrap">
                    {tab.label}
                  </p>
                </VButton>
              ))}
            </div>
            <div>
              <VButton
                onClick={() => handaddId(hashtag)}
                className="flex items-center  gap-2 w-auto bg-[#4284F3] rounded-2xl px-4 py-1 border border-[#0000000D] h-9 shadow shadow-[#0000001A]"
              >
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
