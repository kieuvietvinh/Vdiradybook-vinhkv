import React from "react";

const StickerAll = (props: any) => {
  const item = props?.item;
  return (
    <div>
      <img key={item.id} src={item.image} alt="" />
    </div>
  );
};

export default StickerAll;
