import { useState, useEffect } from "react";
const categories = [
  {
    id: "JxouRmdW",
    order: 0,
    key: "Smart Tools",
    name: "CÔNG CỤ THÔNG MINH",
  },
  { id: "elQ1G2Rc", key: "Utility store", name: "Utility store", order: 1 },
  {
    id: "Wht8uRIp",
    order: 2,
    key: "Thư viện tri thức số",
    name: "Thư viện tri thức số",
    logo: "admin/cdcbb23e-fa48-4fa3-bc1e-ab8830cdd6f7.png",
  },
  { id: "YgVyoJwN", order: 2, key: "Life Smart", name: "Life Smart" },
  {
    id: "WUsQLvaA",
    key: "Finance - insurance",
    name: "Finance - insurance",
    order: 3,
  },
  { id: "G6PZTEHl", key: "Pay the bill", name: "Pay the bill", order: 4 },
  {
    id: "qv-0R8Ll",
    key: "Travel - commuting",
    name: "Travel - commuting",
    order: 5,
  },
  {
    id: "S48Ptj1O",
    key: "Transfer - Receive money",
    name: "Transfer - Receive money",
    order: 6,
  },
  { id: "BWGx8MlH", key: "Ecommerce", name: "Ecommerce", order: 7 },
  {
    id: "6bpgITL4",
    key: "Recharge your phone",
    name: "Recharge your phone",
    order: 8,
  },
  { id: "WmMOt29V", key: "Games - Apps", name: "Games - Apps", order: 9 },
  {
    id: "852VH9jG",
    key: "Pay at the counter",
    name: "Pay at the counter",
    order: 10,
  },
  { id: "MgNeXUGv", order: 11, key: "Province", name: "Province" },
  { id: "nZfNwo4d", order: 13, key: "Demo", name: "Demo edit" },
  {
    id: "js6Y9LDL",
    order: 14,
    key: "ĐỘI NGŨ SÁNG LẬP",
    name: "ĐỘI NGŨ SÁNG LẬP",
  },
  {
    id: "HpRM08qM",
    order: 15,
    key: "ĐỘI NGŨ CÔNG NGHỆ",
    name: "ĐỘI NGŨ CÔNG NGHỆ",
    logo: null,
  },
  {
    id: "_-5Poc2I",
    order: 16,
    key: "ĐỘI NGŨ ĐIỀU HÀNH",
    name: "ĐỘI NGŨ ĐIỀU HÀNH",
  },
  {
    id: "fAxsVoa_",
    order: 17,
    key: "ĐỘI NGŨ XÂY DỰNG THƯƠNG HIỆU",
    name: "ĐỘI NGŨ XÂY DỰNG THƯƠNG HIỆU",
  },
  {
    id: "hqj6XZgr",
    order: 18,
    key: "ĐỘI NGŨ THỊ TRƯỜNG",
    name: "ĐỘI NGŨ THỊ TRƯỜNG",
  },
  { id: "qwPASPt5", order: 19, key: "ĐỘI NGŨ KHÁC", name: "ĐỘI NGŨ KHÁC" },
  {
    id: "GfafXByV",
    order: 20,
    key: "NHÀ TÀI TRỢ VIP(TẬP ĐOÀN LỚN)",
    name: "NHÀ TÀI TRỢ VIP(TẬP ĐOÀN LỚN)",
  },
  {
    id: "uxYLAmMc",
    order: 21,
    key: "NHÀ TÀI TRỢ KIM CƯƠNG",
    name: "NHÀ TÀI TRỢ KIM CƯƠNG",
  },
  {
    id: "U1YWJL_t",
    order: 22,
    key: "NHÀ TÀI TRỢ VÀNG",
    name: "NHÀ TÀI TRỢ VÀNG",
  },
  {
    id: "IkPElgO_",
    order: 23,
    key: "NHÀ TÀI TRỢ BẠC",
    name: "NHÀ TÀI TRỢ BẠC",
  },
  {
    id: "pO8ihycy",
    order: 24,
    key: "NHÀ TÀI TRỢ ĐỒNG",
    name: "NHÀ TÀI TRỢ ĐỒNG",
  },
  {
    id: "NaS2cgry",
    order: 25,
    key: "DOANH NGHIỆP ĐỒNG HÀNH",
    name: "DOANH NGHIỆP ĐỒNG HÀNH",
  },
  {
    id: "Hf9LFEZh",
    order: 26,
    key: "DOANH NGHIỆP VỪA VÀ NHỎ",
    name: "DOANH NGHIỆP VỪA VÀ NHỎ",
  },
  {
    id: "nWkYI8r4",
    order: 27,
    key: "DOANH NGHIỆP CÁ THỂ, HỘ GIA ĐÌNH",
    name: "DOANH NGHIỆP CÁ THỂ, HỘ GIA ĐÌNH",
  },
  {
    id: "M2d3HEa9",
    order: 28,
    key: "ĐON VỊ TỔ CHỨC",
    name: "ĐON VỊ TỔ CHỨC",
  },
  {
    id: "-e-XmHVN",
    order: 29,
    key: "ĐON VỊ ĐỒNG HÀNH",
    name: "ĐON VỊ ĐỒNG HÀNH",
  },
  {
    id: "L9iQQEW0",
    order: 30,
    key: "ĐON VỊ TÀI TRỢ",
    name: "ĐON VỊ TÀI TRỢ",
  },
  {
    id: "3caATxft",
    order: 31,
    key: "BAN HUẤN LUYỆN VIÊN",
    name: "BAN HUẤN LUYỆN VIÊN",
  },
  { id: "mJkOSABK", order: 32, key: "BAN TRỌNG TÀI", name: "BAN TRỌNG TÀI" },
  {
    id: "fURtXUIZ",
    order: 33,
    key: "BẢNG VINH DANH",
    name: "BẢNG VINH DANH",
  },
];

