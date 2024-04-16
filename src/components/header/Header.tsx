import React from "react";

const seach = [
  {
    id: 1,
    img: "/image/s1.png",
  },
  {
    id: 2,
    img: "/image/s2.png",
  },
  {
    id: 3,
    img: "/image/s3.png",
  },
  {
    id: 4,
    img: "/image/s4.png",
  },
  {
    id: 5,
    img: "/image/s5.png",
  },
  {
    id: 6,
    img: "/image/s6.png",
  },
  {
    id: 7,
    img: "/image/s7.png",
  },
  {
    id: 8,
    img: "/image/s8.png",
  },
];

const Header = () => {
  return (
    <div>
      <header className="shadow-md px-6 w-full">
        <div className="logo">
          <ul>
            <li className="max-[1024px]:hidden ">
              <a href="">
                <img src="/image/ngang.png" alt="user photo" />
              </a>
            </li>
            <li className="farm ">
              <a className="max-[1024px]:hidden" href="">
                <img src="/image/may.png" alt="user photo" />
              </a>
              <a className="max-[1024px]:hidden" href="">
                <p className="degree">Hà Nội, 24 độ C</p>
                <p className="cloud">Trời nắng</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="containerSeach  max-w-5xl flex  justify-between gap-6">
          <div>
            <a href=" ">
              <img
                className="w-full h-auto"
                src="/image/logo.png"
                alt="Flowbite Logo"
              />
            </a>
          </div>
          <form className="w-[498.22px]  max-[1024px]:hidden">
            <div className="flex">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-[#1F1F1F]  border border-[#DADADA] rounded-s-full gap-2   "
                type="button"
              >
                <img src="/image/mn.png" alt="" />
                Mọi người
                <img className="pl-2" src="/image/muixuong.png" alt="" />
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y  rounded-full shadow w-44 "
              ></div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-[#1F1F1F] bg-white rounded-e-full border-s-gray-50 border-s-2 border border-gray-300 pl-10"
                  placeholder="Tìm kiếm Vdiraybook..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 left-0 end-0 p-2.5 text-sm font-medium h-full text-[#838383]"
                >
                  <img className="w-6 h-6" src="/image/Search1.png" alt="" />
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center gap-4 pl-4">
            {seach.map((seac) => (
              <ul key={seac.id}>
                <li>
                  <a href="">
                    <img src={seac.img} alt="" />
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="user ">
          <div className="max-[1024px]:hidden">
            <ul className="">
              <li>
                <a href="">
                  <img src="/image/home.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/user.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/chat.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/sos.png" alt="" />
                </a>
              </li>

              <li>
                <a href="">
                  <img src="/image/userone.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/image/muiduoi.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
