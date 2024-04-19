import React from "react";
import { Interface } from "readline";

interface IProps {
  chat: {
    id: number;
    img: string;
    name: string;
    tatel: string;
    minute: string;
    active: boolean;
  };
}

const SlideRightChat = ({ chat }: IProps) => {
  return (
    <div className="">
      <div className="userone">
        <a href="">
          <img className="onemo" src="/image/userone.png" alt="" />
          <img className="towmo" src="/image-left/Ensign.png" alt="" />
        </a>
        <div>
          <div className="flex items-center font-normal text-sm text-[#4284F3]">
            {chat?.name}
            <img className="teck" src="/image-left/teck.png" alt="" />
          </div>
          {chat?.active && (
            <>
              <div className=" flex items-center gap-1">
                <img
                  className=" border border-[#4284F3] p-[2px]"
                  src="/image-left/tim.png"
                  alt=""
                />
                <div className="chattrue">
                  <img src="/image/chat.png" alt="" />
                  <p>{chat?.tatel}</p>
                </div>
              </div>
            </>
          )}
          {!chat?.active && (
            <div className="flex items-center">
              <img src="/image/timxanh.png" alt="" />
              <div className="text-[#838383] font-normal text-[10px]">
                {chat.minute}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideRightChat;
