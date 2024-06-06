import { useState } from "react";
import SlideRightChat from "../SlideRightChat/SlideRightChat";
import VButton from "../core/v-button";

const samples = [
  {
    id: 1,
    imagehappy: "/images/templateone.svg",
    wish: " Thiệp chúc mừng sinh nhật 1",
    imguser: "/image/userone.png",
    ensign: "/image-left/Ensign.png",
    name: "Trần Văn Đại",
  },
  {
    id: 2,
    imagehappy: "/images/cardone.svg",
    wish: " Thiệp chúc mừng sinh nhật 2",
    imguser: "/image/userone.png",
    ensign: "/image-left/Ensign.png",
    name: "Nguyễn Thu Hà",
  },
  {
    id: 3,
    imagehappy: "/images/cardtow.svg",
    wish: " Thiệp chúc mừng sinh nhật 3",
    imguser: "/image/userone.png",
    ensign: "/image-left/Ensign.png",
    name: "Phạm Thị Kim Ngân",
  },
  {
    id: 4,
    imagehappy: "/images/cardtrue.svg",
    wish: " Thiệp chúc mừng sinh nhật 4",
    imguser: "/image/userone.png",
    ensign: "/image-left/Ensign.png",
    name: "Hoàng Quốc Đức",
  },
];
const stickers = [
  {
    id: 1,
    image: "/images/tatca.svg",
    name: "Ảnh bìa cá nhân",
    tab: "1",
  },
  {
    id: 2,
    image: "/images/gautruc.svg",
    name: "Bằng khen",
    tab: "2",
  },
  {
    id: 3,
    image: "/images/meo.svg",
    name: "Chúc mừng năm mới",
    tab: "3",
  },
  {
    id: 4,
    image: "/images/cho.svg",
    name: "Hóa đơn",
    tab: "4",
  },
  {
    id: 5,
    image: "/images/quaivat.svg",
    name: "Thiệp Noel",
    tab: "5",
  },
  {
    id: 6,
    image: "/images/canhcut.svg",
    name: "Lễ giáng sinh",
    tab: "6",
  },
  {
    id: 6,
    image: "/images/canhcut.svg",
    name: "Happy New Year 2024",
    tab: "6",
  },
];

