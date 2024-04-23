import React from "react";
import HeadstoneItem from "../headstone/HeadstoneItem";

const list = [
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
  {
    id: 13,
    name: "B13",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
  {
    id: 14,
    name: "B11",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 15,
    name: "B12",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: true,
  },
  {
    id: 16,
    name: "B13",
    img: "/image/rating1.png",
    table: "/image/lietsi1.png",
    active: false,
  },
];

const Cemetery = () => {
  return (
    <div>
      <div className="list flex gap-3 bg-white mt-4 p-6 rounded-lg flex-wrap ">
        {list.map((lis) => (
          <HeadstoneItem key={lis.id} lis={lis} />
        ))}
      </div>
    </div>
  );
};

export default Cemetery;
