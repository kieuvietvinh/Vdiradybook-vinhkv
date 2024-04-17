import React, { useState } from "react";

const HierarchySlide = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ul className="">
        <li className="cursor-pointer px-4 py-2" onClick={toggleMenu}>
          <img src={props?.net.img} alt="" />
          <span>{props?.net.name}</span>
          <img
            className={`absolute right-2  ${
              isOpen
                ? "transform rotate-90 delay-75 decoration-slate-100"
                : "transform rotate-0"
            }`}
            src="/image-left/muiten.png"
            alt=""
          />
        </li>
        {isOpen && (
          <ul className="ml-4">
            <li className="p-2">Menu 2.1</li>
            <li className="p-2">Menu 2.2</li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default HierarchySlide;
