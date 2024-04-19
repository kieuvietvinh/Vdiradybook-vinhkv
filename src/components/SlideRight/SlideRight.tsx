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
          <SlideRightChat chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default SlideRight;
