import React, { useState } from "react";

const tabs = [
  { id: 1, name: "Chủ đề phổ biến" },
  { id: 2, name: "Bạn muốn đặt câu hỏi về vấn đề khác?" },
  { id: 3, name: "Lịch sử" },
  { id: 4, name: "Chính sách Vdiarybook" },
  {
    id: 5,
    name: "Quyền lợi của người dùng Mạng xã hội Nhật ký cuộc sống Vdiarybook.",
  },
];

const Contribute = () => {
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [elements, setElements] = useState<any>([]);
  const [count, setCount] = useState(1);

  const addElement = () => {
    setElements([...elements, count]);
    setCount(count + 1);
  };
  //submit
  const [inputValue, setInputValue] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    setButtonActive(e.target.value.trim() !== "");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      console.log("Submitted value: ", inputValue);
    }
  };
  const removeElement = (index: any) => {
    setElements(elements.filter((element: any) => element !== index));
  };

  return (
    <div className=" mx-auto w-full max-w-[1024px] font-inter">
      <div className="bg-white rounded-lg w-full h-auto p-4 border">
        <div className="flex justify-center">
          <h1 className="text-[1.7rem] text-[#4284f3] font-normal font-inter ">
            Chúng tôi có thể giúp gì cho bạn?
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 relative  mt-2">
          <div className="w-2/3">
            <form className="max-w-sm ">
              <div className="relative ">
                <input
                  type="search"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
                  required
                />
                <div className="bg-white w-14 h-5 absolute top-[-9px] left-2"></div>
                <div className="absolute top-[-9px] text-[#8d8a8a] text-xs left-3 font-inter">
                  Tim kiếm
                </div>
                <button
                  type="submit"
                  className="text-blue-600 absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 flex items-center justify-center"
                >
                  <img
                    className="w-4 h-4 absolute"
                    src="/assets/icons/default/search.svg"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="absolute right-0 bottom-0">
            <button className="bg-[#4284f3] rounded-lg w-auto h-auto px-[15px] py-[5px]">
              <p className="text-white text-sm p-1">Đặt câu hỏi </p>
            </button>
          </div>
        </div>
      </div>
      <div className="catego  flex border-b border-gray-200 mt-4 overflow-x-scroll ">
        {tabs.map((tab, a) => (
          <button
            key={a}
            className={` border-b-4  border-transparent whitespace-nowrap hover:bg-gray-100 hover:rounded  text-[#777d74] text-xs px-4 py-2 ${
              activeTab === tab.id
                ? "inline-block p-4  !border-blue-600   rounded-t-lg  text-blue-600  "
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-2 p-2">
        {activeTab === 1 && <div></div>}
        {activeTab === 2 && (
          <div className="">
            <div className="relative font-serif max-w-[1024px]  mx-auto w-full duration-1000 border rounded-md drop-shadow-md">
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex  w-full rounded-t-sm  p-[15px]  bg-white text-xl font-medium font-inter"
                  onClick={toggleDropdown}
                >
                  {selectedOption ? selectedOption : "Bạn cần giúp đỡ?"}
                  <img
                    className={`absolute right-5  ${
                      isOpen
                        ? "transform rotate-0 delay-75 decoration-slate-100"
                        : "transform -rotate-180"
                    }`}
                    src="https://vdiarybook.com/assets/icons/default/dropdown.svg"
                    alt=""
                  />
                </button>
              </div>
              {isOpen && (
                <div className="p-[14px]  w-full rounded-b-sm shadow-lg h-auto bg-white ring-1  ring-opacity-5 transform scale-100 delay-1000 duration-1000">
                  <div className="flex justify-center">
                    <h1 className="text-[#3f414d] font-normal text-4xl font-inter ">
                      Bạn cần giúp đỡ?
                    </h1>
                  </div>
                  <div className="">
                    <form className="pt-5" onSubmit={handleSubmit}>
                      <div className="relative ">
                        <input
                          type="search"
                          className="block w-full px-3 py-[6px] text-sm text-gray-900 border border-gray-300 rounded-[5px] bg-white outline-none"
                          required
                          onChange={handleInputChange}
                        />
                        <div className="bg-white w-auto rounded-[5px] h-auto p-1 absolute top-[-12px] left-2 flex justify-center items-center">
                          <div className=" text-[#8d8a8a] text-xs ">
                            Nhập tên của bạn
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="">
                    <form className="pt-5 ">
                      <div className="relative ">
                        <input
                          type="email"
                          id="email"
                          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-[5px]  block w-full px-3 py-[6px] outline-none"
                          placeholder="name@gmail.com"
                          required
                        />
                        <div className="bg-white w-auto rounded-sm h-auto px-1 absolute top-[-12px] left-2 flex justify-center items-center ">
                          <div className=" text-[#8d8a8a] text-xs ">E-mail</div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="pt-5">
                    <div className="relative ">
                      <textarea
                        id="message"
                        className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-white rounded-md border border-gray-300  "
                      ></textarea>
                      <div className="bg-white w-auto rounded-sm h-auto p-1 absolute top-[-12px] left-2 flex justify-center items-center">
                        <div className=" text-[#8d8a8a] text-xs font-inter">
                          Nội dung cần hỗ trợ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 text-sm font-inter text-[#555770]">
                    File/Hình ảnh đi kèm
                  </div>
                  <div className=" pt-5 flex gap-2 flex-wrap ">
                    <div className="flex items-center  justify-center w-fit gap-2">
                      {elements.map((element: any) => (
                        <label
                          form="dropzone-file"
                          className="flex relative flex-col items-center justify-center min-w-24 min-h-24  border border-[#3a3f51] border-dashed rounded-lg cursor-pointer bg-gray-50 "
                        >
                          <div className="flex flex-col items-center justify-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Tải lên
                            </p>
                            <img
                              className="w-5 h-5"
                              src="https://vdiarybook.com/assets/icons/default/add_blue.svg"
                              alt=""
                            />
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                          <button
                            className=" w-6 h-6 bg-[#4284f3] text-white rounded flex items-center justify-center absolute right-0 top-0"
                            onClick={() => removeElement(element)}
                          >
                            -
                          </button>
                        </label>
                      ))}
                    </div>
                    <button
                      className="border border-[#3a3f51] border-dashed min-w-24 min-h-24 rounded-md"
                      onClick={addElement}
                    >
                      +
                    </button>
                  </div>
                  <div className=" flex  justify-center pt-4">
                    <button
                      type="submit"
                      className={`py-[6px] px-5 rounded ${
                        buttonActive
                          ? "bg-blue-500 text-white"
                          : "bg-blue-300 text-white"
                      }`}
                      disabled={!buttonActive}
                    >
                      Gửi
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 3 && <div className=""></div>}
      </div>
    </div>
  );
};
export default Contribute;
