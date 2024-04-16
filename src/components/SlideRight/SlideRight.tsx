import React from "react";
const chatpage = [
  {
    id: 1,
    img: "/image/userone.png",
    name: "Huyền Thương",
    tatel: "Trò chuyện",
  },
  {
    id: 2,
    img: "/image/userone.png",
    name: " Xuân Hái",
    tatel: "5 phút trước",
  },
  {
    id: 3,
    img: "/image/userone.png",
    name: " Thanh Huyền",
    tatel: "5 phút trước",
  },
  {
    id: 4,
    img: "/image/userone.png",
    name: "Hà My",
    tatel: "Trò chuyện",
  },
];

const SlideRight = () => {
  return (
    <div>
      <div className="right max-[1024px]:hidden ">
        <div>
          <div className="right-page">
            <p>Trò chuyện</p>
            <div className="sting">
              <img src="/image-left/caidat.png" alt="" />
              <img src="/image-left/usercong.png" alt="" />
            </div>
          </div>
          <div className="">
            <ul className="useres">
              <li>
                <a className="one" href="">
                  <img src="/image-left/usereys.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image-left/useres.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {chatpage.map((chat) => (
          <div className="">
            <div className="userone">
              <a href="">
                <img className="onemo" src={chat.img} alt="" />
                <img className="towmo" src="/image-left/Ensign.png" alt="" />
              </a>
              <div>
                <div className="chatone">
                  {chat.name}
                  <img className="teck" src="/image-left/teck.png" alt="" />
                </div>
                <div className="chattow">
                  <img className="sys" src="/image-left/tim.png" alt="" />
                  <div className="chattrue">
                    <img src="/image/chat.png" alt="" />
                    <p>{chat.tatel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideRight;
