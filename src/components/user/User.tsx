import React, { useState } from "react";

const User = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="font-sans ">
      <div className="bg-white shadow-lg max-w-screen-lg  mx-auto w-full border p-3 rounded-lg">
        <div className="flex border-b border-gray-200  ">
          <button
            className={`w-1/3  hover:bg-gray-200 hover:rounded-md  text-[#777d74] text-xs px-4 py-2 ${
              activeTab === 1
                ? "inline-block p-4 border-b-2 border-transparent  rounded-t-lg text-blue-600 border-blue-600 "
                : "bg-white"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Người dùng
          </button>
          <button
            className={`w-1/3 hover:bg-gray-200 hover:rounded-md text-[#777d74] text-xs px-4 py-2 ${
              activeTab === 2
                ? "inline-block p-4 border-b-2 border-transparent rounded-t-lg text-blue-600 border-blue-700 "
                : "bg-white"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Hoạt động
          </button>
          <button
            className={`w-1/3 hover:bg-gray-200 hover:rounded-md text-[#777d74] text-xs px-4 py-2 ${
              activeTab === 3
                ? "inline-block p-4 border-b-2 border-transparent rounded-t-lg text-blue-600 border-blue-700 "
                : "bg-white"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Nhật ký
          </button>
        </div>
        <div className="mt-4  ">
          {activeTab === 1 && (
            <div className="font-extrabold ">
              <ul className="flex flex-wrap text-xs  text-center text-[#555770]  ">
                <li className="w-1/12">
                  <a
                    aria-current="page"
                    className="inline-block p-4   rounded-t-lg active  "
                  >
                    Vị Trí
                  </a>
                </li>
                <li className="w-5/12">
                  <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Người Dùng
                  </a>
                </li>
                <li className="w-2/12">
                  <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Giới Thiệu
                  </a>
                </li>
                <li className="w-2/12">
                  <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Bạn Bè
                  </a>
                </li>
                <li className="w-2/12  ">
                  <a className="inline-block p-4  rounded-t-lg  ">
                    Người Theo Dõi
                  </a>
                </li>
              </ul>
              <div>
                <div className="flex flex-wrap text-xs text-center text-[#353d31] hover:bg-gray-200  font-normal">
                  <div className="w-1/12">
                    <div className="inline-block p-4   rounded-t-lg active  ">
                      1
                    </div>
                  </div>
                  <div className="w-5/12 flex  items-center">
                    <div className="inline-block p-4 rounded-t-lg hover:text-gray-600  ">
                      <img
                        className="w-[1.15rem] h-[1.15rem] rounded-full"
                        src="https://file.vdiarybook.com/api/files/users/64c8c317514f8ce7c8c3cd63/48271e2b-dbe2-41fc-ab73-9055bdc4e2d7--150.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="text-[#0ea5e9] text-sm"> Lê Hải hoàn </div>
                  </div>
                  <div className="w-2/12">
                    <div className="inline-block p-4  rounded-t-lg  ">807</div>
                  </div>
                  <div className="w-2/12">
                    <div className="inline-block p-4  rounded-t-lg  ">4424</div>
                  </div>
                  <div className="w-2/12">
                    <div className="inline-block p-4  rounded-t-lg  ">1656</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f8f9fa]">
                <div className="flex flex-wrap text-xs text-center text-[#353d31] hover:bg-gray-200  font-normal">
                  <div className="w-1/12">
                    <div className="inline-block p-4   rounded-t-lg active  ">
                      2
                    </div>
                  </div>
                  <div className="w-5/12 flex  items-center">
                    <div className="inline-block p-4 rounded-t-lg hover:text-gray-600  ">
                      <img
                        className="w-[1.15rem] h-[1.15rem] rounded-full"
                        src="https://file.vdiarybook.com/api/files/users/64c8c317514f8ce7c8c3cd63/48271e2b-dbe2-41fc-ab73-9055bdc4e2d7--150.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="text-[#ef4444] text-sm">
                      Trần Thị Vân Anh
                    </div>
                  </div>
                  <div className="w-2/12">
                    <div className="inline-block p-4  rounded-t-lg  ">464</div>
                  </div>
                  <div className="w-2/12">
                    <div className="inline-block p-4  rounded-t-lg  ">9674</div>
                  </div>
                  <div className="w-2/12">
                    <div className="inline-block p-4  rounded-t-lg  ">3424</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* //HOẠTĐỒNG  */}
          {activeTab === 2 && (
            <div className="font-extrabold w-full">
              <ul className="flex flex-wrap text-xs  text-center text-[#555770] ">
                <li className="w-[15%]">
                  <a
                    aria-current="page"
                    className="inline-block p-[7px]   rounded-t-lg active  "
                  >
                    Vị Trí
                  </a>
                </li>
                <li className="w-[65%]">
                  <a className="inline-block p-[7px]  rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    NGười Dùng
                  </a>
                </li>

                <li className="w-[20%]">
                  <a className="inline-block p-[7px]   rounded-t-lg  ">
                    Tổng giờ
                  </a>
                </li>
              </ul>
              <div>
                <div className="flex flex-wrap text-xs  text-center text-[#353d31] hover:bg-gray-200 font-normal">
                  <div className="w-[15%]">
                    <div className="inline-block p-4  rounded-t-lg active  ">
                      1
                    </div>
                  </div>
                  <div className="w-[65%] flex  items-center">
                    <div className="inline-block p-4 rounded-t-lg hover:text-gray-600  ">
                      <img
                        className="w-[1.15rem] h-[1.15rem] rounded-full"
                        src="https://file.vdiarybook.com/api/files/users/64c8c317514f8ce7c8c3cd63/48271e2b-dbe2-41fc-ab73-9055bdc4e2d7--150.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="text-[#0ea5e9] text-sm"> Lê Hải hoàn </div>
                  </div>
                  <div className="w-[20%]">
                    <div className="inline-block p-4  rounded-t-lg  ">
                      1,692.17
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap text-xs  text-center text-[#353d31] bg-gray-100 hover:bg-gray-200   font-normal">
                  <div className="w-[15%]">
                    <div className="inline-block p-4 rounded-t-lg active ">
                      2
                    </div>
                  </div>
                  <div className="w-[65%] flex  items-center">
                    <div className="inline-block p-4 rounded-t-lg hover:text-gray-600">
                      <img
                        className="w-[1.15rem] h-[1.15rem] rounded-full"
                        src="https://file.vdiarybook.com/api/files/users/64c8c317514f8ce7c8c3cd63/48271e2b-dbe2-41fc-ab73-9055bdc4e2d7--150.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="text-[#ef4444] text-sm">
                      {" "}
                      Nguyễn Linh Anh{" "}
                    </div>
                  </div>
                  <div className="w-[20%]">
                    <div className="inline-block p-4  rounded-t-lg  ">
                      1,242.87
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* NHẬT KÝ */}
          {activeTab === 3 && (
            <div className="">
              <div className="font-extrabold">
                <ul className="flex flex-wrap text-xs  text-center text-[#555770]   ">
                  <li className="w-[15%]">
                    <a
                      aria-current="page"
                      className="inline-block p-4 rounded-t-lg active  "
                    >
                      Vị Trí
                    </a>
                  </li>
                  <li className="w-[65%]">
                    <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                      NGười Dùng
                    </a>
                  </li>
                  <li className="w-[20%] ">
                    <a className="inline-block p-4  rounded-t-lg  ">
                      Total posts
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="flex flex-wrap text-xs  text-center text-[#353d31] bg-gray-100 hover:bg-gray-200   font-normal">
                  <div className="w-[15%]">
                    <div className="inline-block p-4 rounded-t-lg active ">
                      1
                    </div>
                  </div>
                  <div className="w-[65%] flex  items-center">
                    <div className="inline-block p-4 rounded-t-lg hover:text-gray-600">
                      <img
                        className="w-[1.15rem] h-[1.15rem] rounded-full"
                        src="https://file.vdiarybook.com/api/files/users/64c8c317514f8ce7c8c3cd63/48271e2b-dbe2-41fc-ab73-9055bdc4e2d7--150.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="text-[#ef4444] text-sm">
                      {" "}
                      Nguyễn Linh Anh{" "}
                    </div>
                  </div>
                  <div className="w-[20%]">
                    <div className="inline-block p-4  rounded-t-lg  ">
                      1,242.87
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
