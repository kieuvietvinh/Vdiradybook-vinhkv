import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Route } from "react-router-dom";

const information = [
  {
    id: 1,
    surname: "Họ và tên:",
    name: "TRẦN VĂN ĐỨC",
  },
  {
    id: 2,
    surname: "Năm sinh:",
    name: "1946",
  },

  {
    id: 3,
    surname: "Năm hi sinh:",
    name: "15/03/1947",
  },
  {
    id: 4,
    surname: "Quê quán:",
    name: "Hóc Môn",
  },
  {
    id: 5,
    surname: "Chức Vụ:",
    name: "Thiéu tá",
  },
  {
    id: 6,
    surname: "Đơn vị:",
    name: "sư đoàn 302",
  },
  {
    id: 7,
    surname: "Số bia mộ:",
    name: "B8",
  },
];

const Detailsmartyrs = () => {
  const router = useRouter();

  return (
    <div className="max-w-[1024px] mx-auto w-full">
      <div
        onClick={() => router.back()}
        className="flex items-center gap-2 p-2 cursor-pointer "
      >
        <img src="/image/muitenone.png" alt="" />
        <p className="text-[#1F1F1F] font-semibold text-base hover:text-[#4284F3]">
          Chi tiết
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2 bg-white w-full h-auto rounded-lg shadow shadow-[#0000001A]">
          <div className="flex items-center justify-between px-4">
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
            <div className="flex items-center justify-between p-2 pt-4">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 font-normal text-xs text-[#1F1F1F]">
                  <img src="/image/yeuthich.png" alt="" />
                  <p>140</p>
                </button>
                <button className="flex items-center gap-1 font-normal text-xs text-[#1F1F1F]">
                  <img src="/image/huyhieu.png" alt="" />
                  <p>4784</p>
                </button>
                <button className="flex items-center gap-1 font-normal text-xs text-[#1F1F1F]">
                  <img src="/image/binhluan.png" alt="" />
                  <p>208</p>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 font-normal text-xs text-[#1F1F1F]">
                  <img src="/image/xem.png" alt="" />
                  <p>48</p>
                </button>
                <button className="flex items-center gap-1 font-normal text-xs text-[#1F1F1F]">
                  <img src="/image/chuyen.png" alt="" />
                  <p>99</p>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-[#DADADA] px-5 py-2">
              <button className="flex items-center justify-center gap-1 font-normal text-xs text-[#1F1F1F]">
                <img src="/image/yeuthich.png" alt="" />
                <p>Cảm xúc</p>
              </button>
              <button className="flex items-center gap-1 justify-center font-normal text-xs text-[#1F1F1F]">
                <img src="/image/binhluan.png" alt="" />
                <p>Cảm nhận</p>
              </button>
              <button className="flex items-center gap-1 justify-center font-normal text-xs text-[#1F1F1F]">
                <img src="/image/chuyen.png" alt="" />
                <p>Chia sẻ</p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg h-auto w-full shadow shadow-[#0000001A]">
            <div>
              <div className="relative">
                <img
                  className="w-full "
                  src="/image/anhnghiatrang.png"
                  alt=""
                />
                {/* <Link className=" absolute left-[43%]" href="">
                <img className="w-16 h-16" src="/image/userone.png" alt="" />
                <img
                  className="ensign w-[34px] h-6"
                  src="/image-left/Ensign.png"
                  alt=""
                />
              </Link> */}
              </div>
            </div>
            <div className="text-center pt-2">
              <p className="text-base font-semibold text-[#1F1F1F]">
                Nghĩa trang liệt sĩ Tân Xuân, Hóc Môn
              </p>
              <div className="relative flex justify-center pt-2">
                <table className=" text-sm  text-gray-500 ">
                  <thead className="">
                    <tr className="">
                      <th className="">
                        <img src="/image/v7.png" alt="" />
                      </th>
                      <th className="">
                        <img src="/image/v6.png" alt="" />
                      </th>
                      <th className="">
                        <img src="/image/v5.png" alt="" />
                      </th>
                      <th className="">
                        <img src="/image/v4.png" alt="" />
                      </th>
                      <th className="">
                        <img src="/image/v3.png" alt="" />
                      </th>
                      <th className="">
                        <img src="/image/v2.png" alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="mt-2">
                    <tr className="  text-xs text-[#000000] font-normal">
                      <td className="">3</td>
                      <td className="">2</td>
                      <td className="">1</td>
                      <td className="">1</td>
                      <td className="">2</td>
                      <td className="">6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pt-2">
                <p className="text-[#DD2B17] text-xs font-normal tracking-wide">
                  Chia sẻ khoảnh khắc - Lưu giữ kỷ niệm đẹp
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center pt-2">
                <p className="text-xs text-[#1F1F1F] font-normal">23 Nhật ký</p>
                <p className="text-xs text-[#1F1F1F] font-normal">
                  48 Người theo dõi
                </p>
                <p className="text-xs text-[#1F1F1F] font-normal">
                  306 Đang theo dõi
                </p>
              </div>
              <div className="flex items-center gap-2 p-4 ">
                <button className="w-full h-[36px] bg-[#4284F3] rounded-[18px] flex justify-center items-center text-sm text-white font-medium gap-2">
                  <p>Viếng thăm</p>
                </button>
                <button className="w-full h-[36px] bg-white rounded-[18px] flex justify-center items-center text-sm text-[#4284F3] font-medium border border-[#4284F3] gap-2">
                  <p>Tin nhắn</p>
                </button>
              </div>
            </div>
            <div className="p-4 border-t border-[#DADADA]">
              <p className="text-[#4284F3] text-sm font-medium ">
                Thông tin Nghĩa trang liệt sĩ
              </p>
              <p className="text-[#1F1F1F] font-normal text-sm pt-2">
                WJ8X+R76, Đông Thạnh, Hóc Môn, Thành phố Hồ Chí Minh, Vietnam
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mt-4 shadow shadow-[#0000001A]">
            <p className="font-medium text-sm text-[#1F1F1F]">
              Xem địa chỉ trên bản đồ
            </p>
            <img className="pt-2" src="/image/bandoone.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsmartyrs;
