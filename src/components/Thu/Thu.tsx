import React, { useState } from "react";

const Thu = () => {
  const [data, setData] = useState<any>([]);
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    fileInput: null,
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    setInputValues((prevState) => ({ ...prevState, fileInput: file }));
  };

  const handleAdd = (event: any) => {
    event.preventDefault();

    const newEntry = {
      id: Date.now(),
      ...inputValues,
    };

    setData([...data, newEntry]);
    setInputValues({
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      fileInput: null,
    });
  };

  const handleEdit = (itemId: any) => {
    const selectedItem = data.find((item: any) => item.id === itemId);

    setInputValues({
      input1: selectedItem.input1,
      input2: selectedItem.input2,
      input3: selectedItem.input3,
      input4: selectedItem.input4,
      input5: selectedItem.input5,
      input6: selectedItem.input6,
      input7: selectedItem.input7,
      fileInput: null,
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
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      fileInput: null,
    });
    setIsEditMode(false);
    setSelectedItemId(null);
  };

  const handleDelete = (itemId: any) => {
    const updatedData = data.filter((item: any) => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {isEditMode ? (
        <form onSubmit={handleUpdate} className="mb-4">
          <input
            type="text"
            name="input1"
            value={inputValues.input1}
            onChange={handleInputChange}
            placeholder="Enter value 1"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input2"
            value={inputValues.input2}
            onChange={handleInputChange}
            placeholder="Enter value 2"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input3"
            value={inputValues.input3}
            onChange={handleInputChange}
            placeholder="Enter value 3"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input4"
            value={inputValues.input4}
            onChange={handleInputChange}
            placeholder="Enter value 4"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input5"
            value={inputValues.input5}
            onChange={handleInputChange}
            placeholder="Enter value 5"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input6"
            value={inputValues.input6}
            onChange={handleInputChange}
            placeholder="Enter value 6"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input7"
            value={inputValues.input7}
            onChange={handleInputChange}
            placeholder="Enter value 7"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="file"
            name="fileInput"
            onChange={handleFileInputChange}
            className="mt-2"
          />
          <button
            type="submit"
            className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      ) : (
        <form onSubmit={handleAdd} className="mb-4">
          <input
            type="text"
            name="input1"
            value={inputValues.input1}
            onChange={handleInputChange}
            placeholder="Enter value 1"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input2"
            value={inputValues.input2}
            onChange={handleInputChange}
            placeholder="Enter value 2"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input3"
            value={inputValues.input3}
            onChange={handleInputChange}
            placeholder="Enter value 3"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input4"
            value={inputValues.input4}
            onChange={handleInputChange}
            placeholder="Enter value 4"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input5"
            value={inputValues.input5}
            onChange={handleInputChange}
            placeholder="Enter value 5"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input6"
            value={inputValues.input6}
            onChange={handleInputChange}
            placeholder="Enter value 6"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="input7"
            value={inputValues.input7}
            onChange={handleInputChange}
            placeholder="Enter value 7"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="file"
            name="fileInput"
            onChange={handleFileInputChange}
            className="mt-2"
          />
          <button
            type="submit"
            className="px-4 py-2 mt-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Add
          </button>
        </form>
      )}

      <ul>
        {data.map((entry: any) => (
          <li key={entry.id} className="border-b border-gray-300 py-2">
            <span>{entry.input1}</span>
            <span>{entry.input2}</span>
            <span>{entry.input3}</span>
            <span>{entry.input4}</span>
            <span>{entry.input5}</span>
            <span>{entry.input6}</span>
            <span>{entry.input7}</span>
            <img
              src={URL.createObjectURL(entry.fileInput)}
              alt="Uploaded"
              className="mt-2 h-16 w-16"
            />
            <div>
              <button
                onClick={() => handleEdit(entry.id)}
                className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(entry.id)}
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Thu;
