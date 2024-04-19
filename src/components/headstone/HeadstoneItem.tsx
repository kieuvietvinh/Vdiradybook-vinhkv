import React, { useState } from "react";

const HeadstoneItem = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleModal}
      key={props?.lis.id}
      className={`p-2 mx-2 cursor-pointer ${
        props.lis.active
          ? "bg-[#DD2B17] relative h-auto  rounded-lg p-2 border-transparent border-4 hover:border-[#4284F3] "
          : "bg-[#0000000D] relative h-auto rounded-lg p-2 border-dashed border-2"
      }`}
    >
      {isOpen && (
        <div className="absolute -top-1/2   border  bg-white rounded-lg z-10 w-[232px] max-[640px]:fixed max-[640px]:top-1/2 max-[640px]:left-1/4">
          <div className=" p-4  ">
            <div>
              <img src="/image/bialietsi.png" alt="" />
              <div className="flex justify-between text-[#1F1F1F] font-semibold text-sm pt-2">
                <p>TRẦN VĂN ĐỨC</p>
                <p>B1</p>
              </div>
              <div className="text-sm font-normal text-[#1F1F1F] pt-2">
                <li className="px-2 py-1">Năm sinh: 1946</li>
                <li className="px-2 py-1">Năm hy sinh: 30/04/1975</li>
                <li className="px-2 py-1">Quê quán: Hóc Môn</li>
                <li className="px-2 py-1">Chức vụ: Thiếu tá</li>
                <li className="px-2 py-1">Đơn vị: Sư đoàn 302</li>
              </div>
              <div className="pt-2">
                <p className="#1F1F1F font-semibold text-sm text-[#1F1F1F]">
                  THÂN NHÂN (MẸ)
                </p>
                <div className="flex gap-2 pt-2  items-center">
                  <img src="/image/nguoithan.png" alt="" />
                  <div className=" ">
                    <div className="flex items-center relative">
                      <p className="font-semibold text-base text-[#4284F3]">
                        Nguyễn Thị Xuyến
                      </p>
                      <img
                        className="teckone"
                        src="/image-left/teck.png"
                        alt=""
                      />
                    </div>
                    <p className="text-[#4284F3] text-xs font-normal">Mẹ</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <p className="text-[#4284F3] font-medium text-sm ">
                    Xem chi tiết
                  </p>
                  <a href="">
                    <img src="/image/muingang.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <button
              className="absolute top-[1px] right-[1px] border border-[#1F1F1F] rounded-full w-4 h-4 flex justify-center items-center p-1"
              onClick={toggleModal}
            >
              <svg
                className="svg text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
              >
                <path
                  // fill="#000"
                  // fill-opacity="1"
                  // fill-rule="nonzero"
                  // stroke="none"
                  d="m6 5.293 4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      <div
        className={`flex items-center w-[34px] h-[24px]  justify-center cursor-pointer font-normal text-sm rounded-[4px] ${
          props.lis.active
            ? "bg-[#00000033]  text-white"
            : "bg-[#CAD0D7] text-[#1F1F1F]"
        }`}
      >
        {props?.lis.name}
      </div>

      {props.lis.active && (
        <>
          <div className="flex justify-center ">
            <button className=" py-3">
              <img src={props?.lis.img} alt="" />
            </button>
          </div>
          <div className="flex justify-center">
            <button className="">
              <img src={props?.lis.table} alt="" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HeadstoneItem;
