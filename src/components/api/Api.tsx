const BASE_URL = "https://jsonplaceholder.typicode.com"; // Thay thế URL của API thực tế của bạn

export const fetchData = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};

export const addData = async (newData: any) => {
  console.log("addData :", addData);
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  const data = await response.json();
  return data;
};

export const updateData = async (id: any, updatedData: any) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  const data = await response.json();
  return data;
};

export const deleteData = async (id: any) => {
  const confirmed = window.confirm("Bạn có chắc chắn muốn xóa?");
  if (!confirmed) return;
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
