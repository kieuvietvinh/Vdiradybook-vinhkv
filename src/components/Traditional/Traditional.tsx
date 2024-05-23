import React, { useState } from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";
import VDropdownModal from "../core/v-dropdown";

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
    work: 1,
  },
  {
    id: 2,
    img: "/images/thuoc.svg",
    fire: "Cứu hỏa",
    information: "Ngày Thầy thuốc Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "150 người quan tâm · 458 người theo dõi",
    status: 2,
    work: 2,
  },
  {
    id: 3,
    img: "/images/thanhnien.svg",
    fire: "Cứu hỏa",
    information: " Ngày thành lập Đoàn TNCS Hồ Chí Minh",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    status: 3,
    work: 3,
  },
  {
    id: 4,
    img: "/images/dang.svg",
    fire: "Cứu hỏa",
    information: " Thành lập Đảng cộng sản Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "999 người quan tâm · 999 người theo dõi",
    status: 1,
    work: 1,
  },
  {
    id: 5,
    img: "/images/thuoc.svg",
    fire: "Cứu hỏa",
    information: "Ngày Thầy thuốc Việt Nam.",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "150 người quan tâm · 458 người theo dõi",
    status: 2,
    work: 2,
  },
  {
    id: 6,
    img: "/images/thanhnien.svg",
    fire: "Cứu hỏa",
    information: " Ngày thành lập Đoàn TNCS Hồ Chí Minh",
    address: "Thứ 3, ngày 03/02/2024",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    status: 3,
    work: 3,
  },
];

const Traditional = () => {
  const [label, setLabel] = useState("Tháng 4");
  const handleClick = (key: any) => {
    setLabel(key);
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
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 max-[500px]:grid-cols-1 gap-2 pt-2  ">
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
            <div className="p-2">
              <div className="py-2">
                <Work work={list.work} />
              </div>
              <div>
                <p className="text-[#1F1F1F] text-sm font-medium line-clamp-1 leading-[16.94px]">
                  {list.information}
                </p>
              </div>
              <div className="text-xs font-normal leading-[14.52px]  text-[#DD2B17] pt-2 flex items-center gap-2">
                <img src="/images/lich.svg" alt="" />
                <p>{list.address}</p>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <img src="/image/calluser.png" alt="" />
                <p className="text-xs line-clamp-1 font-medium leading-[14.52px]  text-[#1F1F1F]">
                  {list.followers}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <button className="w-full h-[36px] bg-white rounded-[18px]  flex justify-center items-center text-sm text-[#4284F3] font-medium border border-[#4284F3] gap-2">
                  <img src="/images/sao.svg" alt="" />
                  <p>Quan tâm </p>
                </button>
                <button className="w-full h-[36px] bg-white] rounded-[18px] flex justify-center items-center text-sm text-[#4284F3] border border-[#4284F3] font-medium gap-1">
                  <img src="/images/thamgia.svg" alt="" />
                  <p>Tham gia</p>
                </button>
                <VDropdownModal
                  className="text-sm  "
                  menu={[
                    {
                      key: "Sao chép liên kết",
                      onClick: () => handleClick("Sao chép liên kết"),
                    },
                    {
                      key: "Sao chép mã nhúng",
                      onClick: () => handleClick("Sao chép mã nhúng"),
                    },
                    {
                      key: "Chỉnh sửa",
                      onClick: () => handleClick("Chỉnh sửa"),
                    },
                    {
                      key: "Trạng thái",
                      onClick: () => handleClick("Trạng thái"),
                    },
                    {
                      key: "Bật thông báo",
                      onClick: () => handleClick("Bật thông báo"),
                    },
                    {
                      key: "Tắt cảm nhận",
                      onClick: () => handleClick("Tắt cảm nhận"),
                    },
                    {
                      key: "Xoá sự kiện",
                      onClick: () => handleClick("Xoá sự kiện"),
                    },
                  ]}
                  label={
                    <div className="min-w-9 h-9 bg-[#0000000D] rounded-full flex justify-center items-center">
                      <img
                        className="h-5 w-5"
                        src="/images/bacham.svg"
                        alt=""
                      />
                    </div>
                  }
                ></VDropdownModal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Work = ({ work }: any) => {
  if (work === 1)
    return (
      <div>
        <button className="bg-[#FFDFBE] rounded-2xl py-1 px-3 flex items-center gap-1 ">
          <img className="" src="/images/sap.svg" alt="" />
          <p className="text-[#FF8300] font-normal text-xs">Sắp diễn ra</p>
        </button>
      </div>
    );
  if (work === 2)
    return (
      <div>
        <button className="bg-[#F3E0FF] rounded-2xl py-1 px-3 flex items-center gap-1 ">
          <img className="" src="/images/dangdien.svg" alt="" />
          <p className="text-[#6E00FF] font-normal text-xs">Đang diên ra</p>
        </button>
      </div>
    );
  if (work === 3)
    return (
      <div>
        <button className="bg-[#FFE1E1] rounded-2xl py-1 px-3 flex items-center gap-1 ">
          <img className="" src="/images/da.svg" alt="" />
          <p className="text-[#DD2B17] font-normal text-xs">Đã kết thức</p>
        </button>
      </div>
    );
};

export default Traditional;
