import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const tabs = [
  { id: 1, name: "Trang web" },
  { id: 2, name: "Giới thiệu " },
  { id: 3, name: "Bạn bè" },
  { id: 4, name: "Sự kiện" },
  { id: 5, name: "VDB driver" },
  { id: 6, name: "Doanh nghiệp " },
  { id: 7, name: "Tài sản" },
  { id: 8, name: "Thống kê truy cập" },
];

const data = {
  labels: ["Thứ 2", "Thứ ", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
  datasets: [
    {
      label: "Times",
      data: [200, 280, 390, 420, 610, 60, 1000],
      fill: true,
      backgroundColor: "rgba(22, 93, 255, 0.2)",
      borderColor: "#165DFF",
    },
  ],
};

const Statistical = () => {
  const [activeTab, setActiveTab] = useState(8);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm  mx-auto">
      <div className="bg-white rounded-[9px]">
        <div className="">
          <ul>
            <li className="relative ">
              <a href="">
                <img src="/image/imagechinh.png" alt="" />
              </a>
              <a className="absolute right-3 bottom-3" href="">
                <img src="/image/mayanh.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 gap-4 p-5 relative ">
          <div className="mt-6 sm:mt-0">
            <p className="text-[#DD2B17] text-sm font-normal italic text-center ">
              Linh vật, vật phẩm
            </p>
            <ul>
              <li className="flex items-center pt-2 max-[700px]:justify-center">
                <a href="">
                  <img src="/image/ga.png" alt="" />
                </a>
                <a href="">
                  <img src="/image/ho.png" alt="" />
                </a>
                <a href="">
                  <img src="/image/trau.png" alt="" />
                </a>
                <a href="">
                  <img src="/image/vang.png" alt="" />
                </a>
              </li>
              <div className="flex pt-2 gap-2 max-[700px]:justify-center">
                <div className="flex gap-2">
                  <p className="font-semibold text-xs text-[#1F1F1F]">150</p>
                  <p className="font-normal text-xs text-[#1F1F1F]"> Nhật ký</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold text-xs text-[#1F1F1F]">120k</p>
                  <p className="font-normal text-xs text-[#1F1F1F]"> Bạn bè</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold text-xs text-[#1F1F1F]">1254k</p>
                  <p className="font-normal text-xs text-[#1F1F1F]">Theo dõi</p>
                </div>
              </div>
            </ul>
          </div>
          <div>
            <div>
              <a href="">
                <img
                  className="absolute -top-[50px] right-[45%]"
                  src="/image/vi.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="absolute top-[15px] right-[45%]"
                  src="/image/mayanh.png"
                  alt=""
                />
              </a>
            </div>
            <div className="text-center pt-7">
              <p className="text-base font-bold text-[#1D62F0]">
                Smile Life (@)
              </p>
              <p className="text-[#DD2B17] text-sm font-normal tracking-wide">
                Tôn trọng - Yêu thương - Biết ơn
              </p>

              <div className="relative flex justify-center">
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
                      <th className="">
                        <img src="/image/v1.png" alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="mt-2">
                    <tr className="  text-xs text-[#000000] font-normal">
                      <td className="">12</td>
                      <td className="">45</td>
                      <td className="">653</td>
                      <td className="">567</td>
                      <td className="">4251</td>
                      <td className="">5654</td>
                      <td className="">56</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <ul className="">
              <p className="text-[#DD2B17] text-sm font-normal italic justify-end max-[700px]:justify-center flex">
                Nhận hiệu cuộc sống
              </p>
              <li className="flex pt-2 justify-end max-[700px]:justify-center">
                <a href="">
                  <img src="/image/sos2.png" alt="" />
                </a>
                <a href="">
                  <img src="/image/sos1.png" alt="" />
                </a>
                <a href="">
                  <img src="/image/sos.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="crooll bg-white mt-2 flex justify-between overflow-x-auto ">
        {tabs.map((tab, a) => (
          <a
            key={a}
            className={` border-b-4  border-transparent whitespace-nowrap hover:bg-gray-100 hover:rounded  text-[#777d74] text-xs px-4 py-2 ${
              activeTab === tab.id
                ? "inline-block p-4  !border-blue-600   rounded-t-lg  text-blue-600  "
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </a>
        ))}
      </div>
      <div className="mt-5 bg-white rounded-2xl p-3 max-w-full">
        <p className="text-[#1F1F1F] text-lg font-semibold">
          Thống kê truy cập
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 pt-2">
          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center relative">
              <img src="/image/ghetham.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">
                Số lượt ghé thăm
              </p>
              <img
                className="absolute right-0"
                src="/image-left/muiten.png"
                alt=""
              />
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2">
              912
            </div>
          </div>
          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center">
              <img src="/image/tong.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">
                Tổng đơn hàng
              </p>
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2">
              105
            </div>
          </div>
          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center">
              <img src="/image/don.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">
                Đơn hoàn thành
              </p>
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2">
              97
            </div>
          </div>
          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center">
              <img src="/image/doanhso.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">Doanh số</p>
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2">
              đ123.456.000
            </div>
          </div>

          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center relative">
              <img src="/image/sanpham.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">
                Tổng số sản phẩm
              </p>
              <img
                className="absolute right-0"
                src="/image-left/muiten.png"
                alt=""
              />
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2">
              168
            </div>
          </div>
          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center">
              <img src="/image/rating.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">
                Lượt đánh giá
              </p>
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2">
              75
            </div>
          </div>
          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center">
              <img src="/image/lich.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">
                Thời gian tham gia
              </p>
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2 flex items-baseline gap-3 justify-center">
              42
              <p className="font-normal text-[#1F1F1F] text-sm">tháng</p>
            </div>
          </div>
          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center">
              <img src="/image/time.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">
                Tổng thời gian online
              </p>
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2 flex items-baseline gap-3 justify-center">
              1.024
              <p className="font-normal text-[#1F1F1F] text-sm">phút</p>
            </div>
          </div>
        </div>
        <div className="  border mt-4 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#1D2129] text-base font-semibold">
                Thời gian online
              </p>
            </div>
            <div className="">
              <ul className="flex gap-1 text-[#4284F3] font-normal text-xs ">
                <li>
                  <a
                    className="border border-[#4284F3] rounded-2xl px-3 py-1 hover:bg-[#3498DB33]"
                    href=""
                  >
                    Tuần
                  </a>
                </li>
                <li>
                  <a
                    className="border border-[#4284F3] rounded-2xl px-3 py-1 hover:bg-[#3498DB33]"
                    href=""
                  >
                    Tháng
                  </a>
                </li>
                <li>
                  <a
                    className="border border-[#4284F3] rounded-2xl px-3 py-1 hover:bg-[#3498DB33]"
                    href=""
                  >
                    Năm
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default Statistical;
