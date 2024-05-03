import router, { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const ProductsList = () => {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [inputValues, setInputValues] = useState<any>({
    fileInput: null,
    nameList: "",
    parentCategory: "",
    icon: "",
    dateCreated: "",
    creationHours: "",
    status: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setInputValues((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    setInputValues((prevState: any) => ({
      ...prevState,
      fileInput: URL.createObjectURL(file),
    }));
  };

  const handleAdd = (event: any) => {
    event.preventDefault();

    const newEntry = {
      id: Date.now(),
      ...inputValues,
    };

    setData([...data, newEntry]);
    setInputValues({
      fileInput: null,
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

  const handleEdit = (itemId: any) => {
    const selectedItem = data.find((item: any) => item.id === itemId);

    setInputValues({
      fileInput: null,
      nameList: selectedItem.nameList,
      parentCategory: selectedItem.parentCategory,
      icon: selectedItem.icon,
      dateCreated: selectedItem.dateCreated,
      creationHours: selectedItem.creationHours,
      status: selectedItem.status,
    });

    setIsEditMode(true);
    setSelectedItemId(itemId);
  };
  const handleUpdate = (event: any) => {
    event.preventDefault();
    const updatedData = data.map((item: any) => {
      if (item.id === selectedItemId) {
        return {
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
      icon: "",
      dateCreated: "",
      creationHours: "",
      status: "",
    });
    setIsEditMode(true);
    setSelectedItemId(null);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("productsList");
    console.log("storedData :", storedData);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    console.log("data :", data);
    localStorage.setItem("productsList", JSON.stringify(data));
  }, [data]);

  return (
    <div className="max-w-5xl mx-auto">
      <form onSubmit={handleAdd} className="mb-4 grid-cols-2 grid gap-4">
        <input
          type="file"
          name="fileInput"
          onChange={handleFileInputChange}
          className="p-1 border border-gray-300 bg-white rounded-lg"
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
          className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default ProductsList;