const Template = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/tampalate.svg",
    "/images/templateone.svg",
    "/images/templatetwo.svg",
  ];

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePreviousClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto max-w-[100px] w-full"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-5xl max-h-full">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full p-4 bg-white outline-none focus:outline-none ">
                <div className="flex justify-end mb-2 absolute -right-9 top-0">
                  <VButton
                    onClick={() => setShowModal(false)}
                    className="rounded-full bg-[#D9D9D9] p-[8px] px-[10px] flex items-center gap-2 h-8 w-8 "
                  >
                    <img className="w-3 h-3" src="/images/Close.svg" alt="" />
                  </VButton>
                </div>
                <div className="flex gap-2 max-[768px]:flex-col mb-6">
                  <div className="w-3/5 max-[768px]:w-full">
                    <img
                      className="w-full"
                      src={images[currentImageIndex]}
                      alt=""
                    />
                  </div>
                  <div className="px-2 w-2/5 max-[768px]:w-full">
                    <h1 className="leading-[29.05px] text-2xl font-semibold text-[#1F1F1F]">
                      Thiệp chúc mừng sinh nhật hiện đại, sang trọng
                    </h1>
                    <p className="leading-[16.94px] text-sm font-normal  text-[#1F1F1F] pt-2">
                      Thiệp chúc mừng (1920 x 1080 px)
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="userone flex  items-center gap-2 ">
                        <div>
                          <a href="">
                            <img
                              className="onemo"
                              src="/image/userone.png"
                              alt=""
                            />
                            <img
                              className="ensign"
                              src="/image-left/Ensign.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="">
                          <div className="flex items-center leading-[16.94px] text-sm font-semibold text-[#1F1F1F]">
                            Đặng Trọng Đức
                            <img
                              className="teck"
                              src="/image-left/teck.png"
                              alt=""
                            />
                          </div>
                          <span className="leading-[14.52px] text-xs font-normal text-[#636363]">
                            15 phút
                          </span>
                        </div>
                      </div>
                      <VButton className="flex items-center gap-2 bg-[#0000000D] px-4 py-1 rounded-full">
                        <img src="/images/theodoi.svg" alt="" />
                        <p className="text-[#1F1F1F] whitespace-nowrap">
                          Theo dõi
                        </p>
                      </VButton>
                    </div>
                    <div className="flex items-center gap-2 border-b pb-2">
                      <VButton className="bg-[#4284F3] w-full px-4 rounded-[18px] flex gap-2 items-center">
                        <img src="/images/pen.svg" alt="" />
                        <p className="whitespace-nowrap">Tùy chỉnh mẫu này</p>
                      </VButton>
                      <VButton className="bg-[#0000000D]  rounded-full h-9 w-9 flex gap-2 items-center px-[12px]">
                        <img src="/images/sao.svg" alt="" />
                      </VButton>
                      <VButton className="bg-[#0000000D]  rounded-full h-9 w-9 flex gap-2 items-center px-[12px]">
                        <img src="/images/bacham.svg" alt="" />
                      </VButton>
                    </div>
                    <div className="flex items-center pt-2 w-full relative">
                      <VButton
                        onClick={handlePreviousClick}
                        className="bg-white  rounded-full h-9 w-9 flex gap-2 left-0 items-center px-[8px] absolute"
                      >
                        <img src="/images/left.svg" alt="" />
                      </VButton>
                      <div className="flex gap-2">
                        {images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className={`w-1/3 object-contain cursor-pointer  ${
                              index === currentImageIndex
                                ? "border-4 border-[#4284F3] rounded-2xl"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                      <VButton
                        onClick={handleImageClick}
                        className="bg-white -right-4  rounded-full h-9 w-9 flex gap-2 items-center px-[8px] absolute"
                      >
                        <img src="/images/right.svg" alt="" />
                      </VButton>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <div className="flex items-center gap-2 ">
                    <p className="text-[#1F1F1F] font-semibold text-base">
                      Mẫu tương tự
                    </p>
                    <span className="font-normal text-sm text-[#636363]">
                      (10 mẫu)
                    </span>
                  </div>
                  <div className=" gap-2 w-full sm:grid sm:grid-cols-3 grid grid-cols-2 md:grid md:grid-cols-4 pt-2">
                    {samples.map((sample, index) => (
                      <div key={index} className="">
                        <img
                          className="w-full"
                          src={sample.imagehappy}
                          alt=""
                        />
                        <p className="text-sm font-medium text-[#1F1F1F] pt-2">
                          {sample.wish}
                        </p>
                        <div className="userone  flex items-center gap-2 p-2">
                          <a href="">
                            <img
                              className="onemo h-[28px] w-[28px]"
                              src={sample.imguser}
                              alt=""
                            />
                            <img className="towmo" src={sample.ensign} alt="" />
                          </a>
                          <div className="pb-3">
                            <span className="flex items-center  leading-[16.94px] text-sm font-normal text-[#1F1F1F]">
                              {sample.name}
                              <img
                                className="teck"
                                src="/image-left/teck.png"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 ">
                    <p className="text-[#1F1F1F] font-semibold text-base">
                      Khám phá thêm
                    </p>
                  </div>
                  <div className="contri flex items-center gap-1  pt-2 overflow-x-scroll">
                    {stickers.map((sticker) => (
                      <VButton
                        key={sticker.id}
                        className="flex items-center gap-2 w-auto  rounded-2xl px-4 py-1 border border-[#0000000D] h-8 shadow shadow-[#0000001A]
                           bg-white  !text-[#636363]"
                      >
                        <img src={sticker.image} alt="" />
                        <p className="whitespace-nowrap text-sm  font-normal leading-[16.94px]">
                          {sticker.name}
                        </p>
                      </VButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-40 bg-[#00000080]  "></div>
        </>
      ) : null}
    </>
  );
};

export default Template;
