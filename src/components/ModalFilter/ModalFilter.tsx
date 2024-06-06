import React, { useState } from "react";
import OffCanvasSidebar from "../Modal/modal";
import VButton from "../core/v-button";
import VDropdown from "../core/v-drop";

const options = [
  {
    id: 1,
    category: "Chủ đề",
    image: "/images/dropdown.svg",
    default: "Chọn Chủ đề",
    key: "topic",
  },
  {
    id: 2,
    category: " Quy mô",
    image: "/images/dropdown.svg",
    default: "Chọn Quy mô",
    key: "scale",
  },
  {
    id: 3,
    category: "Lĩnh vực",
    image: "/images/dropdown.svg",
    default: "Lĩnh vực",
    key: "field",
  },
  {
    id: 1,
    category: "Quyền riêng tư",
    image: "/images/dropdown.svg",
    default: "Chọn Quyền riêng tư",
    key: "privacy",
  },
];

const ModalFilter = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  const dataDefault = {
    topic: null,
    scale: null,
    field: null,
    privacy: null,
  };
  const [data, setData] = useState(dataDefault);
  const onChange = (key: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const getValueDropdown = (key: any) => {
    const value = data[key];
    return value || "";
  };

  return (
    <div>
      <VButton onClick={handleOpenSidebar} className="flex items-center gap-2 ">
        <img className=" pl-2" src="/images/filter.svg" alt="" />
        <p className="text-sm text-[#4284F3] font-medium whitespace-nowrap">
          Bộc lọc
        </p>
      </VButton>
      <OffCanvasSidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar}>
        <div className="p-4   w-full justify-between flex h-full flex-col bottom-0 ">
          <div className=" grid grid-cols-1 gap-4  ">
            {options.map((option, index) => (
              <div key={index} className="">
                <label
                  form="default-input"
                  className="block mb-2 text-sm font-medium text-[#1F1F1F] leading-[16.94px]"
                >
                  {option.category}
                </label>
                <VDropdown
                  className="w-full h-[38px]"
                  options={[
                    {
                      label: "option 1",
                      onClick: () => onChange(option.key, "option 1"),
                    },
                    {
                      label: "option 2",
                      onClick: () => onChange(option.key, "option 2"),
                    },
                    {
                      label: "option 3",
                      onClick: () => onChange(option.key, "option 3"),
                    },
                    {
                      label: "option 4",
                      onClick: () => onChange(option.key, "option 4"),
                    },
                  ]}
                  placeholder={option.default}
                  menuclassName="w-full"
                  buttonclassName="w-full"
                />
              </div>
            ))}
          </div>
          <div>
            <VButton className="flex items-center gap-2 bg-[#4284F3] rounded-2xl justify-center w-full mt-auto ">
              <img className=" pl-2" src="/images/filter.svg" alt="" />
              <p className="text-sm text-white font-medium whitespace-nowrap">
                Áp dụng
              </p>
            </VButton>
          </div>
        </div>
      </OffCanvasSidebar>
    </div>
  );
};

export default ModalFilter;
