import React, { useState } from "react";

const Thu = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "B1",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: false,
    },

    {
      id: 2,
      name: "B2",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: true,
    },
    {
      id: 3,
      name: "B3",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: true,
    },
    {
      id: 4,
      name: "B4",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: false,
    },
    {
      id: 5,
      name: "B5",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: false,
    },
    {
      id: 6,
      name: "B6",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: false,
    },
    {
      id: 7,
      name: "B7",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: true,
    },
    {
      id: 8,
      name: "B8",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: true,
    },
    {
      id: 9,
      name: "B9",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: false,
    },
    {
      id: 10,
      name: "B10",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: false,
    },
    {
      id: 11,
      name: "B11",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: true,
    },
    {
      id: 12,
      name: "B12",
      img: "/image/rating1.png",
      table: "/image/lietsi1.png",
      active: true,
    },
  ]);

  const toggleActive = (id: any) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, active: !product.active } : product
      )
    );
  };

  return (
    <div className="mx-auto bg-white relative h-auto w-fit rounded-lg p-2 border-transparent border-4 flex gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className={`p-2 mx-2 cursor-pointer ${
            product.active
              ? "bg-[#DD2B17] relative h-auto w-fit rounded-lg p-2 border-transparent border-4 hover:border-[#4284F3] "
              : "bg-[#CAD0D7] relative h-auto w-fit rounded-lg p-2 border-transparent border-4"
          }`}
          onClick={() => toggleActive(product.id)}
        >
          <div className="bg-[#00000033] px-2 py-1  w-[34px] h-[25px] rounded-[4px] text-white flex justify-center items-center">
            {product.name}
          </div>
          {product.active && (
            <>
              <div className="flex justify-center">
                <button className=" py-3">
                  <img src={product.img} alt="" />
                </button>
              </div>
              <div className="flex justify-center">
                <button className="">
                  <img src={product.table} alt="" />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Thu;
