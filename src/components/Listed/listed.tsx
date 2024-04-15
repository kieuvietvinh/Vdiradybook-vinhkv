import React, { useState } from "react";

const tabs = [
  { id: 1, name: "Cài đặt shop " },
  { id: 2, name: "Quản lí niêm yết" },
  { id: 3, name: "Quản kí voucher" },
  { id: 4, name: "Sáng tạo" },
  { id: 5, name: "QR dịch vụ" },
];

const Listed = () => {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="font-inter mx-auto w-full max-w-5xl">
      <div className=" border-b border-[#ECF0F1] mt-4 sm:w-auto border bg-white shadow grid grid-cols-5 gap-2  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` border-b-[3px] border bg-white border-transparent whitespace-nowrap leading-[22px] hover:bg-gray-100 hover:rounded   text-[#1F1F1F] text-sm sm:px-4 sm:py-2 p-[7px] ${
              activeTab === tab.id
                ? "inline-block p-4 !border-b-[#4284F3]  text-[#4284F3] w-auto font-bold"
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className=" pt-5 grid grid-cols-2 gap-2 ">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <form className="max-w-[250px] mx-auto h-[38px] ">
              <div className="relative">
                <div className="absolute  right-2 top-3 ">
                  <svg
                    className="w-4 h-4 text-[#4284F3]  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2  text-sm text-[#8E8E93] border border-gray-300 rounded-lg bg-white font-normal leading-[22px]"
                  placeholder="Tìm kiếm..."
                  required
                />
              </div>
            </form>
          </div>
          <div>
            <form className="max-w-[250px] mx-auto h-[38px]">
              <select
                id="countries"
                className="block w-full p-[0.6rem] text-sm text-[#8E8E93] border border-gray-300 rounded-lg bg-white font-normal leading-[22px] "
              >
                <option selected>Danh mục</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div></div>
          <div className="rounded-2xl bg-white border border-[#4284F3] flex items-center justify-center">
            <button className="text-[#4284F3] font-normal text-sm leading-[22px]   ">
              Đăng kí quảng cáo
            </button>
          </div>
          <div className="rounded-2xl bg-[#4284F3]  flex items-center justify-center">
            <button className="text-white font-normal text-sm leading-[22px]">
              Tạo niêm yết
            </button>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <table className="table-auto w-full ">
          <thead className="text-justify">
            <tr className="text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D]">
              <th className="py-2">TẠO NIÊM YẾT</th>
              <th>DANH MỤC</th>
              <th>HÌNH THỨC BÁN</th>
              <th>LOẠI NIÊM YẾT</th>
              <th>NGÀY TẠO</th>
              <th> CÔNG KHAI</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className=" text-[#1F1F1F]  font-normal text-sm leading-[22px] ">
              <td>
                <div className="flex items-center gap-2">
                  <img
                    className="rounded-full w-10 h-10 flex"
                    src="image/iphone.jpeg"
                    alt=""
                  />{" "}
                  Iphone 13 promax{" "}
                </div>
              </td>
              <td className="uppercase">
                <div className="flex items-center gap-2">
                  <img
                    className="rounded-full w-10 h-10 flex"
                    src="image/iphone.jpeg"
                    alt=""
                  />{" "}
                  pgc market
                </div>
              </td>
              <td className="uppercase">retail</td>
              <td className="uppercase">normal </td>
              <td className="uppercase">
                <p>1/24/102</p>
                <p>10:22:35PM</p>
              </td>
              <td>
                <div className="flex relative">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                  <div className="absolute right-0">
                    {" "}
                    <img src="/image/Pen.png" alt="" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listed;
