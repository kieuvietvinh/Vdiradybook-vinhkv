import React, { useState, useEffect } from "react";

const NewBranch = () => {
  const [location, setLocation] = useState<any>({
    country: [],
    province: [],
    district: [],
    ward: [],
  });

  const [select, setSelect] = useState<any>({
    country: "",
    province: "",
    district: "",
    ward: "",
  });

  useEffect(() => {
    fetch("https://api.vdiarybook.net/api/locations/getAll").then(
      async (data: any) => {
        const array = await data.json();
        const country = array.data.filter((i: any) => i.type === "country");
        const province = array.data.filter((i: any) => i.type === "province");
        const district = array.data.filter((i: any) => i.type === "district");
        const ward = array.data.filter((i: any) => i.type === "ward");

        setLocation({
          country,
          province,
          district,
          ward,
        });
      }
    );
  }, []);

  const [elements, setElements] = useState<any[]>([]);
  const [count, setCount] = useState(1);

  const addElement = () => {
    setElements([...elements, count]);
    setCount(count + 1);
  };
  const removeElement = (index: any) => {
    setElements(elements.filter((element) => element !== index));
  };
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleTogglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="font-inter max-w-[1024px] mx-auto w-full  bg-white rounded-lg p-4">
      <div className="border-b">
        <h2 className="text-[#4284F3] font-bold text-[22px] text-center leading-7 mb-5">
          Thêm mới chi nhánh
        </h2>
      </div>
      <div className="border-b pb-3">
        <div className="pt-3">
          <p className="font-bold text-sm text-[#1F1F1F] leading-[22px]">
            Ảnh đại diện
          </p>
          <div>
            <div className=" pt-5 flex gap-2 flex-wrap ">
              <div className=" items-center  justify-center w-fit gap-2 contents">
                {elements.map((element) => (
                  <label
                    key={element.id}
                    className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36  border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50 "
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
                    <input id="dropzone-file" type="file" className="hidden" />
                    <button
                      className=" w-6 h-6 bg-[#D9D9D9]  rounded-full flex items-center justify-center absolute right-2 top-2 text-sm text-stone-700"
                      onClick={() => removeElement(element)}
                    >
                      x
                    </button>
                  </label>
                ))}
              </div>
              <button
                className="border border-[#4284f3] border-dashed min-w-36 min-h-36 rounded-[8px] text-[#4284f3] text-2xl"
                onClick={addElement}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[#1F1F1F] font-bold text-sm leading-[22px] py-3">
            Thông tin liên hiện
          </p>
        </div>
        <div>
          <form>
            <div className="grid mb-6 md:grid-cols-2 gap-2">
              <div>
                <label
                  form="branch_name"
                  className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] "
                >
                  Tên chi nhánh
                </label>
                <input
                  type="text"
                  className="outline-none bg-white border border-[#CAD0D7] text-[#8E8E93] text-xs rounded-lg  block w-full p-2.5 font-normal"
                  placeholder="Nhập tên "
                  required
                />
              </div>
              <div>
                <label
                  form="phone"
                  className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px]"
                >
                  Số điện thoại
                </label>
                <input
                  type="phone"
                  className="outline-none bg-white border border-[#CAD0D7] text-[#8E8E93] text-xs rounded-lg  block w-full p-2.5 font-normal"
                  placeholder="Nhập số điện thoại"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            <div>
              <p className="text-[#1F1F1F] font-bold text-sm leading-[22px] pb-3">
                Địa chỉ
              </p>
            </div>
            <div className="grid gap-2 mb-6 md:grid-cols-2">
              <div>
                <label
                  form="company"
                  className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] "
                >
                  Quốc gia
                </label>
                <select
                  value={select.country}
                  onChange={(e) =>
                    setSelect((state: any) => ({
                      ...state,
                      country: e.target.value,
                    }))
                  }
                  className="p-2 border border-[#CAD0D7] text-[#1F1F1F] rounded-md bg-white w-full outline-none"
                >
                  {location.country?.map((item: any) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  form="phone"
                  className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] "
                >
                  Tỉnh/Thành phố
                </label>
                <select
                  value={select.province}
                  onChange={(e) =>
                    setSelect((state: any) => ({
                      ...state,
                      province: e.target.value,
                    }))
                  }
                  className="p-2 border border-[#CAD0D7] text-[#1F1F1F] rounded-md bg-white w-full outline-none"
                >
                  {location.province
                    .filter((item: any) => item.parent === select.country)
                    .map((item: any) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label
                  form="last_name"
                  className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] "
                >
                  Quận/Huyện
                </label>
                <select
                  value={select.district}
                  onChange={(e) =>
                    setSelect((state: any) => ({
                      ...state,
                      district: e.target.value,
                    }))
                  }
                  className="p-2 border border-[#CAD0D7] text-[#1F1F1F] rounded-md bg-white w-full outline-none"
                >
                  {location.district
                    .filter((item: any) => item.parent === select.province)
                    .map((item: any) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label
                  form="visitors"
                  className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] "
                >
                  Phường/Xã
                </label>
                <select
                  value={select.ward}
                  onChange={(e) =>
                    setSelect((state: any) => ({
                      ...state,
                      ward: e.target.value,
                    }))
                  }
                  className="p-2 border border-[#CAD0D7] text-[#1F1F1F] rounded-md bg-white w-full outline-none"
                >
                  {location.ward
                    .filter((item: any) => item.parent === select.district)
                    .map((item: any) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label
                form="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Địa chỉ chi tiết
              </label>
              <input
                type="Nhập địa chỉ"
                className="outline-none bg-white border border-[#CAD0D7] text-[#8E8E93] text-xs rounded-lg  block w-full p-2.5 font-normal"
                placeholder="Nhập địa chỉ"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        <p className="font-bold text-sm text-[#1F1F1F] leading-[22px]">
          Chọn trên bản đồ
        </p>
        <div>
          <img
            className="w-full h-60"
            src="https://global-uploads.webflow.com/60af8c708c6f35480d067652/62298b485510cbced7e6ef23_screenshot_1646889769.png"
            alt=""
          />
        </div>
        <div className="flex pt-3 gap-2 justify-between items-center flex-wrap">
          <div className="flex gap-2">
            <p className="text-sm font-normal text-[#1F1F1F] leading-[22px]">
              Thời gian làm việc
            </p>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <button
            onClick={handleTogglePicker}
            className="flex bg-[#0000000D] rounded-2xl  items-center p-1"
          >
            <p className="text-2xl">+</p>
            <p className="pl-2 text-sm font-normal text-[#1F1F1F] leading-[22px]">
              Thêm thời gian làm việc
            </p>
          </button>
        </div>
        <div className="py-4">
          {showPicker && (
            <input
              onChange={handleDateChange}
              value={selectedDate}
              type="datetime-local"
              className="outline-none bg-white border border-[#CAD0D7] text-[#8E8E93] text-xs rounded-lg  block w-full p-2.5 font-normal"
              placeholder="Nhập tên "
              required
            />
          )}
        </div>
      </div>
      <div>
        <div>
          <p className="text-[#1F1F1F] font-bold text-sm leading-[22px] pb-3">
            Thông tin khác
          </p>
        </div>
        <div className="mb-6">
          <label
            form="password"
            className="block mb-2 text-sm font-normal text-[#1F1F1F] "
          >
            Webiste
          </label>
          <input
            type="Nhập địa chỉ"
            className="outline-none bg-white border border-[#CAD0D7] text-[#8E8E93] text-xs rounded-lg  block w-full p-2.5 font-normal"
            placeholder="Nhập địa chỉ trang web"
            required
          />
        </div>
      </div>
      <div className="py-2">
        <p className="font-normal text-sm text-[#1F1F1F]">Mô tả</p>
      </div>
      <div className="flex gap-2 float-right p-4">
        <button className="bg-[#0000000D] rounded-[18px] text-[#0F0F0F] px-4 flex items-center gap-2 py-2 font-normal text-sm">
          <img src="/image/huy.png" alt="" />
          <p>Hủy</p>
        </button>
        <button className="bg-[#4284F3] text-white rounded-[18px] px-4 flex items-center gap-2 py-2 font-normal text-sm">
          <img src="/image/save.png" alt="" />
          <p> Lưu</p>
        </button>
      </div>
    </div>
  );
};

export default NewBranch;
