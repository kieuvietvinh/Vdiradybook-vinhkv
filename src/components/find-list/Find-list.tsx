import React, { useState } from "react";

const list = [
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
  {
    id: 1,
    name: "B1",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
  },
];

const FindList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-auto max-w-5xl pt-2">
      <div className="all  bg-white px-6 py-3 rounded-lg flex justify-between overflow-x-scroll items-center">
        <ul className="flex items-center gap-1 ">
          <li>
            <a className="text-[#FFFFFF] bg-[#4284F3] font-normal text-sm rounded-2xl px-4 py-1 flex gap-1">
              <img src="/image/tatca.png" alt="" />
              <p> Tất cả</p>
            </a>
          </li>
          <li className="">
            <a
              className="text-[#636363] bg-white font-normal text-sm rounded-2xl px-4 py-1 flex border gap-1"
              href=""
            >
              <img src="/image/cuuhoa.png" alt="" />
              <p>Cứu hỏa</p>
            </a>
          </li>
          <li>
            <a
              className="text-[#636363] bg-white font-normal text-sm rounded-2xl px-4 py-1 flex border gap-1 "
              href=""
            >
              <img src="/image/cuunan.png" alt="" />
              <p> Cứu nạn</p>
            </a>
          </li>
          <li>
            <a
              className="text-[#636363] bg-white font-normal text-sm rounded-2xl px-4 py-1 flex border gap-1"
              href=""
            >
              <img src="/image/thannhan.png" alt="" />
              Tìm nhân thân
            </a>
          </li>
          <li>
            <a
              className="text-[#636363] bg-white font-normal text-sm rounded-2xl px-4 py-1 flex border gap-1"
              href=""
            >
              <img src="/image/bando.png" alt="" />
              Xem trên bản đồ
            </a>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <a
              className="text-[#4284F3] font-medium text-sm flex gap-1 items-center"
              href=""
            >
              <img src="/image/quanhday.png" alt="" />
              <p>Tìm quanh đây</p>
            </a>
          </li>
          <li>
            <a
              className="text-[#4284F3] font-medium text-sm flex items-center gap-1"
              href=""
            >
              <img src="/image/boloc.png" alt="" />
              <p> Bộ lọc</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="relative w-[400px] h-9 ">
          <input
            type="search"
            id="search-dropdown"
            className=" p-2.5 w-full text-xs text-[#A89E9F]  rounded-2xl border-s-gray-50 border border-gray-300 pl-12 font-normal"
            placeholder="Tìm kiếm Vdiraybook..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 left-1 end-0 p-2.5 text-sm font-medium h-full text-[#838383] items-center flex"
          >
            <img className="w-6 h-6" src="/image/Search1.png" alt="" />
          </button>
        </div>
        <div className="">
          <button className="text-white bg-[#4284F3] rounded-[18px] px-4 py-1.5 font-medium text-sm flex items-center gap-2">
            <img src="/image/cong.png" alt="" />
            <p> Tạo SOS</p>
          </button>
        </div>
      </div>
      <div className="bg-white w-full p-4 rounded-lg ">
        <div className="">
          <a className="flex justify-center" href="">
            <img src="/image/lietsi.png" alt="" />
          </a>
          <p className="font-normal text-[#1F1F1F] text-sm text-center py-4">
            Nghĩa trang liệt sĩ Tân Xuân, Xã Đông Thạnh, Huyện Hóc Môn, TP. Hồ
            Chí Minh
          </p>
          <div className="flex justify-center ">
            <button className="flex items-center gap-2 border border-[#4284F3] rounded-[18px] px-4 py-1.5 ">
              <img src="/image/huong.png" alt="" />
              <p className="text-[#4284F3] font-medium text-sm"> Dâng hương</p>
            </button>
          </div>
        </div>
      </div>
      <div className="list flex gap-2 bg-white mt-2 p-6 rounded-lg overflow-x-scroll">
        {list.map((lis) => (
          <div
            onClick={toggleModal}
            key={lis.id}
            className="bg-[#DD2B17] h-auto w-full rounded-lg p-2"
          >
            {isOpen && (
              <div className="absolute top-1/2 left-1/2  border  bg-white rounded-lg">
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
                      <div className="flex gap-2 pt-2">
                        <img src="/image/nguoithan.png" alt="" />
                        <div className="font-semibold text-base text-[#4284F3] flex items-center relative">
                          Nguyễn Thị Xuyến
                          <img
                            className="teckone"
                            src="/image-left/teck.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <p className="text-[#4284F3] font-medium text-sm pt-2">
                        Xem chi tiết
                      </p>
                    </div>
                  </div>
                  <button
                    className="absolute top-0 right-0 text-[#4284F3]"
                    onClick={toggleModal}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
            <div className="flex justify-center">
              <button className="bg-[#00000033] px-2 py-1 rounded-lg text-white ">
                {lis.name}
              </button>
            </div>
            <div className="flex justify-center">
              <button className=" py-3">
                <img src={lis.img} alt="" />
              </button>
            </div>
            <div className="flex justify-center">
              <button className="">
                <img src={lis.table} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindList;
