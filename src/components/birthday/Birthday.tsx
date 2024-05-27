import React, { useState } from "react";
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
    name: "Điện Biên Phủ",
    data: "30/04",
    age: "(75 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 3,
    image: "/images/vdiarybook.svg",
    name: " Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 4,
    image: "/images/vdiarybook.svg",
    name: "Quốc Khánh",
    data: "02/09",
    age: "(79 tuổi)",
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
    id: 9,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 10,
    image: "/images/vdiarybook.svg",
    name: "VdiaryBook Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 11,
    image: "/images/vdiarybook.svg",
    name: "Điện Biên Phủ",
    data: "30/04",
    age: "(75 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
  {
    id: 12,
    image: "/images/vdiarybook.svg",
    name: " Life",
    data: "09/05",
    age: "(44 tuổi)",
    gift: "Tặng quà",
    email: "Gửi thiệp",
  },
];

const Birthday = () => {
  const [month, setMonth] = useState<number>(4);
  const [year, setYear] = useState(2024);

  const handleClick = (key: any) => {
    setMonth(key);
  };

  const handleNextMonth = () => {
    setMonth((prevMonth) => {
      if (prevMonth === 12) {
        setYear((prevYear) => prevYear + 1);
        return 1;
      } else {
        return prevMonth + 1;
      }
    });
  };

  const handlePreviousMonth = () => {
    setMonth((prevMonth) => {
      if (prevMonth === 1) {
        setYear((prevYear) => prevYear - 1);
        return 12;
      } else {
        return prevMonth - 1;
      }
    });
  };
  return (
    <div className="max-w-[51rem] mx-auto max-[900px]:px-2">
      <div className="relative">
        <img className="" src="/image/birthday.png" alt="" />
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
      <div className="flex items-center gap-2 py-2">
        <VDropdownModal
          className=""
          menu={[{ key: "string" }]}
          label={
            <div className="border border-[#4284F3] rounded-2xl text-[#4284F3] px-3 py-1 text-xs font-normal h-6 leading-[14.52px] whitespace-nowrap">
              Hôm nay
            </div>
          }
        />
        <VDropdownModal
          className="right-0 top-4"
          menu={[
            { key: "Tháng 1", onClick: () => handleClick(1) },
            { key: "Tháng 2", onClick: () => handleClick(2) },
            { key: "Tháng 3", onClick: () => handleClick(3) },
            { key: "Tháng 4", onClick: () => handleClick(4) },
            { key: "Tháng 5", onClick: () => handleClick(5) },
            { key: "Tháng 6", onClick: () => handleClick(6) },
            { key: "Tháng 7", onClick: () => handleClick(7) },
            { key: "Tháng 8", onClick: () => handleClick(8) },
            { key: "Tháng 9", onClick: () => handleClick(9) },
            { key: "Tháng 10", onClick: () => handleClick(10) },
            { key: "Tháng 11", onClick: () => handleClick(11) },
            { key: "Tháng 12", onClick: () => handleClick(12) },
          ]}
          label={
            <div className="flex whitespace-nowrap items-center gap-2 border border-[#4284F3] rounded-2xl text-[#4284F3] px-3 py-[2px] h-6 text-xs font-normal leading-[14.52px]">
              Tháng {month}
              <img className="h-5 w-5" src="/images/dropdown.svg" alt="" />
            </div>
          }
        />
        <div className="flex items-center gap-2">
          <img
            className="cursor-pointer"
            onClick={handlePreviousMonth}
            src="/images/left.svg"
            alt=""
          />
          <p className="font-semibold text-base text-[#1F1F1F] leading-[19.36px] whitespace-nowrap">
            Tháng {month},
          </p>
          <p className="font-semibold text-base text-[#1F1F1F] leading-[19.36px]">
            {year}
          </p>
          <img
            className="cursor-pointer"
            onClick={handleNextMonth}
            src="/images/right.svg"
            alt=""
          />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 gap-2 md:grid md:grid-cols-3 grid grid-cols-1 ">
        {giftCard.map((card, index) => (
          <div
            key={index}
            className="bg-white h-32 p-4 rounded-lg shadow-md shadow-[#0000001A]"
          >
            <div className=" flex gap-2 ">
              <div>
                <img className="onemo" src={card.image} alt="" />
                <img className="rescue" src="/image-left/Ensign.png" alt="" />
              </div>
              <div className="pt-2">
                <div className="flex leading-[16.94px] items-center font-semibold text-sm text-[#4284F3]">
                  {card.name}
                  <img
                    className="teck  w-3 h-3 "
                    src="/image-left/teck.png"
                    alt=""
                  />
                </div>
                <div className=" flex items-center gap-2 font-normal text-xs text-[#1F1F1F] leading-[14.52px]">
                  <p>{card.data}</p>
                  <p>{card.age}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <VButton className="rounded-[18px] px-4 flex items-center border border-[#4284f3] gap-2 h-[36px] w-full">
                <img src="/images/email.svg" alt="" />
                <p className="text-sm font-medium text-[#4284f3] whitespace-nowrap leading-[16.94px]">
                  {card.email}
                </p>
              </VButton>
              <VButton className="rounded-[18px] bg-[#4284f3] px-4 flex items-center gap-2 h-[36px] w-full">
                <img src="/images/gift.svg" alt="" />
                <p className="whitespace-nowrap text-sm text-white font-medium leading-[16.94px]">
                  {card.gift}
                </p>
              </VButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Birthday;
