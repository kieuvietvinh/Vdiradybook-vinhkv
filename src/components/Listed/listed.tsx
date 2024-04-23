import React, { useState } from "react";

const tabs = [
  { id: 1, name: "Cài đặt shop " },
  { id: 2, name: "Quản lí niêm yết" },
  { id: 3, name: "Quản kí voucher" },
  { id: 4, name: "Sáng tạo" },
  { id: 5, name: "QR dịch vụ" },
];

const ListNumber = [
  {
    id: 1,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 2,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 3,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 4,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 5,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 6,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 7,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 8,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 9,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 10,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
  {
    id: 11,
    listingName: "Iphone 13 promax",
    category: "pgc market",
    formSale: "retail",
    listingType: "normal",
  },
];

const Listed = () => {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="font-inter mx-auto w-full max-w-5xl rounded-lg bg-white p-2">
      <div className="tabs border-b border-[#ECF0F1] sm:w-auto   shadow flex justify-between gap-2 overflow-x-scroll whitespace-nowrap ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` border-b-[3px]   border-transparent whitespace-nowrap leading-[22px] hover:bg-gray-100 hover:rounded   text-[#1F1F1F] text-sm sm:px-4 sm:py-2 p-[7px] ${
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
      <div className=" flex justify-between items-center flex-wrap gap-2 pt-2">
        <div className="flex gap-2">
          <div>
            <form className="max-w-[250px] mx-auto h-[38px] ">
              <div className="relative">
                <div className="absolute  right-2 top-3 ">
                  <img src="/image/timkiem.png" alt="" />
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
            <form className=" mx-auto h-[38px]">
              <select
                id="countries"
                className="block w-[250px] p-[0.6rem] text-sm text-[#8E8E93] border border-gray-300 rounded-lg bg-white font-normal leading-[22px] "
              >
                <option selected>Danh mục</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </select>
            </form>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <div className="rounded-full bg-white border border-[#4284F3] flex items-center justify-center py-2 px-4">
            <button className="text-[#4284F3] font-normal text-sm leading-[22px] flex items-center gap-2">
              <img src="/image/quangcao.png" alt="" />
              Đăng kí quảng cáo
            </button>
          </div>
          <div className="rounded-full bg-[#4284F3]  flex items-center justify-center py-2 px-4">
            <button className="text-white font-normal text-sm leading-[22px] flex items-center gap-2">
              <img src="/image/congone.png" alt="" />
              Tạo niêm yết
            </button>
          </div>
        </div>
      </div>
      <div className="tabs pt-5 overflow-x-scroll gap-5">
        <table className="table-auto w-full ">
          <thead className="text-justify ">
            <tr className="text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] whitespace-nowrap">
              <th className="py-2 min-w-[240px]">TẠO NIÊM YẾT</th>
              <th className="min-w-[190px]">DANH MỤC</th>
              <th className="min-w-[140px]">HÌNH THỨC BÁN</th>
              <th className="min-w-[140px]">LOẠI NIÊM YẾT</th>
              <th>NGÀY TẠO</th>
              <th> CÔNG KHAI</th>
            </tr>
          </thead>
          {ListNumber.map((list) => (
            <tbody className="w-full ">
              <tr
                style={{ padding: "10px" }}
                className=" text-[#1F1F1F]  font-normal text-sm leading-[22px] "
              >
                <td>
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <img
                      className="rounded-full w-10 h-10 flex"
                      src="image/iphone.jpeg"
                      alt=""
                    />
                    <p className="">{list.listingName}</p>
                  </div>
                </td>
                <td className="uppercase ">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <img
                      className="rounded-full w-10 h-10 flex"
                      src="image/iphone.jpeg"
                      alt=""
                    />{" "}
                    <p>{list.category}</p>
                  </div>
                </td>
                <td className="uppercase whitespace-nowrap">{list.formSale}</td>
                <td className="uppercase whitespace-nowrap">
                  {list.listingType}{" "}
                </td>
                <td className="uppercase whitespace-nowrap">
                  <p>1/24/102</p>
                  <p>10:22:35PM</p>
                </td>
                <td>
                  <div className="flex relative">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                    </label>
                    <div className="absolute right-0">
                      <img src="/image/Pen.png" alt="" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Listed;
