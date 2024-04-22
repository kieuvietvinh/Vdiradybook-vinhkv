import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //select

  const [elements1, setElements1] = useState<any>([]);
  const [elements2, setElements2] = useState<any>([]);

  const addElement1 = () => {
    setElements1([...elements1, "Element 1 added"]);
  };
  console.log("elements1", elements1);

  const addElement2 = () => {
    setElements2([...elements2, "Element 2 added"]);
  };

  const removeElement1 = (index: any) => {
    const newElements1 = [...elements1];
    newElements1.splice(index, 1);
    setElements1(newElements1);
  };

  const removeElement2 = (index: any) => {
    const newElements2 = [...elements2];
    newElements2.splice(index, 1);
    setElements2(newElements2);
  };
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [showOptions3, setShowOptions3] = useState(false);

  const options1 = ["Máy tính", "Laptop", "Máy tính bảng", "Điện thoại"];
  const options2 = ["Windows", "MAC", "Androis", "IOS"];
  const options3 = [
    "Google Chorme",
    "Firefox",
    "Cốc cốc",
    "Microsoft Edge",
    "Safari",
  ];

  const handleSelect1 = (option: any) => {
    setSelectedOption1(option);
    setShowOptions1(false);
  };

  const handleSelect2 = (option: any) => {
    setSelectedOption2(option);
    setShowOptions2(false);
  };

  const handleSelect3 = (option: any) => {
    setSelectedOption3(option);
    setShowOptions3(false);
  };

  return (
    <div className=" mx-auto w-full max-w-[1024px]">
      <div className="bg-white rounded-lg w-full h-auto lg:p-4 p-[14px]  border">
        <div className="flex justify-center">
          <h1 className="lg:text-[1.7rem] text-[1.27rem] text-[#4284f3] font-normal  ">
            Chúng tôi có thể giúp gì cho bạn?
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 relative  mt-2">
          <div className="lg:w-2/3 w-full">
            <form className="max-w-sm ">
              <div className="relative ">
                <input
                  type="search"
                  className="outline-none block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
                  required
                />
                <div className="bg-white w-14 h-5 absolute top-[-9px] left-2"></div>
                <div className="absolute top-[-9px] text-[#8d8a8a] text-xs left-3 ">
                  Tim kiếm
                </div>
                <button
                  type="submit"
                  className=" text-blue-600 absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 absolute "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="absolute right-0 bottom-0">
            <button className="bg-[#4284f3] rounded-md w-auto h-auto px-[15px] py-[5px]">
              <p className="text-white text-sm p-1">Đặt câu hỏi </p>
            </button>
          </div>
        </div>
      </div>
      <div className="contri flex border-b border-gray-200 mt-4 overflow-x-scroll ">
        {tabs.map((tab, a) => (
          <button
            key={a}
            className={` border-b-4  border-transparent whitespace-nowrap hover:bg-gray-100 hover:rounded  text-[#777d74] text-xs px-4 py-2 ${
              activeTab === tab.id
                ? "inline-block p-4  !border-blue-600 border-b-[3px]  rounded-t-lg  text-blue-600  "
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-2 p-2">
        {activeTab === 1 && (
          <div className="">
            <div className="relative  max-w-5xl w-full duration-1000 border  drop-shadow-md">
              <div className="flex justify-between items-center p-[15px] bg-white rounded-tl-lg rounded-tr-lg">
                <button
                  type="button"
                  className="inline-flex  w-full rounded-t-sm text-md font-medium "
                  onClick={toggleDropdown}
                >
                  {selectedOption
                    ? selectedOption
                    : "Mời bạn đóng góp ý tưởng phát triển sản phẩm và phát hiện các lỗi khi sử dụng cùng chúng tôi !"}
                </button>
                <div>
                  <img
                    className=""
                    src="https://vdiarybook.com/assets/icons/default/dropdown.svg"
                    alt=""
                  />
                </div>
              </div>
              {isOpen && (
                <div className="p-[14px]  w-full rounded-b-sm shadow-lg h-auto bg-white ring-1  ring-opacity-5 transform scale-100 delay-1000 duration-1000 rounded-bl-lg rounded-br-lg">
                  <div className="flex justify-center bg-[#ededed] px-[0.6rem] py-[0.32rem] rounded-[0.25rem]">
                    <h1 className="text-[#3f414d] font-semibold lg:text-sm text-[]  leading-6">
                      Sản phẩm đang trong giai đoạn nghiên cứu phát triển và
                      trải nghiệm.Trong quá trình trải nghiệm nếu bạn phát hiện
                      lỗi hoặc có ý tưởng các chức năng cho sản phẩm hãy gởi
                      thông tin của bạn đến đội ngũ chúng tôi để hoàn thiện và
                      cung cấp các chức năng tốt hơn! Trân trọng cảm ơn!
                    </h1>
                  </div>
                  <div className="pt-5">
                    <div className="relative ">
                      <textarea
                        id="message"
                        className="block outline-none px-2.5 py-[0.33rem] w-full text-sm text-gray-900 bg-white rounded-md border border-gray-300  "
                      ></textarea>
                      <div className="bg-white w-auto rounded-sm h-auto px-1 absolute top-[-15px] left-2 flex justify-center items-center gap-1">
                        <div className=" text-[#8d8a8a] lg:text-sm text-[0.7rem]  fex">
                          Mô tả lỗi bạn phát hiện
                        </div>
                        <div className="text-red-400">*</div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="pt-5">
                      <div className="flex mb-2 gap-1">
                        <div className="lg:text-sm text-[0.77rem] font-normal text-[#2a1d33]">
                          Loại thiết bị đang gặp lỗi
                        </div>
                        <div className="text-red-400 text-sm">*</div>
                      </div>
                      <div
                        className="w-full bg-white border border-gray-400 px-4 py-2 rounded text-[0.875rem] font-normal text-[#555770] flex justify-between items-center"
                        onClick={() => setShowOptions1(!showOptions1)}
                      >
                        {selectedOption1 || "Chọn loại"}
                        <div>
                          <img
                            className="h-5 w-5"
                            src="https://vdiarybook.com/assets/icons/default/dropdown.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {showOptions1 && (
                        <div className="w-full bg-white border border-gray-400 rounded shadow-md text-[0.875rem] font-normal text-[#555770] mt-2 ">
                          {options1.map((option, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                              onClick={() => handleSelect1(option)}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-5">
                      <div className="flex mb-2 gap-1">
                        <div className="lg:text-sm text-[0.77rem] font-normal text-[#2a1d33]">
                          Hệ điều hành hiện tại bạn đang sử dụng sảy ra lỗi
                        </div>
                        <div className="text-red-400 text-sm">*</div>
                      </div>
                      <div
                        className="w-full bg-white border border-gray-400 px-4 py-2 rounded text-[0.875rem] font-normal text-[#555770] flex justify-between items-center"
                        onClick={() => setShowOptions2(!showOptions2)}
                      >
                        {selectedOption2 || "Chọn hệ điều hành"}
                        <div>
                          <img
                            className="h-5 w-5"
                            src="https://vdiarybook.com/assets/icons/default/dropdown.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {showOptions2 && (
                        <div className="w-full bg-white border border-gray-400 rounded shadow-md text-[0.875rem] font-normal text-[#555770] mt-2">
                          {options2.map((option, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                              onClick={() => handleSelect2(option)}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-5">
                      <div className="flex mb-2 gap-1">
                        <div className="lg:text-sm text-[0.77rem] font-normal text-[#2a1d33]">
                          Trình duyệt bạn đang truy cập
                        </div>
                        <div className="text-red-400 text-sm">*</div>
                      </div>
                      <div
                        className="w-full bg-white border border-gray-400 px-4 py-2 rounded text-[0.875rem] font-normal text-[#555770] flex justify-between items-center"
                        onClick={() => setShowOptions3(!showOptions3)}
                      >
                        {selectedOption3 || "Chọn trình duyệt"}
                        <div>
                          <img
                            className="h-5 w-5"
                            src="https://vdiarybook.com/assets/icons/default/dropdown.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {showOptions3 && (
                        <div className="w-full bg-white border border-gray-400 rounded shadow-md text-[0.875rem] font-normal text-[#555770] mt-2">
                          {options3.map((option, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                              onClick={() => handleSelect3(option)}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 lg:text-sm text-[0.77rem]  text-[#555770]">
                    Ảnh,Video mô tả lỗi hiện tại giúp chúng tôi khắc phục sớm
                    nhất.
                  </div>
                  <div className=" pt-4 flex gap-2 flex-wrap ">
                    <div className="flex items-center  justify-center w-fit gap-2">
                      {elements1?.map((element: any, index: number) => (
                        <label
                          key={index}
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
                            onClick={() => removeElement1(index)}
                          >
                            -
                          </button>
                        </label>
                      ))}
                    </div>
                    <button
                      className="border border-[#3a3f51] border-dashed min-w-24 min-h-24 rounded-md"
                      onClick={addElement1}
                    >
                      +
                    </button>
                  </div>
                  <div className="pt-5">
                    <div className="relative ">
                      <textarea
                        id="message"
                        className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-white rounded-md border border-gray-300  "
                      ></textarea>
                      <div className="bg-white w-auto rounded-sm h-auto p-1 absolute top-[-15px] left-2 flex justify-center items-center">
                        <div className=" text-[#8d8a8a] lg:text-sm text-[0.7rem]  mx-[0.5rem]">
                          Bạn có ý tưởng về chức năng gì muốn chúng tôi tích hợp
                          vào sản phẩm ?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 lg:text-sm text-[0.77rem]  text-[#555770]">
                    Ảnh mô tả ý tưởng của bạn về chức năng (nếu có)
                  </div>
                  <div className=" pt-4 flex gap-2 flex-wrap ">
                    <div className="flex items-center  justify-center w-fit gap-2">
                      {elements2?.map((element: any, index: number) => (
                        <label
                          key={index}
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
                            onClick={() => removeElement2(index)}
                          >
                            -
                          </button>
                        </label>
                      ))}
                    </div>
                    <button
                      className="border border-[#3a3f51] border-dashed min-w-24 min-h-24 rounded-md"
                      onClick={addElement2}
                    >
                      +
                    </button>
                  </div>
                  <div className=" flex  justify-center pt-4">
                    <button className="py-[6px] px-5 rounded bg-[#4284f3] text-white opacity-65 ">
                      Gửi
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 2 && <div></div>}
        {activeTab === 3 && <div className=""></div>}
      </div>
    </div>
  );
};
export default Contribute;
