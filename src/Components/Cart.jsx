import { useEffect, useState } from "react";
import CartCard from "./Cart/CartCard";
import { getDataFromLS } from "../utility/DB";
import group from "../assets/Group.png";
import { useContext } from "react";
import { TotalPriceContext } from "../utility/context";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState([]);

  const [totalPrice, setTotalPrice] = useContext(TotalPriceContext);

  // ✅ Load LocalStorage data once
  useEffect(() => {
    const cartList = getDataFromLS("ShoppingCart") || [];
    setCartId(cartList);
  }, []);

  // ✅ Fetch product data once
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  useEffect(() => {
    const total = cartId.reduce((sum, id) => {
      const product = products.find((p) => p.product_id === id);
      return product ? sum + product.price : sum;
    }, 0);
    setTotalPrice(total);
  }, [cartId, products, setTotalPrice]);

  return (
    <div className="flex flex-col">
      <nav className="flex w-full justify-between px-8 py-4">
        <div className="font-bold text-2xl">Cart</div>
        <div className="flex gap-4 justify-center items-center">
          <h3 className="font-bold text-2xl">Total price: {totalPrice}</h3>
          <button className="btn btn-outline btn-secondary rounded-full text-xl text-[#8b27ddd7] border-[#8b27ddd8] px-8">
            sort by
            <span>
              <img
                className="w-6"
                src="https://img.icons8.com/pulsar-gradient/48/horizontal-settings-mixer.png"
                alt=""
              />
            </span>
          </button>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-active btn-secondary rounded-full text-xl px-8 bg-linear-to-b from-purple-500 from-70% to-yellow-100"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            open modal
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box flex flex-col items-center gap-4">
              <img src={group} alt="" />
              <h3 className="font-bold text-lg">Payment Successfully!</h3>
              <p className="">Thanks for purchasing.</p>
              <p>Toatal: {totalPrice}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn rounded-full w-40">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </nav>

      <div className="space-y-6 m-10 mx-auto rounded-xl">
        {cartId.map((id) => (
          <CartCard
            key={id}
            products={products}
            productId={id}
            setCartId={setCartId}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
