import React from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";

const users = [
  {
    id: 1,
    image: "/images/vietnam.svg",
  },
  {
    id: 2,
    image: "/images/vnone.svg",
  },
  {
    id: 3,
    image: "/images/vntow.svg",
  },

  {
    id: 4,
    image: "/images/vntrue.svg",
  },
  {
    id: 5,
    image: "/images/vietnam.svg",
  },
  {
    id: 6,
    image: "/images/vnone.svg",
  },
  {
    id: 7,
    image: "/images/vntow.svg",
  },

  {
    id: 8,
    image: "/images/vntrue.svg",
  },
  {
    id: 9,
    image: "/images/vietnam.svg",
  },
  {
    id: 10,
    image: "/images/vnone.svg",
  },
  {
    id: 11,
    image: "/images/vntow.svg",
  },

  {
    id: 12,
    image: "/images/vntrue.svg",
  },
  {
    id: 13,
    image: "/images/vietnam.svg",
  },
  {
    id: 14,
    image: "/images/vnone.svg",
  },
  {
    id: 15,
    image: "/images/vnone.svg",
  },
  {
    id: 16,
    image: "/images/vntow.svg",
  },
];
const topics = [
  {
    id: 1,
    img: "/images/dulich.svg",
    name: "Ô tô",
    tab: "1",
  },
  {
    id: 2,
    img: "/images/amthuc.svg",
    name: "Xe máy",
    tab: "2",
  },
  {
    id: 3,
    img: "/images/congnghe.svg",
    name: "Xe đạp",
    tab: "3",
  },
  {
    id: 4,
    img: "/images/thoitrang.svg",
    name: "Xe điện",
    tab: "4",
  },
  {
    id: 5,
    img: "/images/suckhoe.svg",
    name: "Siêu xe",
    tab: "5",
  },
  {
    id: 6,
    img: "/images/giaoduc.svg",
    name: "Xe VinFast",
    tab: "6",
  },
  {
    id: 7,
    img: "/images/suckhoe.svg",
    name: "Xe nhập khẩu TQ",
    tab: "5",
  },
];
const Listcar = [
  {
    id: 1,
    img: "/images/card.svg",
    carCompany: "Mercedes C200 2015 Exclusive ",
    hashtag: "#xeco #mercedes #oto",
    status: 1,
    listrescue: 1,
  },
  {
    id: 2,
    img: "/images/carone.svg",
    carCompany: "Toyota Innova 2010 xe còn rất ngon ",
    hashtag: "#xeco #toyota #innova",
    status: 2,
    listrescue: 2,
  },
  {
    id: 3,
    img: "/images/card.svg",
    carCompany: "Mercedes C200 2015 Exclusive ",
    hashtag: "#xeco #mercedes #oto",
    status: 3,
    listrescue: 3,
  },
  {
    id: 4,
    img: "/images/carone.svg",
    carCompany: "Toyota Innova 2010 xe còn rất ngon ",
    hashtag: "#xeco #toyota #innova",
    status: 4,
    listrescue: 1,
  },
  {
    id: 5,
    img: "/images/card.svg",
    carCompany: "Mercedes C200 2015 Exclusive ",
    hashtag: "#xeco #mercedes #oto",
    status: 5,
    listrescue: 2,
  },
  {
    id: 6,
    img: "/images/carone.svg",
    carCompany: "Toyota Innova 2010 xe còn rất ngon ",
    hashtag: "#xeco #toyota #innova",
    status: 6,
    listrescue: 3,
  },
];
const chatpage = [
  {
    id: 1,
    img: "/image/userone.png",
    name: "Huyền Thương",
  },
];
const Ecommerce = () => {
  return (
    <div className="max-w-[51rem] mx-auto max-[900px]:px-2">
      <div className="relative">
        <img className="" src="/images/bgecommerce.svg" alt="" />
        <VButton className="bg-[#984AFF] rounded-[18px] gap-2 px-4 absolute right-2 bottom-2">
          <img src="/images/tool.svg" alt="" />
          <p className="text-xs sm:text-sm">AI Tool</p>
        </VButton>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-9 flex  items-center">
          <Input
            className="sm:w-[350px] md:w-[500px] w-[220px]  px-10 rounded-2xl  py-[6px] relative  font-normal text-xs sm:text-sm text-[#1F1F1F] bg-white outline-none"
            placeholder=" Tìm kiếm,..."
          />

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
      <div className="tabs py-2 flex items-center gap-4 overflow-x-scroll">
        {users.map((user) => (
          <img key={user.id} src={user.image} alt="" />
        ))}
      </div>
      <div className="tabs flex items-center gap-2 whitespace-nowrap overflow-scroll">
        {topics.map((topic) => (
          <VButton
            key={topic.id}
            className="flex items-center  gap-2 w-auto bg-white rounded-2xl px-4 py-1 border border-[#0000000D] sm:h-8 h-7 shadow shadow-[#0000001A]"
          >
            <img src={topic.img} alt="" />
            <p className=" font-normal leading-[16.94px] text-xs sm:text-sm !text-[#636363] text-inherit">
              {topic.name}
            </p>
          </VButton>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 max-[400px]:grid-cols-1 gap-4 pt-2">
        {Listcar.map((car) => (
          <div key={car.id} className=" rounded-[16px] w-full h-auto ">
            <div className="relative">
              <div>
                <img className="w-full " src={car.img} alt="" />
              </div>
            </div>
            <div>
              <div className=" line-clamp-2 ">
                <span className="text-[#1F1F1F] text-sm font-medium">
                  {car.carCompany}
                </span>
                <span className="text-[#4284F3] font-normal text-sm ">
                  {car.hashtag}
                </span>
              </div>
              <div className="">
                {chatpage.map((chat) => (
                  <div className="userone flex items-center gap-2">
                    <div>
                      <img
                        className="onemo w-7 h-7"
                        src="/image/userone.png"
                        alt=""
                      />
                      <img
                        className="tone w-3 h-2"
                        src="/image-left/Ensign.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="flex items-center font-semibold text-sm text-[#4284F3]">
                        {chat?.name}
                        <img
                          className="teck"
                          src="/image-left/teck.png"
                          alt=""
                        />
                      </div>
                      <div className="flex gap-1">
                        <p className="font-normal text-xs text-[#636363]">
                          15 phút
                        </p>
                        <img src="/images/material.svg" alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
