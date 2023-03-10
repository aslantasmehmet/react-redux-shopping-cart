import React from "react";
import { connect } from "react-redux";

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  );
  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar w-full h-16 bg-stone-100 flex justify-between">
        <div className="flex text-purple-500 font-bold text-2xl pt-4 ml-8">
          {" "}
          GÖTÜR
        </div>
        <div></div>
        <div className="flex flex-row mr-4">
          <h3 className="mt-4">Mehmet ASLANTAŞ</h3>
        </div>
      </div>

      {/* BAKSET */}
      <div className="text-purple-500 text-left mt-4 ml-8 font-bold text-xl">
        SEPET ÖZETİ
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 ml-8 ">
        {/* PRODUCTS */}
        {props.cart.map((product) => (
          <div className="col-span-2 flex flex-row">
            <div className="border w-40 h-40 rounded shadow">
              <img src={product.img_url} />
            </div>
            <div className="flex flex-col mt-4">
              <div className="text-left ml-9 font-semibold text-purple-500">
                {product.name}
              </div>
              <div className="text-left ml-8 mt-4 font-semibold text-purple-500">
                ₺{product.price}
              </div>
              <button className="border ml-8 mt-4 rounded font-semibold bg-purple-500 text-white py-1 px-2 hover:text-black hover:bg-white duration-300 hover:border-purple-500 border-black">
                Sepeten Çıkar
              </button>
            </div>
          </div>
        ))}

        {/* CART TOTAL */}
        <div className="flex flex-col border bg-gray-200 w-96 h-96 shadow fixed top-16 right-4">
          <div className="mt-2 font-semibold text-lg text-purple-500">
            Sepet Toplamı
          </div>
          <div className="flex justify-between mt-16">
            <div className="ml-4">Ara Toplam</div>
            <div></div>
            <div className="mr-4">{totalPrice} ₺</div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="ml-4">Kampanya İndirim</div>
            <div></div>
            <div className="mr-4">00,00 ₺</div>
          </div>
          <div className="flex justify-between mt-2 text-red-500">
            <div className="ml-4">Kargo Bedava</div>
            <div></div>
            <div className="mr-4 line-through">24,90 ₺</div>
          </div>
          <div className="flex justify-between mt-2 text-black font-bold text-2xl">
            <div className="ml-4">Toplam</div>
            <div></div>
            <div className="mr-4 ">{totalPrice} ₺</div>
          </div>
          <button className="border  mt-12 mx-8 rounded font-semibold bg-purple-500 text-white py-3 px-2  hover:bg-purple-700 duration-300 hover:border-purple-500 border-black">
            Satın Al
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
