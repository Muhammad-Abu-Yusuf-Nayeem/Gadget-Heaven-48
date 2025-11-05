import React from "react";
import { removeFromLocalStorage, addToLocalStorage } from "../../utility/DB";
import { useContext } from "react";
import { TotalPriceContext } from "../../utility/context";

const WishCard = ({ products, productId, setWishListId }) => {
  const [totalPrice, setTotalPrice] = useContext(TotalPriceContext);
  const product = products.find((prod) => prod.product_id === productId);
  if (!product) return null;

  const { product_title, product_image, price, description } = product;

  const handleRemove = (id) => {
    removeFromLocalStorage(id, "WishList");
    // Update state after removal
    setWishListId((prev) => prev.filter((item) => item !== id));
  };

  const handleAddToCart = (id) => {
    setTotalPrice(price + totalPrice);
    addToLocalStorage(id, "ShoppingCart", totalPrice);
    console.log(totalPrice);
  };

  return (
    <div className="grid grid-cols-6 mx-auto rounded-xl border bg-white">
      <div className="ml-6 col-span-1 flex justify-center items-center">
        <img
          src={product_image}
          className="h-[120px] w-[150px]"
          alt={product_title}
        />
      </div>

      <div className="card col-span-4">
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-gray-500 text-sm font-semibold line-clamp-2">
            {description}
          </p>
          <h2 className="card-title text-gray-700 font-semibold">
            Price: ${price}
          </h2>

          <button
            onClick={() => handleAddToCart(productId)}
            className="btn btn-primary rounded-full py-4 px-6 bg-[#9538E2] border-0 text-xl w-44"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <button
        onClick={() => handleRemove(productId)}
        className="btn btn-primary text-lg rounded-full mt-5 border-white shadow-none bg-white"
      >
        <img
          src="https://img.icons8.com/color/48/cancel--v1.png"
          className="w-7"
          alt="remove"
        />
      </button>
    </div>
  );
};

export default WishCard;
