import React, { useState } from "react";
const list = [
  {
    id: 1,
    img: "/image/dadat.png",
    oder: "Đơn hàng đã đặt",
    time: "14:13 22-03-2024",
  },
  {
    id: 2,
    img: "/image/muahang.png",
    oder: "Xác nhận đơn hàng",
    time: "14:13 22-03-2024",
  },
  {
    id: 3,
    img: "/image/dagiao.png",
    oder: "Đã giao ĐVVC",
    time: "14:13 22-03-2024",
  },
  {
    id: 4,
    img: "/image/dgiao.png",
    oder: "Đang giao",
    time: "14:13 22-03-2024",
  },
  {
    id: 5,
    img: "/image/dagiao1.png",
    oder: "Đã giao",
    time: "14:13 22-03-2024",
  },
  {
    id: 6,
    img: "/image/tcong.png",
    oder: "Thành công",
    time: "14:13 22-03-2024",
  },
  {
    id: 7,
    img: "/image/dgia.png",
    oder: "Đánh giá",
    time: "14:13 22-03-2024",
  },
];

const OrderDetails = () => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="bg-[#F2F2F2] h-full">
      <div className="font-inter mx-auto w-full max-w-5xl p-5 ">
        <div className=" bg-white p-3 rounded-2xl">
          <div className="flex item relative ">
            <div>
              <div className="flex  gap-2 items-center">
                <img
                  className="w-[12.99px] h-[12.65px]"
                  src="/image/Vector.png"
                  alt=""
                />
                <p className="text-[#000000] font-normal text-sm leading-[22px]">
                  Quay lại
                </p>
              </div>
            </div>
            <div className="flex items-center absolute right-1 gap-3">
              <div>
                <img src="/image/hop.png" alt="" />
              </div>
              <div className="">
                <p className="text-[#1F1F1F] font-bold text-[26px] leading-9">
                  #VDB912882093
                </p>
              </div>
              <p className="text-[#CAD0D7]">|</p>
              <div>
                <button className="bg-[#28CD41] text-white rounded-md p-1 font-normal text-sm leading-[22px] flex items-center gap-1">
                  <img
                    className="w-[13.99px] h-[10px]"
                    src="/image/check.png"
                    alt=""
                  />
                  Đã thanh toán
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7 pt-10 pb-[38px] pl-20">
            {list.map((all, index) => (
              <div key={all.id} className=" ">
                <div className="flex items-center ">
                  <div className="relative">
                    <div className="border border-[#CAD0D7] rounded-full w-16 h-16  flex items-center justify-center">
                      <img className=" w-8 h-8" src={all.img} alt="" />
                    </div>
                    <div className="text-center absolute -translate-x-1/2 left-1/2 ">
                      <p className="text-[#1F1F1F] font-normal text-sm leading-[22px] whitespace-nowrap">
                        {all.oder}
                      </p>
                      <p className="text-[#8E8E93] font-normal text-xs leading-4 whitespace-nowrap">
                        {all.time}
                      </p>
                    </div>
                  </div>
                  {index + 1 !== list.length && (
                    <div className="border-dashed border border-[#CAD0D7] w-20 h-0 "></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3  p-3 rounded-2xl bg-white">
          <div className="relative flex items-center py-3">
            <p className="font-bold text-[#1F1F1F] text-xl leading-[26px]">
              Địa chỉ nhận hàng
            </p>
            <img className="absolute right-3" src="/image/Pen.png" alt="" />
          </div>
          <div className="flex mb-2">
            <p className="font-normal text-sm text-[#1F1F1F] leading-[22px]">
              ID:
            </p>
            <p className="font-bold text-sm text-[#1F1F1F] leading-[22px]">
              VDB_LWFX0ZLM
            </p>
          </div>
          <div className="flex mb-2">
            <p className="font-normal text-sm text-[#1F1F1F] leading-[22px]">
              Tên người nhận:
            </p>
            <p className="font-bold text-sm text-[#1F1F1F] leading-[22px]">
              Nguyễn Hữu Biên
            </p>
          </div>
          <div className="flex mb-2">
            <p className="font-normal text-sm text-[#1F1F1F] leading-[22px]">
              Số điện thoại:
            </p>
            <p className="font-bold text-sm text-[#1F1F1F] leading-[22px]">
              0869919023
            </p>
          </div>
          <div className="flex mb-2">
            <p className="font-normal text-sm text-[#1F1F1F] leading-[22px]">
              Địa chỉ:
            </p>
            <p className="font-bold text-sm text-[#1F1F1F] leading-[22px]">
              Thôn 2A xã Eakly, Xã Ea Kly, Huyện Krông Pắc, Tỉnh Đắk Lăk, Việt
              Nam
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl my-3 p-3">
          <div className="mb-3">
            <div className="py-3">
              <p className="font-bold text-[#1F1F1F] text-xl leading-[26px]">
                Chi tiết đơn hàng
              </p>
            </div>
            <div className="flex items-center gap-4 relative ">
              <img className="w-[84px] h-[84px]" src="/image/dgoi.png" alt="" />
              <div className="font-medium dark:text-white ">
                <div className="flex ">
                  <p className="font-bold text-sm text-[#1F1F1F] ">
                    CAO DẦU GỘI DƯỠNG SINH BEHOMESPA
                  </p>
                  <div className="absolute right-2 flex gap-2">
                    <div>
                      <img src="/image/cuoi.png" alt="" />
                    </div>
                    <div>
                      <img src="/image/qua.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 py-1">
                  <div className="flex items-center gap-4">
                    <p className="text-[#1F1F1F] font-normal text-sm">
                      {" "}
                      Đặc điểm:
                    </p>
                    <div className="flex gap-4">
                      <p className="text-[#4284F3] border border-[#4284F3] text-xs font-normal w-auto p-1 rounded-2xl">
                        Dung tích 500ml
                      </p>
                      <p className="text-[#4284F3] border border-[#4284F3] text-xs font-normal w-auto p-1 rounded-2xl">
                        Hộp nhựa
                      </p>
                      <p className="text-[#4284F3] border border-[#4284F3] text-xs font-normal w-auto p-1 rounded-2xl">
                        Hộp vàng
                      </p>
                    </div>
                    <div className="flex items-center absolute right-2 gap-4">
                      <p className="text-[#8E8E93] font-normal text-sm">
                        đ650,000
                      </p>
                      <p className="text-[#DD2B17] font-bold text-sm ">
                        đ500,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center">
                    <button
                      onClick={handleDecrease}
                      className="border border-[#4284F3] rounded-full text-[#4284F3] font-bold  px-2  "
                    >
                      -
                    </button>
                    <input
                      className="w-5  text-[#1F1F1F] font-normal text-sm ml-3"
                      type="number"
                      value={count}
                      readOnly
                    />
                    <button
                      onClick={handleIncrease}
                      className="border border-[#4284F3] text-[#4284F3] font-bold  px-2 rounded-full "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-3">
            <div>
              <p className="text-[#1F1F1F] text-sm font-bold">
                Voucher đã áp dụng
              </p>
            </div>
            <div className="grid grid-cols-3  ">
              <div className="bg-white px-2 shadow-md flex items-center gap-3 justify-center h-[58px] rounded relative ">
                <div className="bg-gradient-to-r from-[#1D62F0] to-[#1AD5FD] w-[3px] h-full absolute left-0 rounded-l-2xl"></div>
                <p className="text-[#DD2B17] text-base font-bold">30%</p>
                <div className="border-r border-dashed border-[#D9D9D9] h-full relative">
                  <div className="border-2 w-[10.27px] h-[10.27px] rounded-full absolute -top-1.5 bg-white -left-[5px]"></div>
                  <div className="border-2 w-[10.27px] h-[10.27px] rounded-full absolute -bottom-1.5 bg-white -left-[5px]"></div>
                </div>
                <p className="font-medium text-xs text-[#1F1F1F]">
                  Giảm giá 30% cho đơn từ 1000 Vnex
                </p>
                <div className="flex items-center ">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl ">
          <div className="max-w-[252px] ml-auto py-5 p-3  ">
            <div className="flex justify-between mb-2 ">
              <p className="text-sm font-normal text-[#1F1F1F]">
                Tổng tiền hàng:
              </p>
              <p className="text-sm font-normal text-[#1F1F1F]">đ750,000</p>
            </div>
            <div className="flex justify-between mb-2 ">
              <p className="text-sm font-normal text-[#1F1F1F]">Thuế:</p>
              <p className="text-sm font-normal text-[#1F1F1F]">đ0</p>
            </div>
            <div className="flex justify-between mb-2 ">
              <p className="text-sm font-normal text-[#1F1F1F]">Ưu đãi:</p>
              <p className="text-sm font-normal text-[#1F1F1F]">-đ210.000</p>
            </div>
            <div className="flex justify-between mb-2 ">
              <p className="text-sm font-normal text-[#1F1F1F]">
                Sản phẩm mua kèm:
              </p>
              <p className="text-sm font-normal text-[#1F1F1F]">đ0</p>
            </div>
            <div className="flex justify-between mb-2 ">
              <p className="text-sm font-normal text-[#1F1F1F]">
                Tổng đơn hàng:
              </p>
              <p className="text-sm font-bold text-[#DD2B17]">đ540.000</p>
            </div>
          </div>
        </div>
        <div className="relative pt-3">
          <div className="flex gap-2 absolute right-1">
            <button className="text-white flex items-center rounded-2xl bg-[#DD2B17] px-3 py-1 text-sm font-normal gap-2">
              <img
                className="w-[13.33px] h-[13.33px]"
                src="/image/hdon.png"
                alt=""
              />
              Huỷ đơn hàng
            </button>
            <button className="text-[#4284F3] border-[#4284F3] flex items-center border rounded-2xl px-3 py-1 text-sm font-normal gap-2">
              <img
                className="w-[15px] h-[15px]"
                src="/image/mhang.png"
                alt=""
              />
              Tiếp tục mua hàng
            </button>
            <button className="bg-[#4284F3] text-white flex items-center rounded-2xl px-3 py-1 text-sm font-normal gap-2">
              <img
                className="w-[13.99px] h-[10px]"
                src="/image/check.png"
                alt=""
              />{" "}
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
