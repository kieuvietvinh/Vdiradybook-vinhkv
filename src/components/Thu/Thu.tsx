import React, { useState } from "react";

const Thu = () => {
  const [data, setData] = useState<any>([]);
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAdd = (event: any) => {
    event.preventDefault();

    const newEntry = {
      id: Date.now(),
      ...inputValues,
    };

    setData([...data, newEntry]);
    setInputValues({
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    });
  };

  const handleEdit = (index: any) => {
    const editedItem = data[index];

    if (editedItem) {
      setInputValues({ ...editedItem });
      setIsEditing(true);
      setEditIndex(index);
    }
  };

  const handleUpdate = (event: any) => {
    event.preventDefault();

    if (editIndex === null) {
      return;
    }

    const updatedData = [...data];
    updatedData[editIndex] = { ...inputValues };
    setData(updatedData);
    setInputValues({
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleDelete = (index: any) => {
    const filteredData = data.filter((_: any, i: any) => i !== index);
    setData(filteredData);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <form onSubmit={isEditing ? handleUpdate : handleAdd} className="mb-4">
        <input
          type="text"
          name="input1"
          value={inputValues.input1}
          onChange={handleInputChange}
          placeholder="Enter value 1"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="input2"
          value={inputValues.input2}
          onChange={handleInputChange}
          placeholder="Enter value 2"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="input3"
          value={inputValues.input3}
          onChange={handleInputChange}
          placeholder="Enter value 3"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="input4"
          value={inputValues.input4}
          onChange={handleInputChange}
          placeholder="Enter value 4"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="input5"
          value={inputValues.input5}
          onChange={handleInputChange}
          placeholder="Enter value 5"
          className="p-2 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="px-4 py-2 mt-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <ul className="max-w-5xl mx-auto">
        <li>
          <form>
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
              {data.map((entry: any, index: any) => (
                <tbody key={entry.id} className="w-full ">
                  <tr
                    style={{ padding: "10px" }}
                    className=" text-[#1F1F1F]  font-normal text-sm leading-[22px] "
                  >
                    <td>
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        {/* <img
                        className="rounded-full w-10 h-10 flex"
                        src="image/iphone.jpeg"
                        alt=""
                      /> */}
                        <p className="">{entry.input1}</p>
                      </div>
                    </td>
                    <td className="uppercase ">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        {/* <img
                        className="rounded-full w-10 h-10 flex"
                        src="image/iphone.jpeg"
                        alt=""
                      /> */}
                        <p>{entry.input2}</p>
                      </div>
                    </td>
                    <td className="uppercase whitespace-nowrap">
                      {entry.input3}
                    </td>
                    <td className="uppercase whitespace-nowrap">
                      {entry.input4}
                    </td>
                    <td className="uppercase whitespace-nowrap">
                      <p>{entry.input5}</p>
                      <p>10:22:35PM</p>
                    </td>
                    <td>
                      <div className="flex relative">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                        </label>
                        <div className="absolute right-0 cursor-pointer">
                          <img
                            onClick={() => handleEdit(index)}
                            src="/image/Pen.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-2 py-1 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </tbody>
              ))}
            </table>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default Thu;
