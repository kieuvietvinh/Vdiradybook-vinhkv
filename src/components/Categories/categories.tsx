import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Categories = (props: any) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("router.query :", router.query);
  const [data, setData] = useState<any[]>([]);
  const [inputValues, setInputValues] = useState<any>({
    productsName: "",
    idCategory: "",
    productCode: "",
    priceField: "",
    listedPrice: "",
    image: "",
    describe: "",
    dateCreated: "",
  });
  console.log("inputValues :", inputValues);

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
      image: URL.createObjectURL(file),
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
          "http://localhost:8000/categories",
          inputValues
        );
      } else {
        response = await axios.put(
          `http://localhost:8000/categories/${id}`,
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
        productsName: "",
        idCategory: "",
        productCode: "",
        priceField: "",
        listedPrice: "",
        image: "",
        describe: "",
        dateCreated: "",
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
        productsName: "",
        idCategory: "",
        productCode: "",
        priceField: "",
        listedPrice: "",
        image: "",
        describe: "",
        dateCreated: "",
      }));
    }
    router.push({
      pathname: "/categorieListed",
    });
  };
  useEffect(() => {
    setInputValues({
      ...inputValues,
      productsName: props?.categorie?.productsName,
      idCategory: props?.categorie?.idCategory,
      productCode: props?.categorie?.productCode,
      priceField: props?.categorie?.priceField,
      listedPrice: props?.categorie?.listedPrice,
      image: props?.categorie?.image,
      describe: props?.categorie?.describe,
      dateCreated: props?.categorie?.dateCreated,
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

  const [element, setElement] = useState<string | null>(null);
  const handleImageUpload1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileInputChange(event);
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
          <p>image</p>
          <div className=" flex gap-2 flex-wrap">
            <div className="items-center justify-center w-fit gap-2 contents">
              {(element || inputValues.image) && (
                <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <img
                    className="w-36 h-36 object-cover"
                    src={element || inputValues.image}
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
                    onClick={() => setElement}
                  >
                    x
                  </button>
                </label>
              )}
              {!element && (
                <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border-2 border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-md text-[#1F1F1F] ">Tải lên</p>
                  </div>
                  <input
                    name="image"
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload1}
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        <input
          type="text"
          name="nameList"
          value={inputValues.productsName}
          onChange={handleInputChange}
          placeholder="Tên sản phẩm"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <input
          type="text"
          name="nameList"
          value={inputValues.idCategory}
          onChange={handleInputChange}
          placeholder="ID danh mục"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <input
          type="text"
          name="nameList"
          value={inputValues.idCategory}
          onChange={handleInputChange}
          placeholder="mã sản phẩm"
          className="p-2 border border-[#1F1F1F] rounded-lg"
        />
        <input
          name="parentCategory"
          value={inputValues.priceField}
          onChange={handleInputChange}
          placeholder="Giá thị trường"
          className="p-2 border border-[#1F1F1F] rounded-lg bg-white"
        ></input>
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
        <input
          name="status"
          value={inputValues.listedPrice}
          onChange={handleInputChange}
          placeholder="Mô tả"
          className="p-2 border border-[#1F1F1F] rounded-lg bg-white"
        ></input>
        <input
          name="status"
          value={inputValues.describe}
          onChange={handleInputChange}
          placeholder="Mô tả"
          className="p-2 border border-[#1F1F1F] rounded-lg bg-white"
        ></input>
        <button
          type="submit"
          className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          {props.categorie ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Categories;
