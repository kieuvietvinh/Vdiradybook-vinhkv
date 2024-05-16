import React from "react";
import Input from "../core/v-input";
import VDropdownModal from "../core/v-dropdown";
import VButton from "../core/v-button";

const giftCard = [
  {
    id: 1,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 2,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 3,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 4,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 5,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 6,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 7,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 8,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 1,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 9,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
];

const Birthday = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <img className="" src="/image/birthday.png" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-9 flex  items-center">
          <Input
            className="w-[600px] px-10 rounded-2xl border  py-[6px] relative  font-normal text-xs text-[#A89E9F] bg-white outline-none"
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
      <div className="flex items-center gap-2 py-2">
        <VDropdownModal
          className=""
          menu={[{ key: "string" }]}
          label={
            <div className="border border-[#4284F3] rounded-2xl text-[#4284F3] px-3 py-1 text-xs font-normal">
              Hôm nay
            </div>
          }
        />
        <VDropdownModal
          className=""
          menu={[{ key: "string" }]}
          label={
            <div className="flex items-center gap-2 border border-[#4284F3] rounded-2xl text-[#4284F3] px-3 py-[2px] text-xs font-normal">
              Tháng 4
              <img className="h-5 w-5" src="/images/dropdown.svg" alt="" />
            </div>
          }
        />
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {giftCard.map((card) => (
          <div className="bg-white p-4 rounded-lg">
            <div key={card.id} className=" flex gap-2 ">
              <div>
                <img className="onemo" src={card.image} alt="" />
                <img className="rescue" src="/image-left/Ensign.png" alt="" />
              </div>
              <div className="pt-2">
                <div className="flex items-center font-semibold text-sm text-[#4284F3]">
                  {card.name}
                  <img
                    className="teck  w-3 h-3 "
                    src="/image-left/teck.png"
                    alt=""
                  />
                </div>
                <div className=" flex items-center gap-2 font-normal text-xs text-[#1F1F1F] ">
                  <p>{card.data}</p>
                  <p>{card.age}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <VButton className="rounded-[18px] px-4 flex items-center gap-2">
                <img src="/images/gift.svg" alt="" />
                <p className="text-sm font-medium text-[#4284f3]">
                  {card.email}
                </p>
              </VButton>
              <VButton className="rounded-[18px] bg-[#4284f3] px-4 flex items-center gap-2">
                <img src="/images/email.svg" alt="" />
                <p className=" text-sm text-white font-medium">{card.gift}</p>
              </VButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Birthday;
