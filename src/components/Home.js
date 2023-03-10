import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToBasket } from "../actions";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props);

  return (
    <>
      <Link to="/cart">
        <button className="mt-4 ml-96  translate-x-96">
          <SlBasket size={36} />
        </button>
      </Link>

      {/* PRODUCT */}
      <div className="flex flex-row mt-8 mx-auto container mb-8 justify-center grid grid-cols-4 gap-4">
        {props.productList.map((product) => (
          <div className="flex flex-col">
            <div className="border w-64 h-64 shadow rounded mx-8 my-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img src={product.img_url} />
            </div>
            <div className="flex flex-col mt-4">
              <div className="font-bold">{product.name}</div>
              <div className="font-bold">₺{product.price}</div>

              <button
                onClick={() => props.addToBasket(product)}
                className="border mx-10 mt-2 rounded font-semibold bg-purple-500 text-white py-1 hover:text-black hover:bg-white duration-300 hover:border-purple-500 border-black"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToBasket })(Home);
