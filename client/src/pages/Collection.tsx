import React from 'react';
import ProductCard from '../components/ProductCard';
import Profile from '../components/Profile';
const App: React.FC = () => {
  const products = [
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s8-og-image-202209_GEO_TH_LANG_TH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1661466422009",
      author: "Author1",
      name: "Product1",
      likes: 45,
    },
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MLYT3_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO_GEO_TH_LANG_TH?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683226539556",
      author: "Author2",
      name: "Product2",
      likes: 30,
    },
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQE53ref_VW_PF+watch-49-titanium-ultra_VW_PF_WF_CO+watch-face-49-alpine-ultra_VW_PF_WF_CO_GEO_TH_LANG_TH?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054",
      author: "Author3",
      name: "Product3",
      likes: 0,
    },
    {
      imgSrc:
        "https://niceboy.eu/files/produkt//watch-gtr-black/watch-gtr-galerie-01.jpg?v=1",
      author: "Author2",
      name: "Product2",
      likes: 30,
    },
    {
      imgSrc:
        "https://niceboy.eu/files/produkt//watch-gtr-black/watch-gtr-galerie-01.jpg?v=1",
      author: "Author2",
      name: "Product2",
      likes: 30,
    },

    // add as many products as you want here...
  ];

  return (
    <>
      <Profile
        imageUrl="https://avatars.githubusercontent.com/u/25126281?v=4"
        username="Watch Stock"
        description="Watch Stock is a website for watch lovers to share their favorite watches."
      />
      <div className="flex flex-col items-center bg-gray-100 py-5">
        <header className="py-5">
          <h1 className="text-2xl font-bold align-center">Collection </h1>
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

export default App;
