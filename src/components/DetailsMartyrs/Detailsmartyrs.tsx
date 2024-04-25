import Link from "next/link";
import React from "react";

const information = [
  {
    id: 1,
    surname: "Họ và tên:",
    name: "TRẦN VĂN ĐỨC",
  },
  {
    id: 2,
    surname: "Năm sinh",
    name: "1946",
  },

  {
    id: 3,
    surname: "Năm hi sinh",
    name: "15/03/1947",
  },
  {
    id: 4,
    surname: "Quê quán",
    name: "Hóc Môn",
  },
  {
    id: 5,
    surname: "Chức Vụ",
    name: "Thiéu",
  },
  {
    id: 6,
    surname: "Năm sinh",
    name: "1946",
  },
  {
    id: 7,
    surname: "Năm sinh",
    name: "1946",
  },
];

const Detailsmartyrs = () => {
  return (
    <div className="max-w-[1024px] mx-auto w-full">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2">
          <div className="flex items-center justify-between bg-white w-full p-4 rounded-lg">
            <div className=" flex gap-2 pt-3 px-4">
              <Link href="">
                <img className="onemo" src="/image/userone.png" alt="" />
                <img className="rescue" src="/image-left/Ensign.png" alt="" />
              </Link>
              <div>
                <div className="flex items-center font-semibold text-sm text-[#4284F3]">
                  Smile Life (@)
                  <img className="teck" src="/image-left/teck.png" alt="" />
                </div>
                <>
                  <div className=" flex items-center gap-1">
                    <div className=" font-normal text-xs text-[#A89E9F]">
                      <p>Vừa xong</p>
                    </div>
                  </div>
                </>
              </div>
            </div>
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1 bg-white">
              <img src="/image/huong.png" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng hương</p>
            </button>
          </div>
          <div className="">
            <img className="w-full" src="image/anhsuamols.png" alt="" />
          </div>
          <div className="px-4">
            <div className="pt-2">
              <p className="text-[#1F1F1F] font-medium text-sm">
                Nghĩa trang liệt sĩ Tân Xuân, Hóc Môn
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button className="w-full h-[36px] bg-white rounded-[18px] flex justify-center items-center text-sm text-[#4284F3] font-medium border border-[#4284F3] gap-2">
                <img src="/image/chiduong.png" alt="" />
                <p>Chỉ đường</p>
              </button>
              <button className="w-full h-[36px] bg-[#4284F3] rounded-[18px] flex justify-center items-center text-sm text-white font-medium gap-2">
                <p>Nhận thân nhân</p>
                <img src="/image/chitiet.png" alt="" />
              </button>
            </div>
            {information.map((list) => (
              <div key={list.id} className="flex gap-1 items-center pt-4">
                <p className="font-normal text-[#1F1F1F] text-sm">
                  {list.surname}
                </p>
                <p className="font-semibold text-[#1F1F1F] text-sm">
                  {list.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div>
            <div className="relative">
              <img className="w-full " src="/image/anhnghiatrang.png" alt="" />
              <Link className=" absolute left-[43%]" href="">
                <img className="w-16 h-16" src="/image/userone.png" alt="" />
                <img
                  className="ensign w-[34px] h-6"
                  src="/image-left/Ensign.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsmartyrs;
