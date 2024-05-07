import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchData, addData, updateData, deleteData } from "../api/Api";

const Thu = () => {
  const [data, setData] = useState<any>([]);
  console.log("data :", data);
  const [newData, setNewData] = useState("");
  console.log("newData :", newData);
  const [editedData, setEditedData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const responseData = await fetchData();
      setData(responseData);
    };
    getData();
  }, []);

  const handleAddData = async () => {
    const response = await addData({ data: newData });
    setData([...data, response]);
    setNewData("");
  };

  const handleUpdateData = async (id: any) => {
    const response = await updateData(id, { data: editedData });
    setData(data.map((item: any) => (item.id === id ? response : item)));
    setEditedData("");
  };

  const handleDeleteData = async (id: any) => {
    await deleteData(id);
    setData(data.filter((item: any) => item.id !== id));
  };

  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <ul>
        <table className="table-auto w-full ">
          <thead className="text-justify ">
            <tr className="text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] whitespace-nowrap">
              <th className="py-2 min-w-[240px]">TẠO NIÊM YẾT</th>
              <th className="min-w-[190px]">DANH MỤC</th>
              <th className="min-w-[140px]">HÌNH THỨC BÁN</th>
              <th className="min-w-[140px]">LOẠI NIÊM YẾT</th>
              <th>NGÀY TẠO</th>
              <th> CÔNG KHAI</th>
            </tr>
          </thead>
          {data.map((item: any) => (
            <tbody key={item.id} className="w-full ">
              <tr
                style={{ padding: "10px" }}
                className=" text-[#1F1F1F]  font-normal text-sm leading-[22px] "
              >
                <td>
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <img
                      className="rounded-full w-12 h-12"
                      src={item.date}
                      alt="Uploaded"
                    />
                    <p className="">{item.name}</p>
                  </div>
                </td>
                <td className="uppercase ">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <img
                      className="rounded-full w-12 h-12"
                      src={item.fileInput}
                      alt=""
                    />
                    <p>{item.username}</p>
                  </div>
                </td>
                <td className="uppercase whitespace-nowrap">{item.icon}</td>
                <td className="uppercase whitespace-nowrap">{item.email}</td>
                <td className="uppercase whitespace-nowrap">
                  <p>{item.date}</p>
                  <p>{item.time}</p>
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
                    <li>
                      <button onClick={() => handleUpdateData(item.id)}>
                        Sửa
                      </button>
                      <button onClick={() => handleDeleteData(item.id)}>
                        Xóa
                      </button>
                    </li>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </ul>

      <div>
        <input
          type="text"
          placeholder="Tên sản phẩm mới"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
        />
        <button onClick={addData}>Thêm sản phẩm</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Tên sản phẩm cần sửa"
          value={editedData}
          onChange={(e) => setEditedData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Thu;
