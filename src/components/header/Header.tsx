import Link from "next/link";

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
      <header className="shadow-md px-6 w-full fixed z-[2] ">
        <div className="logo">
          <ul>
            <li className="pt-3">
              <Link href="">
                <img src="/image/ngang.png" alt="user photo" />
              </Link>
            </li>
            <li className="farm ">
              <Link className="max-[1024px]:hidden" href="">
                <img src="/image/may.png" alt="user photo" />
              </Link>
              <Link className="max-[1024px]:hidden" href="">
                <p className="degree">Hà Nội, 24 độ C</p>
                <p className="cloud">Trời nắng</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="containerSeach  max-w-5xl flex  justify-between gap-6">
          <div>
            <Link href=" ">
              <img
                className="w-full h-auto"
                src="/image/logo.png"
                alt="Flowbite Logo"
              />
            </Link>
          </div>
          <form className="w-[498.22px]  max-[1120px]:hidden">
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
          <div className="flex items-center gap-4 pl-4 max-[1570px]:hidden w-[432px]">
            {seach.map((seac) => (
              <ul
                className="hover:bg-[#3498DB33] w-10 h-10 items-center flex justify-center rounded-lg"
                key={seac.id}
              >
                <li className="">
                  <Link className="" href="">
                    <img src={seac.img} alt="" />
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="user ">
          <div className="max-[1024px]:hidden w-[280px]">
            <ul className="gap-4">
              <li>
                <Link href="">
                  <img src="/image/home.png" alt="" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <img src="/image/user.png" alt="" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <img src="/image/chat.png" alt="" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <img src="/image/sos.png" alt="" />
                </Link>
              </li>

              <li>
                <Link href="">
                  <img src="/image/userone.png" alt="" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <img src="/image/muiduoi.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
