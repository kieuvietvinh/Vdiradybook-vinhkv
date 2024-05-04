import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ProductsList = (props: any) => {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [inputValues, setInputValues] = useState<any>({
    fileInput: null,
    nameList: props.product?.nameList || "",
    parentCategory: "",
    icon: "",
    dateCreated: "",
    creationHours: "",
    status: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  console.log("isEditMode :", isEditMode);

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

  const handleAddOrUpdate = (event: any) => {
    event.preventDefault();

    if (props.product) {
      console.log("isEditMode :", isEditMode);
      const updatedData = data.map((item: any) => {
        if (item.id === props.product.id) {
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
        dateCreated: "",
        creationHours: "",
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
        dateCreated: "",
        creationHours: "",
        status: "",
      }));
    }

    router.push({
      pathname: "/listed",
    });
  };

  useEffect(() => {
    const storedData = localStorage.getItem("productsList");
    console.log("storedData :", storedData);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
    setInputValues({
      fileInput: props.product?.fileInput || null,
      nameList: props.product?.nameList || "",
      parentCategory: props.product?.parentCategory || "",
      icon: props.product?.icon || "",
      dateCreated: props.product?.dateCreated || "",
      creationHours: props.product?.creationHours || "",
      status: props.product?.status || "",
    });
  }, [props]);

  useEffect(() => {
    if (data.length === 0) return;
    localStorage.setItem("productsList", JSON.stringify(data));
  }, [data]);

  return (
    <div className="max-w-5xl mx-auto bg-white p-4 rounded-lg">
      <form
        onSubmit={handleAddOrUpdate}
        className="mb-4 grid-cols-2 grid gap-4"
      >
        <input
          type="file"
          name="fileInput"
          onChange={handleFileInputChange}
          className="p-1 border border-[#1F1F1F] rounded-lg"
        />
        <input
          type="text"
          name="nameList"
          value={inputValues.nameList}
          onChange={handleInputChange}
          placeholder="Tên danh mục"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <input
          type="text"
          name="parentCategory"
          value={inputValues.parentCategory}
          onChange={handleInputChange}
          placeholder="Danh mục cha"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <input
          type="text"
          name="icon"
          value={inputValues.icon}
          onChange={handleInputChange}
          placeholder="Icon"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <input
          type="text"
          name="dateCreated"
          value={inputValues.dateCreated}
          onChange={handleInputChange}
          placeholder="Ngày tạo"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <input
          type="text  "
          name="creationHours"
          value={inputValues.creationHours}
          onChange={handleInputChange}
          placeholder="Giờ tạo"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <input
          type="text"
          name="status"
          value={inputValues.status}
          onChange={handleInputChange}
          placeholder="Trạng thái"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />

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
