import React, { useState } from "react";
import VButton from "../core/v-button";
import Pending from "./Pending";
import router, { useRouter } from "next/router";
import StickerAll from "../StickerAll/StickerAll";
import Uploaded from "./Uploaded";

const tabs = [
  {
    id: 1,
    category: "Đang sử dụng (12)",
    key: "using",
  },
  {
    id: 2,
    category: "Đã tải lên (25)",
    key: "pending",
  },
  {
    id: 3,
    category: "Chờ duyệt (11)",
    key: "uploaded",
  },
];
const stickers = [
  {
    id: 1,
    image: "/images/tatca.svg",
    name: "Tất cả",
    tab: "1",
  },
  {
    id: 2,
    image: "/images/gautruc.svg",
    name: "Gấu trúc",
    tab: "2",
  },
  {
    id: 3,
    image: "/images/meo.svg",
    name: "Mèo dễ thương",
    tab: "3",
  },
  {
    id: 4,
    image: "/images/cho.svg",
    name: "Chó tinh nghịch",
    tab: "4",
  },
  {
    id: 5,
    image: "/images/quaivat.svg",
    name: "Quái vật",
    tab: "5",
  },
  {
    id: 6,
    image: "/images/canhcut.svg",
    name: "Nhân vật cánh cụt",
    tab: "6",
  },
];
const alls = [
  {
    id: 1,
    image: "/images/stccho.svg",
  },
  {
    id: 2,
    image: "/images/stcmeo.svg",
  },
  {
    id: 3,
    image: "/images/stcquaivat.svg",
  },
  {
    id: 4,
    image: "/images/stcgau.svg",
  },
  {
    id: 5,
    image: "/images/stccho1.svg",
  },
  {
    id: 6,
    image: "/images/stcmeo1.svg",
  },
  {
    id: 7,
    image: "/images/stcquaivat1.svg",
  },
  {
    id: 8,
    image: "/images/stcgau1.svg",
  },
];
const panda = [
  {
    id: 1,
    image: "/images/stcgau.svg",
  },
  {
    id: 2,
    image: "/images/stcgau1.svg",
  },
];
const cat = [
  {
    id: 1,
    image: "/images/stcmeo.svg",
  },
  {
    id: 2,
    image: "/images/stcmeo1.svg",
  },
];
const dog = [
  {
    id: 1,
    image: "/images/stccho.svg",
  },
  {
    id: 2,
    image: "/images/stccho1.svg",
  },
];
const monster = [
  {
    id: 1,
    image: "/images/stcquaivat.svg",
  },
  {
    id: 2,
    image: "/images/stcquaivat1.svg",
  },
];

const StickerManagement = (props: any) => {
  const [showStickers, setShowStickers] = useState(true);
  const handleDeleteAll = () => {
    setShowStickers(false);
  };

  const [transfer, setTransfer] = useState<String>("using");
  const handleTransfer = (key: any) => {
    setTransfer(key);
  };

  const router = useRouter();
  const list =
    router.query.id === "1" || !router.query.id
      ? alls
      : router.query.id === "2"
      ? panda
      : router.query.id === "3"
      ? cat
      : router.query.id === "4"
      ? dog
      : router.query.id === "5"
      ? monster
      : [];
  const [activeTab, setActiveTab] = useState();
  const handleClick = (tab: any) => {
    setActiveTab(tab);
    router.push({
      query: { id: tab.tab },
      pathname: router.pathname,
    });
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  mt-[70px] sm:mt-[0px]">
      {showStickers && (
        <div className="flex  justify-center">
          <div className=" max-w-[800px] w-full   bg-white rounded-2xl px-2 py-4 shadow shadow-[#00000026] relative">
            <div className="text-center py-3">
              <h1 className="font-semibold text-2xl text-[#4284F3] leading-[29.05px]">
                Quản lý Sticker
              </h1>
            </div>
            <div className="flex justify-end mb-2 absolute right-2 top-2">
              <VButton
                className="rounded-full bg-[#D9D9D9] p-[10px] flex items-center gap-2 h-10 w-10 "
                onClick={handleDeleteAll}
              >
                <img className="w-5 h-5" src="/images/Close.svg" alt="" />
              </VButton>
            </div>
            <div className="contri w-full whitespace-nowrap  grid grid-cols-3  items-center border-y overflow-x-scroll">
              {tabs.map((tab) => (
                <VButton
                  onClick={() => handleTransfer(tab.key)}
                  key={tab.id}
                  className={`whitespace-nowrap  leading-[16.94px] ${
                    transfer === tab.key
                      ? "border-b-2 border-[#4284F3] !text-[#4284F3] text-sm font-semibold"
                      : "text-sm font-normal hover:text-gray-800 !text-[#636363]"
                  }`}
                >
                  {tab.category}
                </VButton>
              ))}
            </div>
            {transfer === "pending" && <Pending />}
            {transfer === "uploaded" && <Uploaded />}
            {transfer === "using" && (
              <>
                <div className="contri tabs flex items-center gap-1 overflow-scroll pt-2">
                  {stickers.map((sticker) => (
                    <VButton
                      onClick={() => handleClick(sticker)}
                      key={sticker.id}
                      className={`flex items-center gap-2 w-auto  rounded-2xl px-4 py-1 border border-[#0000000D] h-8 shadow shadow-[#0000001A]${
                        sticker.tab === router.query.id ||
                        (sticker.tab === "1" && !router.query.id)
                          ? "  bg-[#4284f3]  !text-white "
                          : " bg-white border !text-[#636363]"
                      }`}
                    >
                      <img src={sticker.image} alt="" />
                      <p className="whitespace-nowrap text-sm  font-normal leading-[16.94px]">
                        {sticker.name}
                      </p>
                    </VButton>
                  ))}
                </div>
                <div className="contri flex flex-wrap items-center gap-2 pt-2 max-h-[90vh] overflow-y-scroll">
                  {list.map((item) => (
                    <StickerAll item={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StickerManagement;
