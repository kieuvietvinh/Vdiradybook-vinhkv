import Link from "next/link";
import React from "react";

const Listurgent = [
  {
    id: 1,
    img: "/image/imagesukien.png",
    fire: "Cứu hỏa",
    information: " Đang có đám cháy lớn tại 128 Giang Văn Minh, Giảng Võ.",
    address: "128 Giang Văn Minh, Giảng Võ",
    followers: "999 người quan tâm · 999 người theo dõi",
    status: 1,
    listrescue: 1,
  },
  {
    id: 2,
    img: "/image/tainan.png",
    fire: "Cứu hỏa",
    information:
      "Tôi đang bị hư xe và cần người trợ giúp ở 20 Lê Văn Lương, Thanh Xuân.",
    address: "Tòa nhà Handiresco 20 Lê Văn Lương ",
    followers: "150 người quan tâm · 458 người theo dõi",
    status: 2,
    listrescue: 2,
  },
  {
    id: 3,
    img: "/image/timbia.png",
    fire: "Cứu hỏa",
    information:
      " Tôi cần tìm phần mộ liệt sĩ Nguyễn Xuân Tùng (1946 - 1975) tại nghĩa trang liệt sĩ Tân Xuân - Hóc Môn",
    address: "Nghĩa trang liệt sĩ Tân Xuân, Hóc Môn",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    status: 3,
    listrescue: 3,
  },
  {
    id: 4,
    img: "/image/imagesukien.png",
    fire: "Cứu hỏa",
    information: " Đang có đám cháy lớn tại 128 Giang Văn Minh, Giảng Võ.",
    address: "128 Giang Văn Minh, Giảng Võ",
    followers: "999 người quan tâm · 999 người theo dõi",
    status: 4,
    listrescue: 1,
  },
  {
    id: 5,
    img: "/image/tainan.png",
    fire: "Cứu hỏa",
    information:
      "Tôi đang bị hư xe và cần người trợ giúp ở 20 Lê Văn Lương, Thanh Xuân.",
    address: "Tòa nhà Handiresco 20 Lê Văn Lương ",
    followers: "150 người quan tâm · 458 người theo dõi",
    status: 5,
    listrescue: 2,
  },
  {
    id: 6,
    img: "/image/timbia.png",
    fire: "Cứu hỏa",
    information:
      " Tôi cần tìm phần mộ liệt sĩ Nguyễn Xuân Tùng (1946 - 1975) tại nghĩa trang liệt sĩ Tân Xuân - Hóc Môn",
    address: "Nghĩa trang liệt sĩ Tân Xuân, Hóc Môn",
    followers: "1.999 người quan tâm · 1.999 người theo dõi",
    status: 6,
    listrescue: 3,
  },
];

