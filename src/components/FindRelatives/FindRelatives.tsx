import React from "react";

const FindRelatives = () => {
  return (
    <div>
      <div className="flex items-center gap-2 p-2">
        <button>
          <img src="/image/tenvo.png" alt="" />
        </button>
        <p className="text-base font-semibold leading-5">Tìm thân nhân</p>
      </div>
      <div className="bg-white w-full rounded-lg mt-2 bg-[url('/image/ablietsi.png')]">
        <div className=" p-2 w-full bg-[#0a06068e] rounded-lg">
          <a className="flex justify-center" href="">
            <img src="/image/lietsi.png" alt="" />
          </a>
          <p className="font-normal text-white text-sm text-center py-4 ">
            Nghĩa trang liệt sĩ Tân Xuân, Xã Đông Thạnh, Huyện Hóc Môn, TP. Hồ
            Chí Minh
          </p>
          <div className=" flex-wrap flex whitespace-nowrap justify-center gap-4">
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1 bg-white">
              <img src="/image/huong.png" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng hương</p>
            </button>
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1 bg-white">
              <img src="/image/hoa.ico" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng hoa</p>
            </button>
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1 bg-white">
              <img src="/image/qualietsi.png" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng quả</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindRelatives;
