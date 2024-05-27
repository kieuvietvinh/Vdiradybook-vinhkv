import React, { useState } from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";
import Holiday from "../Holiday/Holiday";
import { useRouter } from "next/router";

const tabs = [
  {
    id: 1,
    img: "/images/dantoc.svg",
    name: "Dân tộc",
    tab: "1",
  },
  {
    id: 2,
    img: "/images/nghanhnghe.svg",
    name: "Ngành nghề",
    tab: "2",
  },
  {
    id: 3,
    img: "/images/tongiao.svg",
    name: "Tôn giáo",
    tab: "3",
  },
  {
    id: 4,
    img: "/images/truyenthong.svg",
    name: "Truyền thống",
    tab: "4",
  },
  {
    id: 5,
    img: "/images/ngayle.svg",
    name: "Ngày lễ",
    tab: "5",
  },
];
const Listurgent = [
  {
    id: 1,
    img: "/images/dang.svg",
    fire: "Cứu hỏa",
    information: " Thành lập Đảng cộng sản Việt Nam.",
    address: "Thứ 3, ngày 03/05/1930",
    followers: "999 người quan tâm · 999 người theo dõi",
    work: 1,
    active: true,
  },
  {
    id: 2,
    img: "/images/thuoc.svg",
    fire: "Cứu hỏa",
    information: "Ngày Thầy thuốc Việt Nam.",
    address: "Thứ 5, ngày 27/07/2024",
    followers: "150 người quan tâm · 458 người theo dõi",
    work: 2,
    active: false,
  },
  {
    id: 3,
    img: "/images/thanhnien.svg",
    fire: "Cứu hỏa",
    information: " Ngày thành lập Đoàn TNCS Hồ Chí Minh",
    address: "Thứ 3, ngày 26/03/2024",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    work: 3,
    active: true,
  },
  {
    id: 4,
    img: "/images/dang.svg",
    fire: "Cứu hỏa",
    information: " Thành lập Đảng cộng sản Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "999 người quan tâm · 999 người theo dõi",
    work: 1,
    active: true,
  },
  {
    id: 5,
    img: "/images/thuoc.svg",
    fire: "Cứu hỏa",
    information: "Ngày Thầy thuốc Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "150 người quan tâm · 458 người theo dõi",
    work: 2,
    active: false,
  },
  {
    id: 6,
    img: "/images/thanhnien.svg",
    fire: "Cứu hỏa",
    information: " Ngày thành lập Đoàn TNCS Hồ Chí Minh",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    work: 3,
    active: true,
  },
];
const Listholiday = [
  {
    id: 1,
    img: "/images/yaer.svg",
    information: " Tết Dương lịch 2024.",
    address: "Thứ 3, ngày 01/01/2024",
    followers: "999 người quan tâm · 999 người theo dõi",
    work: 1,
    active: true,
  },
  {
    id: 2,
    img: "/images/phaohoa.svg",
    information: "Tết Nguyên Đán Nhâm Thìn 2024.",
    address: "Thứ 3, ngày 15/02/2024",
    followers: "150 người quan tâm · 458 người theo dõi",
    work: 2,
    active: false,
  },
  {
    id: 3,
    img: "/images/hungvuong.svg",
    information: " Giỗ Tổ Hùng Vương",
    address: "Thứ 3, ngày 10/03/2024",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    work: 3,
    active: true,
  },
  {
    id: 4,
    img: "/images/yaer.svg",
    information: " Tết Dương lịch 2024.",
    address: "Thứ 3, ngày 01/01/2024",
    followers: "999 người quan tâm · 999 người theo dõi",
    work: 1,
    active: true,
  },
  {
    id: 5,
    img: "/images/phaohoa.svg",
    information: "Tết Nguyên Đán Nhâm Thìn 2024.",
    address: "Thứ 3, ngày 10/03/2024",
    followers: "150 người quan tâm · 458 người theo dõi",
    work: 2,
    active: false,
  },
  {
    id: 6,
    img: "/images/hungvuong.svg",
    information: " Giỗ Tổ Hùng Vương",
    address: "Thứ 3, ngày 10/03/2024",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    work: 3,
    active: true,
  },
];

const Traditional = (props: any) => {
  const router = useRouter();
  const list =
    router.query.id === "4" || !router.query.id
      ? Listurgent
      : router.query.id === "5"
      ? Listholiday
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
    <div className="max-w-[51rem] mx-auto max-[900px]:px-2">
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
      <div className="tabs flex items-center gap-2 whitespace-nowrap overflow-scroll">
        {tabs.map((tab) => (
          <VButton
            onClick={() => handleClick(tab)}
            key={tab.id}
            className={`flex items-center gap-2 w-auto  rounded-2xl px-4 py-1 border border-[#0000000D] h-8 shadow shadow-[#0000001A]${
              tab.tab === router.query.id ||
              (tab.tab === "4" && !router.query.id)
                ? "  !bg-[#4284f3]  !text-white"
                : " bg-white border !text-[#636363]"
            }`}
          >
            <img src={tab.img} alt="" />
            <p className=" font-normal leading-[16.94px] text-sm  text-inherit">
              {tab.name}
            </p>
          </VButton>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 max-[500px]:grid-cols-1 gap-2 pt-2 ">
        {list.map((item) => (
          <Holiday item={item} />
        ))}
      </div>
    </div>
  );
};
Listurgent;
export default Traditional;
