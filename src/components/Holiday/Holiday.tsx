import React, { useState } from "react";
import VDropdownModal from "../core/v-dropdown";
import VButton from "../core/v-button";

const Holiday = (props: any) => {
  console.log({ props });

  const item = props?.item;
  console.log("item :", item);
  const [label, setLabel] = useState("");
  const handleClick = (key: any) => {
    setLabel(key);
  };
  return (
    <div key={item?.id}>
      <div className="bg-white border rounded-[16px] w-full h-auto shadow-[#0000001A] shadow">
        <div className="relative">
          <div>
            <img className="w-full " src={item?.img} alt="" />
          </div>
          {item?.active && <Status />}
        </div>
        <div className="p-2">
          <div className="py-2">
            <Work work={item?.work} />
          </div>
          <div>
            <p className="text-[#1F1F1F] text-sm font-medium line-clamp-1 leading-[16.94px] pt-2">
              {item?.information}
            </p>
          </div>
          <div className="text-xs font-normal leading-[14.52px]  text-[#DD2B17] pt-2 flex items-center gap-2">
            <img src="/images/lich.svg" alt="" />
            <p>{item?.address}</p>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <img src="/image/calluser.png" alt="" />
            <p className="text-xs line-clamp-1 font-medium leading-[14.52px]  text-[#1F1F1F]">
              {item?.followers}
            </p>
          </div>
          <div className="flex items-center gap-2 pt-3">
            <button className="w-full h-[36px] bg-white rounded-[18px]  flex justify-center items-center text-sm text-[#4284F3] font-medium border border-[#4284F3] gap-2 whitespace-nowrap">
              <img src="/images/sao.svg" alt="" />
              <p>Quan tâm </p>
            </button>
            <button className="w-full h-[36px] bg-white] rounded-[18px] flex justify-center items-center text-sm text-[#4284F3] border border-[#4284F3] font-medium gap-1 whitespace-nowrap">
              <img src="/images/thamgia.svg" alt="" />
              <p>Tham gia</p>
            </button>
            <VDropdownModal
              className="text-sm   !right-0 !-top-[280px]"
              menu={[
                {
                  icon: (
                    <span>
                      <img src="/images/lienket.svg" alt="" />
                    </span>
                  ),
                  key: "Sao chép liên kết",
                  onClick: () => handleClick("Sao chép liên kết"),
                },
                {
                  icon: (
                    <span>
                      <img src="/images/manhung.svg" alt="" />
                    </span>
                  ),
                  key: "Sao chép mã nhúng",
                  onClick: () => handleClick("Sao chép mã nhúng"),
                },
                {
                  icon: (
                    <span>
                      <img src="/images/chinhsua.svg" alt="" />
                    </span>
                  ),
                  key: "Chỉnh sửa",
                  onClick: () => handleClick("Chỉnh sửa"),
                },
                {
                  icon: (
                    <span>
                      <img src="/images/trangthai.svg" alt="" />
                    </span>
                  ),
                  key: "Trạng thái",
                  onClick: () => handleClick("Trạng thái"),
                },
                {
                  icon: (
                    <span>
                      <img src="/images/thongbao.svg" alt="" />
                    </span>
                  ),
                  key: "Bật thông báo",
                  onClick: () => handleClick("Bật thông báo"),
                },
                {
                  icon: (
                    <span>
                      <img src="/images/camnhan.svg" alt="" />
                    </span>
                  ),
                  key: "Tắt cảm nhận",
                  onClick: () => handleClick("Tắt cảm nhận"),
                },
                {
                  icon: (
                    <span>
                      <img src="/images/delete.svg" alt="" />
                    </span>
                  ),
                  key: "Xoá sự kiện",
                  onClick: () => handleClick("Xoá sự kiện"),
                },
              ]}
              label={
                <div className="min-w-9 h-9 bg-[#0000000D] rounded-full flex justify-center items-center">
                  <img className="h-5 w-5" src="/images/bacham.svg" alt="" />
                </div>
              }
            ></VDropdownModal>
          </div>
        </div>
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
const Status = ({ status }: any) => {
  return (
    <div>
      <VButton className="bg-[#FFD4D1] rounded-2xl py-1 px-3 flex items-center gap-1 absolute top-2 right-2">
        <img className="" src="/images/ngoisao.svg" alt="" />
        <p className="text-[#DD2B17] font-normal text-xs"> Quang trọng</p>
      </VButton>
    </div>
  );
};

export default Holiday;