const tabs = [
  { id: 1, name: "Tất cả " },
  { id: 2, name: "Chuyển đổi kỹ thuật số" },
];

const Utilitie = () => {
  const [utilities, setUtilities] = useState<any>({ all: [], native: [] });
  console.log(utilities);

  const formating = (data: any) => {
    const groupByCategory = [...(data || [])].reduce((prev, next) => {
      const { category } = next;
      prev[category] = prev[category] ?? [];
      prev[category].push(next);
      return prev;
    }, {});
    return categories
      .map((c) => c.key)
      .map((category) => ({
        name: category,
        childs: groupByCategory[category],
      }));
  };
  const loadData = async () => {
    const url = "https://api.vdiarybook.net/api/utilities";
    const token =
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZkMzdiYTU3YTg0OWM4NTJmYmQ2YzgiLCJlbWFpbCI6ImtpZXV2aWV0dmluaDAwMDlAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOnt9LCJyb2xlIjoiVVNFUiIsImlhdCI6MTcxMjAyNTEyMywiZXhwIjoxNzk4NDI1MTIzfQ.xgQmmT4Lmbp7WQ_3phzte3bo2tepyC1ppGuuibIGcV0";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) =>
        setUtilities((state: any) => ({
          ...state,
          all: formating(data.data.all),
          native: formating(data.data.native),
        }))
      )
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    loadData();
  }, []);

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="rounded-lg mx-auto w-full max-w-[1024px] font-roboto bg-white p-4">
      <div className=" border-b border-gray-200 mt-4 sm:w-auto bg-white shadow-sm sm:grid sm:grid-cols-2 sm:gap-2  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` border-b-[3px] border bg-white border-transparent whitespace-nowrap hover:bg-gray-100 hover:rounded  text-[#777d74] text-xs sm:px-4 sm:py-2 p-[7px] ${
              activeTab === tab.id
                ? "inline-block p-4 !border-b-blue-600 rounded-t-lg text-blue-600 w-auto "
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="pt-14 font-roboto">
        {activeTab === 1 && (
          <div className="">
            <div className=" ">
              {utilities.all?.map((utility: any, i: number) => (
                <div className="pt-8" key={i}>
                  <div className=" flex relative items-center  ">
                    <div className="bg-[#4284f3]  px-8 w-auto h-[30px]  absolute bottom-0 flex justify-center items-center">
                      <div className="w-1 h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-3 top-0"></div>
                      <div className="w-1 h-[11.99px] -rotate-0 bg-[#4284f3] absolute -right-1 bottom-0 "></div>
                      <div className="w-[5px] h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-1 top-0 "></div>
                      <p className="mt-[1.5px] text-white lg:text-sm text-[0.77rem] font-normal ">
                        {utility?.name}
                      </p>
                    </div>
                  </div>
                  <div className=" border-b-[3px] border-[#4284f3] w-full"></div>
                  <div className="lg:grid lg:grid-cols-6 lg:gap-2 grid grid-cols-3 gap-1 mt-8 mb-8 ">
                    {utility?.childs?.map((all: any, allIndex: any) => (
                      <div key={allIndex} className="lg:px-2 px-0.5">
                        <div className="bg-white rounded-lg border sidhadow-md w-[3.74rem] h-[3.74rem] flex items-center justify-center m-auto">
                          <img
                            className="rounded-md w-12 h-12"
                            src={
                              "https://files.vdiarybook.net/api/files/" +
                              all.logo
                            }
                            alt=""
                          />
                        </div>
                        <div className=" ">
                          <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal flex justify-center my-2">
                            {all.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 2 && <div></div>}
      </div>
    </div>
  );
};
export default Utilitie;
