import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = (props: any) => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any[]>([]);
  const [inputValues, setInputValues] = useState<any>({
    fileInput: null,
    nameList: "",
    parentCategory: "",
    icon: null,
    date: "",
    time: "",
    status: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
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
    console.log("isEditMode :", isEditMode);
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
        date: "",
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
        date: "",
        time: "",
        status: "",
      }));
    }
    router.push({
      pathname: "/listed",
    });
  };

  useEffect(() => {
    setInputValues({
      ...inputValues,
      nameList: props?.product?.nameList,
      parentCategory: props?.product?.parentCategory,
      date: props?.product?.date,
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
    <div className="max-w-5xl mx-auto bg-white p-4 rounded-lg">
      <form
        onSubmit={handleAddOrUpdate}
        className="mb-4 grid-cols-2 grid gap-4"
      >
        <div>
          <p>Ảnh niêm yết , danh mục</p>
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
                <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border-2 border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
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
          <p>Icon</p>
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
                <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border-2 border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
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
        <input
          type="text"
          name="nameList"
          value={inputValues.nameList}
          onChange={handleInputChange}
          placeholder="Tên danh mục"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <select
          name="parentCategory"
          value={inputValues.parentCategory}
          onChange={handleInputChange}
          className="p-2 border border-[#1F1F1F] rounded-lg bg-white"
        >
          <option value="Danh mục sản phẩm">Danh mục sản phẩm</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
        </select>
        <div>
          <div className="flex ">
            <input
              type="date"
              name="date"
              value={inputValues.date}
              onChange={handleInputChange}
              className="border border-[#1F1F1F] rounded-lg w-full px-3 py-2 mr-2"
            />
            <input
              type="time"
              name="time"
              value={inputValues.time}
              onChange={handleInputChange}
              className="border border-[#1F1F1F] rounded-lg px-3 py-2 w-full"
            />
          </div>
        </div>
        <select
          name="status"
          value={inputValues.status}
          onChange={handleInputChange}
          className="p-2 border border-[#1F1F1F] rounded-lg bg-white"
        >
          <option value="Trạng thái">Trạng thái</option>
          <option value="Hiển thị">Hiển thị</option>
          <option value="Ẩn">Ẩn </option>
        </select>
        <button
          type="submit"
          className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          {props.product ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ProductsList;