const TmportantEvent = () => {
  return (
    <div className="max-w-5xl mx-auto pt-4">
      <div className="flex gap-2 items-center">
        <img src="/image/homnay.png" alt="" />
        <p className="text-[#1F1F1F] text-sm font-semibold">Hôm nay</p>
      </div>
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 max-[500px]:grid-cols-1 gap-4 pt-2">
        {Listurgent.map((list) => (
          <div
            key={list.id}
            className="bg-white border rounded-[16px] w-full h-auto p-4 "
          >
            <div className="relative">
              <div>
                <img className="w-full " src={list.img} alt="" />
              </div>
              <Status status={list.status} />
            </div>
            <div className="pt-2">
              <Listrescue listrescue={list.listrescue} />
            </div>
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
            <div>
              <p className="text-[#1F1F1F] text-sm font-medium line-clamp-2">
                {list.information}
              </p>
            </div>
            <div className="text-xs font-normal  text-[#1F1F1F] pt-2 flex items-center gap-2">
              <img src="/image/diachi.png" alt="" />
              <p>{list.address}</p>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <img src="/image/calluser.png" alt="" />
              <p className="text-xs font-normal  text-[#1F1F1F]">
                {list.followers}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3">
              <button className="w-full h-[36px] bg-white rounded-[18px] flex justify-center items-center text-sm text-[#4284F3] font-medium border border-[#4284F3] gap-2">
                <img src="/image/chiduong.png" alt="" />
                <p>Chỉ đường</p>
              </button>
              <button className="w-full h-[36px] bg-[#4284F3] rounded-[18px] flex justify-center items-center text-sm text-white font-medium gap-2">
                <p>Chi tiết</p>
                <img src="/image/chitiet.png" alt="" />
              </button>
              <button className="min-w-9 h-9 bg-[#0000000D] rounded-full flex justify-center items-center">
                <img src="/image/chiase.png" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Status = ({ status }: any) => {
  if (status === 1)
    return (
      <div>
        <button className="bg-[#DD2B17] rounded-2xl py-1 px-3 flex items-center gap-1 absolute top-2 right-2">
          <img className="" src="/image/capbach.png" alt="" />
          <p className="text-white font-normal text-xs"> Cấp bách</p>
        </button>
      </div>
    );
  if (status === 2)
    return (
      <div>
        <button className="bg-[#6E00FF] rounded-2xl py-1 px-3 flex items-center gap-1 absolute top-2 right-2">
          <img className="" src="/image/uutien.png" alt="" />
          <p className="text-white font-normal text-xs"> Ưu tiên</p>
        </button>
      </div>
    );
  if (status === 3)
    return (
      <div>
        <button className="bg-[#FFA91A] rounded-2xl py-1 px-3 flex items-center gap-1 absolute top-2 right-2">
          <img className="" src="/image/dongho.png" alt="" />
          <p className="text-white font-normal text-xs"> Chờ sử lý</p>
        </button>
      </div>
    );
  if (status === 4)
    return (
      <div>
        <button className="bg-[#FFCC00] rounded-2xl py-1 px-3 flex items-center gap-1 absolute top-2 right-2">
          <img className="" src="/image/dangxuly.png" alt="" />
          <p className="text-white font-normal text-xs"> Đang sử lý</p>
        </button>
      </div>
    );
  if (status === 5)
    return (
      <div>
        <button className="bg-[#28CD41] rounded-2xl py-1 px-3 flex items-center gap-1 absolute top-2 right-2">
          <img className="" src="/image/daxuly.png" alt="" />
          <p className="text-white font-normal text-xs"> Đã sử lý</p>
        </button>
      </div>
    );
  if (status === 6)
    return (
      <div>
        <button className="bg-[#28CD41] rounded-2xl py-1 px-3 flex items-center gap-1 absolute top-2 right-2">
          <img className="" src="/image/daxulyxong.png" alt="" />
          <p className="text-white font-normal text-xs"> Đã có thân nhân</p>
        </button>
      </div>
    );
};
const Listrescue = ({ listrescue }: any) => {
  if (listrescue === 1)
    return (
      <div>
        <button className="bg-[#FFDFBE] rounded-2xl py-1 px-3 flex items-center gap-1 ">
          <img
            className="w-[13.31px] h-[10.81px]"
            src="/image/cuuhoa.png"
            alt=""
          />
          <p className="text-[#FF8300] font-normal text-xs">Cứu hỏa</p>
        </button>
      </div>
    );
  if (listrescue === 2)
    return (
      <div>
        <button className="bg-[#FFD8D4] rounded-2xl py-1 px-3 flex items-center gap-1 ">
          <img
            className="w-[13.31px] h-[10.81px]"
            src="/image/cuunancc.png"
            alt=""
          />
          <p className="text-[#DD2B17] font-normal text-xs">Cứu nạn</p>
        </button>
      </div>
    );
  if (listrescue === 3)
    return (
      <div>
        <button className="bg-[#BFFFC9] rounded-2xl py-1 px-3 flex items-center gap-1 ">
          <img
            className="w-[13.31px] h-[10.81px]"
            src="/image/timthanhan.png"
            alt=""
          />
          <p className="text-[#01B763] font-normal text-xs">Tìm thân nhân</p>
        </button>
      </div>
    );
};

export default TmportantEvent;
