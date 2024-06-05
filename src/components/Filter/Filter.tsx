import React, { useState } from "react";
import Input from "../core/v-input";
import VButton from "../core/v-button";
import Pending from "../StickerManagement/Pending";
import Uploaded from "../StickerManagement/Uploaded";
import VDropdownModal from "../core/v-dropdown";

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
    backgrou: "/images/filterbacgrou.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 2,
    backgrou: "/images/filterbacgrou.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 3,
    backgrou: "/images/filterbacgrou.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 4,
    backgrou: "/images/filterbacgrou.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 5,
    backgrou: "/images/filterbacgrou.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 6,
    backgrou: "/images/filterbacgrou.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 7,
    backgrou: "/images/filterbacgrou.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
  {
    id: 8,
    backgrou: "/images/filterbacgrou.svg",
    ensign: " /images/ensign.svg",
    represent: "/images/firework.svg",
    name: "chat_friend",
    slogan: " Chia sả khoảng khắc - Lưu giữ kỉ niệm đẹp",
    member: 16,
  },
];
const options = [
  {
    id: 1,
    category: "Sắp xếp vào danh mục của bạn",
    image: "/images/dropdown.svg",
    default: "Chọn danh mục",
  },
  {
    id: 2,
    category: "Độ tuổi phù hợp với nội dung này *",
    image: "/images/dropdown.svg",
    default: "Chọn độ tuổi",
  },
  {
    id: 3,
    category: "Chủ đề",
    image: "/images/dropdown.svg",
    default: "Chọn chủ đề",
  },
  {
    id: 1,
    category: "Đặt làm thông điệp",
    image: "/images/dropdown.svg",
    default: "Chọn thông điệp",
  },
];
const Filter = () => {
  const [transfer, setTransfer] = useState<String>("nanager");
  const handleTransfer = (key: any) => {
    setTransfer(key);
  };
  const [showModal, setShowModal] = useState(false);
  const handleCategoryClick = (key: any, setterFunction: any) => {
    setterFunction(key);
  };
  const [selectedCategory1, setSelectedCategory1] = useState(null);
  const [selectedCategory2, setSelectedCategory2] = useState(null);
  const [selectedCategory3, setSelectedCategory3] = useState(null);
  const [selectedCategory4, setSelectedCategory4] = useState(null);
  //
  const [file, setFile] = useState<any>(null);
  const [fileType, setFileType] = useState("");

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileType(selectedFile.type.split("/")[0]);
  };

  return (
    <div className="mx-auto w-full max-w-[800px]">
      <div className="relative">
        <img src="/images/filterbacgrou.svg" alt="" />
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
          <VButton
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 "
          >
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
        <div className="contri w-full   whitespace-nowrap gap-2 overflow-auto  flex justify-between items-center border-y ">
          {tabs.map((tab) => (
            <VButton
              onClick={() => handleTransfer(tab.key)}
              key={tab.id}
              className={`  leading-[16.94px] w-1/4 px-10 ${
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
            {manages.map((manage, index) => (
              <div key={index} className="bg-white shadow-md border rounded-md">
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto max-w-[600px] px-2 w-full">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full p-4 bg-white outline-none focus:outline-none">
                <div className="border-b-2">
                  <h1 className="text-[#4284F3] text-2xl pb-4 font-semibold leading-[29.05px] text-center ">
                    Tuỳ chọn của bạn
                  </h1>
                </div>
                <div className="flex justify-end mb-2 absolute right-2 top-2">
                  <VButton
                    onClick={() => setShowModal(false)}
                    className="rounded-full bg-[#D9D9D9] p-[8px] px-[10px] flex items-center gap-2 h-8 w-8 "
                  >
                    <img className="w-3 h-3" src="/images/Close.svg" alt="" />
                  </VButton>
                </div>
                <div className="sm:grid sm:grid-cols-2 grid grid-cols-1 gap-4 pt-4">
                  {options.map((option, index) => (
                    <div key={index} className="">
                      <label
                        form="default-input"
                        className="block mb-2 text-sm font-medium text-[#1F1F1F] leading-[16.94px]"
                      >
                        {option.category}
                      </label>
                      <VDropdownModal
                        className="w-full !top-8"
                        menu={[
                          {
                            key: "option 1",
                            onClick: () =>
                              handleCategoryClick(
                                "option 1",
                                index === 0
                                  ? setSelectedCategory1
                                  : index === 1
                                  ? setSelectedCategory2
                                  : index === 2
                                  ? setSelectedCategory3
                                  : setSelectedCategory4
                              ),
                          },
                          {
                            key: "option 2",
                            onClick: () =>
                              handleCategoryClick(
                                "option 2",
                                index === 0
                                  ? setSelectedCategory1
                                  : index === 1
                                  ? setSelectedCategory2
                                  : index === 2
                                  ? setSelectedCategory3
                                  : setSelectedCategory4
                              ),
                          },
                          {
                            key: "option 3",
                            onClick: () =>
                              handleCategoryClick(
                                "option 3",
                                index === 0
                                  ? setSelectedCategory1
                                  : index === 1
                                  ? setSelectedCategory2
                                  : index === 2
                                  ? setSelectedCategory3
                                  : setSelectedCategory4
                              ),
                          },
                          {
                            key: "option 4",
                            onClick: () =>
                              handleCategoryClick(
                                "option 4",
                                index === 0
                                  ? setSelectedCategory1
                                  : index === 1
                                  ? setSelectedCategory2
                                  : index === 2
                                  ? setSelectedCategory3
                                  : setSelectedCategory4
                              ),
                          },
                        ]}
                        menuclassName="w-full"
                        buttonclassName="w-full"
                        label={
                          <div className="justify-between h-[38px] min-w-[276px]   flex items-center text-xs px-2 font-normal leading-[14.52px] text-[#A89E9F] rounded-lg  outline-none border border-[#CAD0D7] ">
                            {[
                              selectedCategory1,
                              selectedCategory2,
                              selectedCategory3,
                              selectedCategory4,
                            ][index] || option.default}
                            <img className="" src={option.image} alt="" />
                          </div>
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="border border-[#CAD0D7] p-4 rounded-lg mt-4">
                  <div className="sm:grid sm:grid-cols-2 grid grid-cols-1">
                    <div className="flex items-center gap-2">
                      {file && (
                        <div className="mb-4 flex items-center gap-2">
                          {fileType === "image" && (
                            <img
                              src={URL.createObjectURL(file)}
                              alt="Uploaded"
                              className="max-w-[100px] h-[90px]"
                            />
                          )}
                          {fileType === "video" && (
                            <video controls className="max-w-[100px] h-[90px]">
                              <source
                                src={URL.createObjectURL(file)}
                                type="video/mp4"
                              />
                            </video>
                          )}
                          {fileType === "audio" && (
                            <audio controls className="max-w-[100px] h-[90px]">
                              <source
                                src={URL.createObjectURL(file)}
                                type="audio/mpeg"
                              />
                            </audio>
                          )}
                          <p className="text-[#1F1F1F] font-medium text-sm">
                            {file.name}
                          </p>
                        </div>
                      )}
                      {/* <VButton className="rounded-[100%] bg-[#D9D9D9] p-[8px] flex items-center gap-2 h-10 w-10 ">
                        <img
                          className="w-6 h-6"
                          src="/images/music.svg"
                          alt=""
                        />
                      </VButton>
                      <p className="text-[#1F1F1F] font-medium text-sm">
                        Âm thanh
                      </p> */}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-[#D9D9D9] p-2 flex items-center gap-2 h-9 w-[96px]">
                        <img
                          className="w-6 h-6"
                          src="/images/file.svg"
                          alt=""
                        />
                        <label
                          htmlFor="file-input"
                          className="text-[#1F1F1F] font-medium text-sm whitespace-nowrap"
                        >
                          Tải lên
                        </label>
                        <input
                          id="file-input"
                          type="file"
                          accept="image/*,video/*,audio/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </button>
                      <span className="text-[#636363] text-xs font-normal">
                        hoặc
                      </span>
                      <VButton className="rounded-lg bg-[#D9D9D9] p-[8px] flex items-center gap-2 h-9 w-[134px] ">
                        <img
                          className="w-6 h-6"
                          src="/images/musicfolder.svg"
                          alt=""
                        />
                        <p className="text-[#1F1F1F] font-medium text-sm whitespace-nowrap">
                          Chọn từ kho
                        </p>
                      </VButton>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <VDropdownModal
                      className="flex items-center gap-2 justify-center !-right-[45px]"
                      menu={[
                        {
                          disabled: true,
                          key: (
                            <div className="flex items-center gap-2">
                              <img
                                className="w-6 h-6"
                                src="/images/checkbox.svg"
                                alt=""
                              />
                              <p className="text-[#1F1F1F]">Đăng lên tường</p>
                            </div>
                          ),
                        },
                        {
                          disabled: true,
                          key: (
                            <div className="flex items-center gap-2">
                              <img
                                className="w-6 h-6"
                                src="/images/checkbox.svg"
                                alt=""
                              />
                              <p className="text-[#1F1F1F]">
                                Dùng làm quảng cáo
                              </p>
                            </div>
                          ),
                        },
                        {
                          disabled: true,
                          key: (
                            <div className="flex items-center gap-2">
                              <img
                                className="w-6 h-6"
                                src="/images/checkbox.svg"
                                alt=""
                              />
                              <p className="text-[#1F1F1F]">Chọn chủ đề</p>
                            </div>
                          ),
                        },
                      ]}
                      label={
                        <div className="text-[#4284F3] font-normal text-sm  flex items-center gap-2 ">
                          <img src="/images/sting.svg" alt="" />
                          <span className="">Thiết lập nâng cao</span>
                        </div>
                      }
                    />
                  </div>
                </div>
                <div>
                  <VButton className="rounded-[18px] bg-[#4284F3] px-4 flex items-center gap-2 h-9 w-full mt-2">
                    <p className="text-white font-medium text-sm">Save</p>
                  </VButton>
                </div>
              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-40 bg-[#00000080]"></div>
        </>
      ) : null}
    </div>
  );
};
export default Filter;
