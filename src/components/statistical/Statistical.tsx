import React from "react";

const Statistical = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
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
        <div className="flex justify-between p-3 relative">
          <div>
            <p className="text-[#DD2B17] text-sm font-normal italic text-center">
              Linh vật, vật phẩm
            </p>
            <ul>
              <li className="flex items-center pt-2">
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
              <div className="flex pt-2 gap-2">
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
                  className="absolute -top-[50px] right-[41%]"
                  src="/image/vi.png"
                  alt=""
                />
              </a>
            </div>
            <div className="text-center pt-7">
              <p className="text-base font-bold">Smile Life (@)</p>
              <p className="text-[#DD2B17] text-sm font-normal tracking-wide">
                Tôn trọng - Yêu thương - Biết ơn
              </p>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm  text-gray-500 ">
                  <thead className="">
                    <tr>
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
                      <td className=" ">12</td>
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
            <ul>
              <p className="text-[#DD2B17] text-sm font-normal italic ">
                Nhận hiệu cuộc sống
              </p>
              <li className="flex pt-2 justify-center">
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
      <div className="bg-white mt-2">
        <ul className="flex justify-between py-2 px-5 text-sm text-[#1F1F1F] font-normal">
          <li>
            <a href="">Trang web</a>
          </li>
          <li>
            <a href="">Gới thiệu</a>
          </li>
          <li>
            <a href="">Bạn bè</a>
          </li>
          <li>
            <a href="">Sự kiện</a>
          </li>
          <li>
            <a href="">VDB driver</a>
          </li>
          <li>
            <a href="">Mã QR</a>
          </li>
          <li>
            <a href="">Doanh nghiệp</a>
          </li>
          <li>
            <a href="">Tài sản</a>
          </li>
          <li className="text-[#4284F3] ">
            <a href="">Thống kê truy cập</a>
          </li>
        </ul>
      </div>
      <div className="mt-5 bg-white rounded-2xl p-3">
        <p className="text-[#1F1F1F] text-lg font-semibold">
          Thống kê truy cập
        </p>
        <div className="grid grid-cols-4 gap-4 pt-2">
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
              <img src="/image/ghetham.png" alt="" />
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
              <img src="/image/ghetham.png" alt="" />
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
              <img src="/image/ghetham.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">Doanh số</p>
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2">
              đ123.456.000
            </div>
          </div>

          <div className="p-3 border rounded-2xl">
            <div className="flex gap-3 items-center relative">
              <img src="/image/ghetham.png" alt="" />
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
              <img src="/image/ghetham.png" alt="" />
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
              <img src="/image/ghetham.png" alt="" />
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
              <img src="/image/ghetham.png" alt="" />
              <p className="font-normal text-[#1F1F1F] text-sm">
                Tổng thời gian online
              </p>
            </div>
            <div className="text-[#1F1F1F] text-2xl font-semibold text-center pt-2 flex items-baseline gap-3 justify-center">
              102.4
              <p className="font-normal text-[#1F1F1F] text-sm">phút</p>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Statistical;
