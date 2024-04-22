import React from "react";
import SlideRightChat from "../SlideRightChat/SlideRightChat";

const chatpage = [
  {
    id: 1,
    img: "/image/userone.png",
    name: "Huyền Thương",
    tatel: "Trò chuyện",
    minute: "5 phút trước",
    active: false,
  },
  {
    id: 2,
    img: "/image/userone.png",
    name: " Xuân Hái",
    tatel: "Trò chuyện",
    minute: "5 phút trước",
    active: true,
  },
  {
    id: 3,
    img: "/image/userone.png",
    name: " Thanh Huyền",
    tatel: "Trò chuyện",
    minute: "5 phút trước",
    active: false,
  },
  {
    id: 4,
    img: "/image/userone.png",
    name: "Hà My",
    tatel: "Trò chuyện",
    minute: "5 phút trước",
    active: false,
  },
  {
    id: 5,
    img: "/image/userone.png",
    name: "Huyền Trâm",
    tatel: "Trò chuyện",
    minute: "5 phút trước",
    active: true,
  },
  {
    id: 6,
    img: "/image/userone.png",
    name: " Hải My",
    tatel: "Trò chuyện",
    minute: "5 phút trước",
    active: true,
  },
  {
    id: 7,
    img: "/image/userone.png",
    name: " Hà Nhi",
    tatel: "Trò chuyện",
    minute: "5 phút trước",
    active: false,
  },
  {
    id: 8,
    img: "/image/userone.png",
    name: "Linh Anh",
    tatel: "Trò chuyện",
    minute: "5 phút trước",
    active: true,
  },
];

const SlideRight = (props: any) => {
  return (
    <div>
      <div className="right max-[1024px]:hidden ">
        <div>
          <div className="right-page">
            <p>Trò chuyện</p>
            <div className="sting ">
              <img src="/image-left/caidat.png" alt="" />
              <img src="/image-left/usercong.png" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2  pt-4">
            <a
              className="justify-center items-center flex border-b-2 border-[#4284F3]"
              href=""
            >
              <img className="mb-1" src="/image-left/usereys.png" alt="" />
            </a>
            <a
              className="justify-center items-center flex border-2-b border-[#4284F3]"
              href=""
            >
              <img className="mb-1" src="/image-left/useres.png" alt="" />
            </a>
          </div>
        </div>
        {chatpage.map((chat) => (
          <SlideRightChat key={chat.id} chat={chat} />
        ))}
        <div className="mt-10">
          <form className="flex items-center max-w-sm mx-auto">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img className="w-5 h-5" src="/image/Search1.png" alt="" />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-white outline-none border border-[#007AFF] text-[#95A5A6] text-base rounded-full block w-full ps-10 p-2  "
                placeholder="Tìm kiếm"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SlideRight;
