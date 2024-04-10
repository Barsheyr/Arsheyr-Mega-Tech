import React, { useState } from "react";

const ProductImage = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div className="flex-1">
      <img src={main.url} alt="" className="h-[50vh] rounded-lg" />
      {/* <div className="grid grid-cols-4 gap-2 mt-10">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt=""
              key={index}
              className={`${
                image.url === main.url ? "active" : null
              } rounded-lg h-[20vh] w-full`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default ProductImage;
