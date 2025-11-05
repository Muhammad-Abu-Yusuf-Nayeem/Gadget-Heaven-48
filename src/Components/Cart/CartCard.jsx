import { removeFromLocalStorage } from "../../utility/DB";
import { useContext } from "react";
import { TotalPriceContext } from "../../utility/context";

const CartCard = ({ products, productId, setCartId }) => {
  // ✅ Always call hooks first — no conditions before them
  // const [totalPrice, setTotalPrice] = useContext(TotalPriceContext);

  const product = products.find((prod) => prod.product_id === productId);

  // ✅ Still safe to skip rendering after hooks
  if (!product) return null;

  const { product_title, product_image, price, description } = product;

  const [totalPrice, setTotalPrice] = useContext(TotalPriceContext);

  const handleCancelBtn = (id) => {
    removeFromLocalStorage(id, "ShoppingCart", setCartId);
    setTotalPrice(totalPrice - price);
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
        </div>
      </div>
      <button
        onClick={() => handleCancelBtn(productId)}
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

export default CartCard;
