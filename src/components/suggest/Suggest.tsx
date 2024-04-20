import React, { useState } from "react";

const Suggest = () => {
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  ///

  return (
    <div className="bg-white mx-auto w-full max-w-screen-lg rounded-lg">
      <div className="flex border-b border-gray-200    ">
        <button
          className={`w-1/3 hover:bg-gray-200 hover:rounded  text-[#777d74] text-xs px-4 py-2 ${
            activeTab === 1
              ? "inline-block p-4 border-b-4 border-transparent  rounded-t-lg text-blue-600 border-blue-600 "
              : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Quản Lý
        </button>
        <button
          className={`w-1/3 hover:bg-gray-200 hover:rounded text-[#777d74] text-xs px-4 py-2 ${
            activeTab === 2
              ? "inline-block p-4 border-b-4 border-transparent rounded-t-lg text-blue-600 border-blue-600 "
              : "bg-white"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Gợi ý
        </button>
        <button
          className={`w-1/3 hover:bg-gray-200 hover:rounded text-[#777d74] text-xs px-4 py-2 ${
            activeTab === 3
              ? "inline-block p-4 border-b-4 border-transparent rounded-t-lg text-blue-600 border-blue-600 "
              : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          Đang theo dõi
        </button>
      </div>
      <div className="mt-4  ">
        {activeTab === 1 && <div className=""></div>}
        {activeTab === 2 && (
          <div className="  mx-auto w-full max-w-screen-lg p-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-white shadow-md border rounded-md w-full h-auto">
                <div className="">
                  <img
                    className="w-10 h-10 absolute mt-5 ml-5"
                    src="https://file.vdiarybook.com/api/files/admin/00b90518-a482-49a9-9abe-023c15d97a87--300.png"
                    alt=""
                  />
                  {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="absolute inset-0 bg-black opacity-75"></div>
                      <div className="z-10  p-4">
                        <img
                          src="https://file.vdiarybook.com/api/files/admin/2a3a8393-4e09-49e2-892e-af10b0c215c1.jpg"
                          alt=""
                        />
                        <button
                          onClick={closeModal}
                          className="mt-4 absolute top-1 right-3 text-white"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="">
                  <img
                    className="rounded-t-md"
                    src="https://file.vdiarybook.com/api/files/admin/2a3a8393-4e09-49e2-892e-af10b0c215c1.jpg"
                    alt=""
                    onClick={openModal}
                  />
                </div>
                <div className="flex items-center justify-center mt-[-1.55rem]">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://file.vdiarybook.com/api/files/users/8579b872-944d-4a4d-a6fa-9a8f7a3d1ad7--150.jpg"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <div className="text-[1rem] font-medium text-center text-[#3f414d]">
                    Trang PGC Đà Nẵng
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className="line-clamp-2">
                      PGC BÌNH DƯƠNG luôn luôn sẵn sàng hổ trợ DN chuyển đổi số,
                      tiếp thị số, thương mại số, cùng nhau hợp tác cùng nhau
                      thành công{" "}
                    </p>
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className="">1 Theo dõi</p>
                  </div>
                  <button className="w-full h-[2.3rem] bg-[#4284f3] rounded-md flex justify-center items-center text-sm text-white font-normal">
                    Theo dõi
                  </button>
                  <button className="w-full h-[2.3rem] bg-[#dc3545] rounded-md flex justify-center items-center text-sm text-white font-normal mt-2">
                    Hủy
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-md border rounded-md w-full h-auto">
                <div className="">
                  <img
                    className="w-10 h-10 absolute mt-5 ml-5"
                    src="https://file.vdiarybook.com/api/files/admin/00b90518-a482-49a9-9abe-023c15d97a87--300.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="">
                    <img
                      className="rounded-t-md"
                      src="https://file.vdiarybook.com/api/files/admin/2a3a8393-4e09-49e2-892e-af10b0c215c1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-[-1.55rem]">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://file.vdiarybook.com/api/files/users/5346bccd-c64c-4962-a244-28eb35bcc2b1--150.jpg"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <div className="text-[1rem] font-medium text-center text-[#3f414d]">
                    PGC SÀI GÒN{" "}
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className="line-clamp-2">
                      PGC BÌNH DƯƠNG luôn luôn sẵn sàng hổ trợ DN chuyển đổi số,
                      tiếp thị số, thương mại số, cùng nhau hợp tác cùng nhau
                      thành công{" "}
                    </p>
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className="">1 Theo dõi</p>
                  </div>
                  <button className="w-full h-[2.3rem] bg-[#4284f3] rounded-md flex justify-center items-center text-sm text-white font-normal">
                    Theo dõi
                  </button>
                  <button className="w-full h-[2.3rem] bg-[#dc3545] rounded-md flex justify-center items-center text-sm text-white font-normal mt-2">
                    Hủy
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-md border rounded-md w-full h-auto">
                <div className="">
                  <img
                    className="w-10 h-10 absolute mt-5 ml-5"
                    src="https://file.vdiarybook.com/api/files/admin/00b90518-a482-49a9-9abe-023c15d97a87--300.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="rounded-t-md"
                    src="https://file.vdiarybook.com/api/files/admin/2a3a8393-4e09-49e2-892e-af10b0c215c1.jpg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center mt-[-1.55rem]">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://file.vdiarybook.com/api/files/users/8579b872-944d-4a4d-a6fa-9a8f7a3d1ad7--150.jpg"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <div className="text-[1rem] font-medium text-center text-[#3f414d]">
                    PGC SÀI GÒN{" "}
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className="line-clamp-2">
                      PGC BÌNH DƯƠNG luôn luôn sẵn sàng hổ trợ DN chuyển đổi số,
                      tiếp thị số, thương mại số, cùng nhau hợp tác cùng nhau
                      thành công{" "}
                    </p>
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className="">1 Theo dõi</p>
                  </div>
                  <button className="w-full h-[2.3rem] bg-[#4284f3] rounded-md flex justify-center items-center text-sm text-white font-normal">
                    Theo dõi
                  </button>
                  <button className="w-full h-[2.3rem] bg-[#dc3545] rounded-md flex justify-center items-center text-sm text-white font-normal mt-2">
                    Hủy
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-md border rounded-md w-full h-auto">
                <div className="">
                  <img
                    className="w-10 h-10 absolute mt-5 ml-5"
                    src="https://file.vdiarybook.com/api/files/admin/00b90518-a482-49a9-9abe-023c15d97a87--300.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="rounded-t-md"
                    src="https://file.vdiarybook.com/api/files/admin/2a3a8393-4e09-49e2-892e-af10b0c215c1.jpg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center mt-[-1.55rem]">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://file.vdiarybook.com/api/files/users/5346bccd-c64c-4962-a244-28eb35bcc2b1--150.jpg"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <div className="text-[1rem] font-medium text-center text-[#3f414d]">
                    Trang PGC Đà Nẵng
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className="line-clamp-2">
                      Chia sẻ khoảnh khắc - Lưu giữ kỷ niệm đẹp
                    </p>
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className="">1 Theo dõi</p>
                  </div>
                  <button className="w-full h-[2.3rem] bg-[#4284f3] rounded-md flex justify-center items-center text-sm text-white font-normal">
                    Theo dõi
                  </button>
                  <button className="w-full h-[2.3rem] bg-[#dc3545] rounded-md flex justify-center items-center text-sm text-white font-normal mt-2">
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 3 && <div className=""></div>}
      </div>
    </div>
  );
};
export default Suggest;
