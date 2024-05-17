import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const tabs = [
  { id: 1, name: "Cài đặt shop " },
  { id: 2, name: "Quản lí niêm yết" },
  { id: 3, name: "Quản kí voucher" },
  { id: 4, name: "Sáng tạo" },
  { id: 5, name: "QR dịch vụ" },
];

const Listed = () => {
  const router = useRouter();

  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [inputValues, setInputValues] = useState({
    fileInput: null,
    nameList: "",
    parentCategory: "",
    icon: null,
    productcode: "",
    time: "",
    status: "",
  });
  console.log("inputValues :", inputValues);

  const [data, setData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAdd = (event: any) => {
    event.preventDefault();

    const newEntry = {
      _id: Date.now(),
      ...inputValues,
      ...data,
    };

    setData([...data, newEntry]);
    setInputValues({
      fileInput: null,
      nameList: "",
      parentCategory: "",
      icon: null,
      productcode: "",
      time: "",
      status: "",
    });
  };
  const handleEdit = (itemId: any) => {
    const selectedItem = data.find((item: any) => item._id === itemId);
    setInputValues({
      fileInput: selectedItem.fileInput,
      nameList: selectedItem.nameList,
      parentCategory: selectedItem.parentCategory,
      icon: selectedItem.icon,
      productcode: selectedItem.productcode,
      time: selectedItem.time,
      status: selectedItem.status,
    });
    router.push({
      pathname: "/products/" + itemId,
    });
    setIsEditMode(true);
    setSelectedItemId(itemId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  //
  const deleteData = async (_id: any) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa khóa học này?")) {
      try {
        await axios.delete(`http://localhost:8000/products/${_id}`);
        setData(data.filter((data) => data._id !== _id));
        console.log("data :", data);
      } catch (error) {}
    }
  };

  return (
    <div className="font-inter mx-auto w-full max-w-5xl rounded-lg bg-white p-2">
      <div className="tabs border-b border-[#ECF0F1] sm:w-auto   shadow flex justify-between gap-2 overflow-x-scroll whitespace-nowrap ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={` border-b-[3px]   border-transparent whitespace-nowrap leading-[22px] hover:bg-gray-100 hover:rounded   text-[#1F1F1F] text-sm sm:px-4 sm:py-2 p-[7px] ${
              activeTab === tab.id
                ? "inline-block p-4 !border-b-[#4284F3]  text-[#4284F3] w-auto font-bold"
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className=" flex justify-between items-center flex-wrap gap-2 pt-2">
        <div className="flex gap-2">
          <div>
            <form className="max-w-[250px] mx-auto h-[38px] ">
              <div className="relative">
                <div className="absolute  right-2 top-3 ">
                  <img src="/image/timkiem.png" alt="" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2  text-sm text-[#8E8E93] border border-gray-300 rounded-lg bg-white font-normal leading-[22px]"
                  placeholder="Tìm kiếm..."
                  required
                />
              </div>
            </form>
          </div>
          <div>
            <form className=" mx-auto h-[38px]">
              <select
                id="countries"
                name="countries"
                className="block w-[250px] p-[0.6rem] text-sm text-[#8E8E93] border border-gray-300 rounded-lg bg-white font-normal leading-[22px] "
              >
                <option value="DM">Danh mục</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </select>
            </form>
          </div>
        </div>
        <div className="flex gap-2 ">
          <div className="rounded-full bg-white border border-[#4284F3] flex items-center justify-center py-2 px-4">
            <button className="text-[#4284F3] font-normal text-sm leading-[22px] flex items-center gap-2">
              <img src="/image/quangcao.png" alt="" />
              Đăng kí quảng cáo
            </button>
          </div>
          <div className="rounded-full bg-[#4284F3]  flex items-center justify-center py-2 px-4">
            <Link
              href="/products"
              className="text-white font-normal text-sm leading-[22px] flex items-center gap-2"
            >
              <img src="/image/congone.png" alt="" />
              Tạo niêm yết
            </Link>
          </div>
        </div>
      </div>
      <div className="-w-5xl mx-auto p-2">
        <form>
          <table className=" w-full ">
            <thead className="text-justify overflow-scroll">
              <tr className="text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] whitespace-nowrap">
                <th className="py-2 min-w-[240px]">TẠO NIÊM YẾT</th>
                <th className="min-w-[190px]">DANH MỤC</th>
                <th className="min-w-[140px]">ICON</th>
                <th className="min-w-[140px]">MÔ TẢ</th>
                <th>MÃ SẢN PHẨM</th>
                <th> CÔNG KHAI</th>
              </tr>
            </thead>
            {data.map((entry: any, index) => (
              <tbody key={index} className="w-full h-14 overflow-scroll">
                <tr
                  style={{ padding: "10px" }}
                  className=" text-[#1F1F1F]  font-normal text-sm leading-[22px] "
                >
                  <td>
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <img
                        className="rounded-full w-12 h-12"
                        src={entry.fileInput}
                        alt="Uploaded"
                      />
                      <p className="">{entry.nameList}</p>
                    </div>
                  </td>
                  <td className="uppercase ">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <img
                        className="rounded-full w-12 h-12"
                        src={entry.fileInput}
                        alt=""
                      />
                      <p>{entry.parentCategory}</p>
                    </div>
                  </td>
                  <td className="uppercase ">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <img
                        className="rounded-full w-12 h-12"
                        src={entry.icon}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="uppercase whitespace-nowrap">
                    {entry.status}
                  </td>
                  <td className="uppercase whitespace-nowrap">
                    <p>{entry.productcode}</p>
                  </td>

                  <td>
                    <div className="flex  items-center gap-2">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-slate-400 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                      </label>
                      <div className=" cursor-pointer">
                        <img
                          onClick={() => handleEdit(entry._id)}
                          src="/image/Pen.png"
                          alt=""
                        />
                      </div>
                      <img
                        className="cursor-pointer"
                        onClick={() => deleteData(entry._id)}
                        src="image/delete.png"
                        alt=""
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </form>
      </div>
    </div>
  );
};
export default Listed;
