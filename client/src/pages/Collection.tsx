import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProfileCall from "../hooks/ProfileCall";
const Collection = () => {
  const products = [
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s8-og-image-202209_GEO_TH_LANG_TH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1661466422009",
      author: "Author1",
      name: "Product1",
      likes: 45,
    },
  ];


return (
  <>
    <div className="flex flex-col items-center bg-gray-100 py-5">
      <ProfileCall />
      <div className="mt-5"></div> {/* Add a margin-top for additional space */}
      <header className="py-5">
        <h1 className="text-2xl font-bold align-center">Collection</h1>
      </header>
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc={product.imgSrc}
            author={product.author}
            name={product.name}
            likes={product.likes}
          />
        ))}
      </div>
    </div>
  </>
);
        }

export default Collection;
