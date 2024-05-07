import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = (props: any) => {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  console.log("data :", data);
  const [inputValues, setInputValues] = useState<any>({
    fileInput: null,
    nameList: "",
    parentCategory: "",
    icon: "",
    date: "",
    time: "",
    status: "",
  });
  console.log("inputValues :", inputValues);

  const [isEditMode, setIsEditMode] = useState(false);
  console.log("isEditMode :", isEditMode);
  const [newItem, setNewItem] = useState("");
  console.log("newItem :", newItem);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log("value :", value);
    console.log("name :", name);

    setInputValues((prevState: any) => ({ ...prevState, [name]: value }));
    setSelectedDate(event.target.value);
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    console.log("file :", file);
    setInputValues((prevState: any) => ({
      ...prevState,
      fileInput: URL.createObjectURL(file),
    }));
  };

  const handleAddOrUpdate = (event: any) => {
    event.preventDefault();
    const addData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/getProducts", {
          item: newItem,
        });
        setData([...data, response.data]);
        setNewItem("");
      } catch (error) {
        console.error("Error adding data:", error);
      }
    };
    console.log("addData", addData);

    if (props.data) {
      console.log("isEditMode :", isEditMode);
      const updatedData = data.map((item: any) => {
        if (item._id === props.data._id) {
          return {
            ...data,
            ...item,
            ...inputValues,
          };
        }
        return item;
      });

      setData(updatedData);
      console.log("updatedData :", updatedData);
      setInputValues({
        fileInput: null,
        nameList: "",
        parentCategory: "",
        icon: "",
        date: "",
        time: "",
        status: "",
      });
      setIsEditMode(false);
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
        icon: "",
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
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getProducts");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };
  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-4 rounded-lg">
      <form
        onSubmit={handleAddOrUpdate}
        className="mb-4 grid-cols-2 grid gap-4"
      >
        <div className="flex">
          <input
            type="file"
            name="fileInput"
            onChange={handleFileInputChange}
            className="border-dashed border-2 border-[#1F1F1F] w-full p-2 rounded-lg"
          />

          <img src={inputValues.fileInput} alt="image" className="max-w-20 " />
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
          <option selected>Danh mục cha</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
        </select>

        <input
          type="file"
          name="icon"
          onChange={handleInputChange}
          placeholder="Icon"
          className="p-2 border-dashed border-2 border-[#1F1F1F] rounded-lg"
        />
        <div>
          <div className="flex ">
            <input
              type="date"
              name="date"
              value={inputValues.date}
              onChange={handleInputChange}
              className="border border-[#1F1F1F] rounded w-full px-3 py-2 mr-2"
            />
            <input
              type="time"
              name="time"
              value={inputValues.time}
              onChange={handleInputChange}
              className="border border-[#1F1F1F] rounded px-3 py-2 w-full"
            />
          </div>
        </div>

        <select
          name="status"
          value={inputValues.status}
          onChange={handleInputChange}
          className="p-2 border border-[#1F1F1F] rounded-lg bg-white"
        >
          <option selected>Trạng thái</option>
          <option value="Hiển thị">Hiển thị</option>
          <option value="Ẩn">Ẩn </option>
        </select>

        <button
          type="submit"
          className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          {props.data ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ProductsList;
