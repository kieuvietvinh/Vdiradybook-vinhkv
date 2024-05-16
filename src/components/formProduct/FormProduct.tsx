import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const FormProducts = (props: any) => {
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
  console.log("select :", select);

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

  // const [elements, setElements] = useState<any[]>([]);
  // const [count, setCount] = useState(1);

  // const addElement = () => {
  //   setElements([...elements, count]);
  //   setCount(count + 1);
  // };
  // const removeElement = (index: any) => {
  //   setElements(elements.filter((element) => element !== index));
  // };
  // const handleImageUpload = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const newElements = [...elements];
  //       newElements[index] = reader.result;
  //       setElements(newElements);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState("");

  const handleTogglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleDateChange1 = (event: any) => {
    setSelectedDate(event.target.value);
  };

  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any[]>([]);
  console.log("data :", data);
  const [inputValues, setInputValues] = useState<any>({
    fileInput: null,
    nameList: "",
    parentCategory: "",
    icon: null,
    productcode: "",
    time: "",
    status: "",
  });

  console.log("inputValues :", inputValues);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log("name :", name);
    console.log("value :", value);
    setInputValues((prevState: any) => ({ ...prevState, [name]: value }));
    setSelectedDate(event.target.value);
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    setInputValues((prevState: any) => ({
      ...prevState,
      fileInput: URL.createObjectURL(file),
    }));
  };
  //
  const handleFileInputChange1 = (event: any) => {
    const file = event.target.files[0];
    setInputValues((prevState: any) => ({
      ...prevState,
      icon: URL.createObjectURL(file),
    }));
  };

  const handleAddOrUpdate = async (event: any) => {
    event.preventDefault();
    const isAdding = !id;
    console.log("isAdding :", isAdding);

    try {
      let response: any;
      if (isAdding) {
        response = await axios.post(
          "http://localhost:8000/products",
          inputValues
        );
      } else {
        response = await axios.put(
          `http://localhost:8000/products/${id}`,
          inputValues
        );
      }
      const newItemData = { id: response.data.id, item: newItem };
      if (isAdding) {
        setData([...data, newItemData]);
      } else {
        const updatedData = data.map((item) =>
          item.id === response.data.id ? newItemData : item
        );
        setData(updatedData);
      }

      setNewItem("");
    } catch (error) {
      if (isAdding) {
        console.error("Error adding data:", error);
      } else {
        console.error("Error updating data:", error);
      }
    }
    //
    if (props.data) {
      console.log("isEditMode :", isEditMode);
      const updatedData = data.map((item: any) => {
        if (item.id === props.data.id) {
          return {
            ...data,
            ...item,
            ...inputValues,
          };
        }
        return item;
      });

      setData(updatedData);
      setInputValues({
        fileInput: null,
        nameList: "",
        parentCategory: "",
        icon: null,
        productcode: "",

        time: "",
        status: "",
      });
      setIsEditMode(true);
    } else {
      const newEntry = {
        id: Date.now(),
        ...inputValues,
      };

      setData([...data, newEntry]);
      setInputValues((prevState: any) => ({
        ...prevState,
        fileInput: null,
        nameList: "",
        parentCategory: "",
        icon: null,
        productcode: "",

        time: "",
        status: "",
      }));
    }
    router.push({
      pathname: "/productListed",
    });
  };

  useEffect(() => {
    setInputValues({
      ...inputValues,
      nameList: props?.product?.nameList,
      parentCategory: props?.product?.parentCategory,
      productcode: props?.product?.productcode,
      time: props?.product?.time,
      status: props?.product?.status,
      fileInput: props?.product?.fileInput,
      icon: props?.product?.icon,
    });
  }, [props.product]);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };
  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  const [element1, setElement1] = useState<string | null>(null);
  const handleImageUpload1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileInputChange(event);
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setElement1(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  //
  const [element, setElement] = useState<string | null>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileInputChange1(event);
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setElement(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="font-inter max-w-[1024px] mx-auto w-full  bg-white rounded-lg p-4">
      <form onSubmit={handleAddOrUpdate}>
        <div className="border-b">
          <h2 className="text-[#4284F3] font-bold text-[22px] text-center leading-7 mb-5">
            {props.product ? "Thêm mới chi nhánh" : "Thêm sản phẩm"}
          </h2>
        </div>

        <div>
          <div>
            <p className="text-[#1F1F1F] font-bold text-sm leading-[22px] py-3">
              Danh mục sản phẩm
            </p>
          </div>
          <div>
            <div className="grid mb-6 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] ">
                  Ảnh đại diện
                </label>
                <div className=" flex gap-2 flex-wrap">
                  <div className="items-center justify-center w-fit gap-2 contents">
                    {(element1 || inputValues.fileInput) && (
                      <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
                        <img
                          className="w-36 h-36 object-cover"
                          src={element1 || inputValues.fileInput}
                          alt=""
                        />
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleImageUpload1}
                        />
                        <button
                          type="button"
                          className="w-4 h-4 bg-[#D9D9D9] rounded-full flex items-center justify-center absolute right-1 top-1 text-sm text-stone-700"
                          onClick={() => setElement1(null)}
                        >
                          x
                        </button>
                      </label>
                    )}
                    {!element1 && (
                      <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-md text-[#1F1F1F] ">Tải lên</p>
                        </div>
                        <input
                          name="fileInput"
                          type="file"
                          className="hidden"
                          onChange={handleImageUpload1}
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] ">
                  Biểu tượng
                </label>
                <div className=" flex gap-2 flex-wrap">
                  <div className="items-center justify-center w-fit gap-2 contents">
                    {(element || inputValues.icon) && (
                      <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
                        <img
                          className="w-36 h-36 object-cover"
                          src={element || inputValues.icon}
                          alt=""
                        />
                        <input
                          name="icon"
                          type="file"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                        <button
                          type="button"
                          className="w-4 h-4 bg-[#D9D9D9] rounded-full flex items-center justify-center absolute right-1 top-1 text-sm text-stone-700"
                          onClick={() => setElement(null)}
                        >
                          x
                        </button>
                      </label>
                    )}
                    {!element && (
                      <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
                        <div className="flex flex-col items-center justify-center">
                          <p className="ext-md text-[#1F1F1F]">Tải lên</p>
                        </div>
                        <input
                          name="icon"
                          type="file"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px]">
                  Tên danh mục
                </label>
                <input
                  name="nameList"
                  type="text"
                  value={inputValues.nameList}
                  onChange={handleInputChange}
                  className="outline-none bg-white border border-[#CAD0D7] text-[#8E8E93] text-xs rounded-lg  block w-full p-2.5 font-normal"
                  placeholder="Nhập Tên danh mục"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] ">
                  Danh mục sản phẩm
                </label>
                <select
                  name="parentCategory"
                  value={inputValues.parentCategory}
                  onChange={handleInputChange}
                  className="outline-none bg-white border border-[#CAD0D7] text-[#8E8E93] text-xs rounded-lg  block w-full p-2.5 font-normal"
                >
                  <option value="Danh mục sản phẩm">Danh mục sản phẩm</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px] ">
                Mã sản phẩm
              </label>

              <input
                type="text"
                name="productcode"
                value={inputValues.productcode}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="pt-2">
              <div className="mb-6">
                <label
                  form="message"
                  className="block mb-2 text-sm font-normal text-[#1F1F1F] leading-[22px]"
                >
                  Chi tiết sản phẩm
                </label>
                <textarea
                  name="status"
                  value={inputValues.status}
                  onChange={handleInputChange}
                  className="block p-2 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Nhập mô tả..."
                ></textarea>
              </div>
            </div>
            {props.product && (
              <div>
                <p className="text-[#1F1F1F] font-bold text-sm leading-[22px] pb-3">
                  Địa chỉ
                </p>
              </div>
            )}
            {props.product && (
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
            )}
            {props.product && (
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
                />
              </div>
            )}
          </div>
        </div>
        {props.product && (
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
                  onChange={handleDateChange1}
                  value={selectedDate}
                  type="datetime-local"
                  className="outline-none bg-white border border-[#CAD0D7] text-[#8E8E93] text-xs rounded-lg  block w-full p-2.5 font-normal"
                  placeholder="Nhập tên "
                  required
                />
              )}
            </div>
          </div>
        )}
        {props.product && (
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
              />
            </div>
          </div>
        )}
        {props.product && (
          <div className="py-2">
            <p className="font-normal text-sm text-[#1F1F1F]">Mô tả</p>
          </div>
        )}
        <div className="flex gap-2  bg-white w-full py-4 ">
          <button className=" bg-[#0000000D] rounded-[18px] text-[#0F0F0F] px-4 flex items-center gap-2 py-2 font-normal text-sm">
            <img src="/image/huy.png" alt="" />
            <p>Hủy</p>
          </button>
          <button className="bg-[#4284F3] text-white rounded-[18px] px-4 flex items-center gap-2 py-2 font-normal text-sm">
            {props.product ? "Cập nhật" : "Lưu"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProducts;
