import router, { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const ProductsList = () => {
  const router = useRouter();

  const [data, setData] = useState<any[]>([]);
  const [inputValues, setInputValues] = useState({
    image: "",
    nameList: "",
    parentCategory: "",
    icon: "",
    dateCreated: "",
    creationHours: "",
    status: "",
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
      image: "",
      nameList: "",
      parentCategory: "",
      icon: "",
      dateCreated: "",
      creationHours: "",
      status: "",
    });
    router.push({
      pathname: "/listed",
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
      image: "",
      nameList: "",
      parentCategory: "",
      icon: "",
      dateCreated: "",
      creationHours: "",
      status: "",
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("productsList");
    if (storedData) {
      console.log("storedData :", storedData);
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    localStorage.setItem("productsList", JSON.stringify(data));
  }, [data]);

  return (
    <div className="max-w-5xl mx-auto">
      <form
        onSubmit={isEditing ? handleUpdate : handleAdd}
        className="mb-4 grid-cols-2 grid gap-4"
      >
        <input
          type="file"
          name="image"
          value={inputValues.image}
          onChange={handleInputChange}
          placeholder="ảnh danh mục"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="nameList"
          value={inputValues.nameList}
          onChange={handleInputChange}
          placeholder="Tên danh mục"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="parentCategory"
          value={inputValues.parentCategory}
          onChange={handleInputChange}
          placeholder="Danh mục cha"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="icon"
          value={inputValues.icon}
          onChange={handleInputChange}
          placeholder="Icon"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="dateCreated"
          value={inputValues.dateCreated}
          onChange={handleInputChange}
          placeholder="Ngày tạo"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text  "
          name="creationHours"
          value={inputValues.creationHours}
          onChange={handleInputChange}
          placeholder="Giờ tạo"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="status"
          value={inputValues.status}
          onChange={handleInputChange}
          placeholder="Trạng thái"
          className="p-2 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="px-4 py-2 mt-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ProductsList;
