import react, { useState, useEffect } from "react";
import productsData from "../api/product";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <button className="flex justify-end border mx-10 mt-2 rounded font-semibold bg-purple-500 text-white py-1 hover:text-black hover:bg-white duration-300 hover:border-purple-500 border-black">
        Sepete Git
      </button>
      <div className="flex flex-row mt-8  ml-8 mb-8 justify-center grid grid-cols-4 gap-4">
        {products.length &&
          products.map((product) => (
            <div className="flex flex-col ">
              <div className="border w-64 h-64 shadow rounded mx-8 my-8">
                <img src={product.img_url} />
              </div>
              <div className="flex flex-col mt-4">
                <div className="font-bold">{product.name}</div>
                <div className="font-bold">{product.price}</div>
                <button className="border mx-10 mt-2 rounded font-semibold bg-purple-500 text-white py-1 hover:text-black hover:bg-white duration-300 hover:border-purple-500 border-black">
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
