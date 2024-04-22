import React, { useState } from "react";
const products = [
  {
    id: 1,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/95c3383c-f412-4e77-b057-39e493d26bc2.png",
    name: " Cài đặt tài khoản",
    title:
      "Điều chỉnh tài khoản, các thông tin về tài khoản, các nội dung cơ bản.",
  },
  {
    id: 2,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/b15ac374-a54d-4e28-b791-28e4a83cdc16.png",
    name: "Đăng nhập và mật khẩu",
    title:
      "Điều chỉnh tài khoản, các thông tin về tài khoản, các nội dung cơ bản.",
  },
  {
    id: 3,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/d56ffab6-452e-4d6e-a4a7-62d171990162.png",
    name: "Quyền riêng tư",
    title:
      "Điều chỉnh tài khoản, các thông tin về tài khoản, các nội dung cơ bản.",
  },
  {
    id: 4,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/0957814d-3437-4705-acfb-19c731da49fc.png",
    name: "Cửa hàng",
    title:
      "Điều chỉnh tài khoản, các thông tin về tài khoản, các nội dung cơ bản.",
  },
  {
    id: 5,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/c89c0614-2593-4db0-8509-3fd0c39aabc5.png",
    name: "Nhóm",
    title:
      "Điều chỉnh tài khoản, các thông tin về tài khoản, các nội dung cơ bản.",
  },
  {
    id: 6,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/624c40cc-8b7a-4bb4-951d-a6c4c9b93d1a.png",
    name: "Trang",
    title:
      "Điều chỉnh tài khoản, các thông tin về tài khoản, các nội dung cơ bản.",
  },
  {
    id: 7,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/6932edca-0b64-40b2-b0d6-62aeb9372c58.png",
    name: "Doanh nghiệp",
    title:
      "Điều chỉnh tài khoản, các thông tin về tài khoản, các nội dung cơ bản.",
  },
  {
    id: 8,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/60c40bdc-9313-4d4b-b353-a423627d0725.svg",
    name: "Ví",
    title:
      "Lưu trữ các phần thưởng của bạn như các loại Cổ phần, điểm khuyến mãi  trong hệ sinh thái",
  },
  {
    id: 9,
    img: "https://file.vdiarybook.com/api/files/admin/20240103/11e69df5-a7f7-4aeb-8036-75282372d205.svg",
    name: "Đóng góp ý kiến",
    title: "Cùng nhau đóng góp ý kiến để xây dựng nền tảng mạng xã hội sạch",
  },
];
const tabs = [
  { id: 1, name: "Chủ đề phổ biến" },
  { id: 2, name: "Bạn muốn đặt câu hỏi về vấn đề khác?" },
  { id: 3, name: "Lịch sử" },
  { id: 4, name: "Chính sách Vdiarybook" },
  {
    id: 5,
    name: "Quyền lợi của người dùng Mạng xã hội Nhật ký cuộc sống Vdiarybook.",
  },
];

const PopularTopic = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  const background =
    "radial-gradient(50% 50% at 50% 50%,rgba(26,188,156,.4) 0,rgba(52,152,219,0) 100%) ";

  return (
    <div className="  mx-auto w-full max-w-[1024px] font-roboto">
      <div className="bg-white rounded-lg w-full h-auto p-4 border">
        <div className="flex justify-center">
          <h1 className="text-[1.7rem] text-[#4284f3] font-normal ">
            Chúng tôi có thể giúp gì cho bạn?
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 relative  mt-2">
          <div className="w-2/3">
            <form className="max-w-sm ">
              <div className="relative ">
                <input
                  type="search"
                  className="outline-none block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
                  required
                />
                <div className="bg-white w-14 h-5 absolute top-[-9px] left-2"></div>
                <div className="absolute top-[-9px] text-[#8d8a8a] text-xs left-3">
                  Tim kiếm
                </div>
                <button
                  type="submit"
                  className="text-blue-600 absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 absolute "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="absolute right-0 bottom-0">
            <button className="bg-[#4284f3] rounded-md w-auto h-auto px-[15px] py-[5px]">
              <p className="text-white text-sm p-1">Đặt câu hỏi</p>
            </button>
          </div>
        </div>
      </div>
      <div className="catego flex border-b border-gray-200 mt-4 overflow-x-scroll">
        {tabs.map((tab, a) => (
          <button
            key={a}
            className={` border-b-4  border-transparent whitespace-nowrap hover:bg-gray-100 hover:rounded  text-[#777d74] text-xs px-4 py-2 ${
              activeTab === tab.id
                ? "inline-block p-4  !border-blue-600   rounded-t-lg  text-blue-600  "
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-2 p-2">
        {activeTab === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {products.map((product, i) => (
              <div
                key={i}
                className="bg-white border  rounded-md w-full h-auto p-2   relative overflow-hidden hover:shadow-[0_0_10px_#4284f3]"
              >
                <div
                  style={{
                    background,
                  }}
                  className=" w-40 h-32 top-[-30px] right-[-30px] rotate-45 absolute "
                ></div>

                <div
                  style={{
                    background,
                  }}
                  className=" w-40 h-32 bottom-[-30px] left-[-30px] rotate-45 absolute"
                ></div>

                <div className="py-4 h-1/2 flex items-center justify-center">
                  <img
                    className="h-auto  max-w-[100px] "
                    src={product.img}
                    alt=""
                  />
                </div>
                <div className=" h-1/2">
                  <div className="text-[1rem] font-bold text-center text-[#3f414d] pb-[7px]">
                    {product.name}
                  </div>
                  <div className="text-xs text-center pb-2">
                    <p className=" text-[#555770]">{product.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && <div></div>}
        {activeTab === 3 && <div className=""></div>}
      </div>
    </div>
  );
};
export default PopularTopic;
