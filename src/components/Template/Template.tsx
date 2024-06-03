import { useState } from "react";
import SlideRightChat from "../SlideRightChat/SlideRightChat";
import VButton from "../core/v-button";

const Template = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-[800px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-4 bg-white outline-none focus:outline-none">
                <div className="flex">
                  <div>
                    <img src="/images/tamplate.svg" alt="" />
                  </div>
                  <div className="px-2">
                    <h1 className="leading-[29.05px] text-2xl font-semibold text-[#1F1F1F]">
                      Thiệp chúc mừng sinh nhật hiện đại, sang trọng
                    </h1>
                    <p className="leading-[16.94px] text-sm font-normal  text-[#1F1F1F] pt-2">
                      Thiệp chúc mừng (1920 x 1080 px)
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="userone flex ">
                        <a href="">
                          <img
                            className="onemo"
                            src="/image/userone.png"
                            alt=""
                          />
                          <img
                            className="towmo"
                            src="/image-left/Ensign.png"
                            alt=""
                          />
                        </a>
                        <div>
                          <div className="flex items-center leading-[16.94px] text-sm font-semibold text-[#1F1F1F]">
                            Đặng Trọng Đức
                            <img
                              className="teck"
                              src="/image-left/teck.png"
                              alt=""
                            />
                          </div>
                          <p className="leading-[14.52px] text-xs font-normal text-[#636363]">
                            15 phút
                          </p>
                        </div>
                      </div>
                      <VButton className="flex items-center gap-2 bg-[#0000000D] px-4 py-1 rounded-full">
                        <img src="/images/theodoi.svg" alt="" />
                        <p className="text-[#1F1F1F]">Theo dõi</p>
                      </VButton>
                    </div>
                    <div className="flex items-center gap-2">
                      <VButton className="bg-[#4284F3] w-full px-4 rounded-[18px] flex gap-2 items-center">
                        <img src="/images/pen.svg" alt="" />
                        <p>Tùy chỉnh mẫu này</p>
                      </VButton>
                      <VButton className="bg-[#0000000D]  rounded-full h-9 w-9 flex gap-2 items-center px-[12px]">
                        <img src="/images/sao.svg" alt="" />
                      </VButton>
                      <VButton className="bg-[#0000000D]  rounded-full h-9 w-9 flex gap-2 items-center px-[12px]">
                        <img src="/images/bacham.svg" alt="" />
                      </VButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Template;
