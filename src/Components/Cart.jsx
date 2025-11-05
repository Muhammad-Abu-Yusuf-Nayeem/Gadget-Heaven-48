import { useEffect, useState, useContext } from "react";
import CartCard from "./Cart/CartCard";
import { getDataFromLS, resetCart } from "../utility/DB";
import group from "../assets/Group.png";
import { TotalPriceContext } from "../utility/context";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [totalPrice, setTotalPrice] = useContext(TotalPriceContext);

  // ✅ Load LocalStorage data once on mount
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

  // ✅ Recalculate total whenever cartId or products change
  useEffect(() => {
    const total = cartId.reduce((sum, id) => {
      const product = products.find((p) => p.product_id === id);
      return product ? sum + product.price : sum;
    }, 0);
    setTotalPrice(total);
  }, [cartId, products, setTotalPrice]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseTotal, setPurchaseTotal] = useState(0);

  const handlePurchase = () => {
    setPurchaseTotal(totalPrice);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    resetCart();
    setCartId([]);
    setTotalPrice(0);
  };

  return (
    <div className="flex flex-col">
      <nav className="flex w-full justify-between px-8 py-4">
        <div className="font-bold text-2xl">Cart</div>
        <div className="flex gap-4 justify-center items-center">
          <h3 className="font-bold text-2xl">
            Total price: {totalPrice.toFixed(2)}
          </h3>

          <button className="btn btn-outline btn-secondary rounded-full text-xl text-[#8b27ddd7] border-[#8b27ddd8] px-8">
            Sort by
            <span>
              <img
                className="w-6"
                src="https://img.icons8.com/pulsar-gradient/48/horizontal-settings-mixer.png"
                alt="Sort Icon"
              />
            </span>
          </button>

          {/* ✅ Purchase button */}
          <button
            className="btn btn-active btn-secondary rounded-full text-xl px-8 bg-linear-to-b from-purple-500 from-70% to-yellow-100"
            onClick={handlePurchase}
          >
            Purchase
          </button>

          {/* ✅ Success Modal */}
          {isModalOpen && (
            <dialog open className="modal">
              <div className="modal-box flex flex-col items-center gap-4">
                <img src={group} alt="Success" />
                <h3 className="font-bold text-lg">Payment Successful!</h3>
                <p>Thanks for purchasing.</p>
                <p>Total: {purchaseTotal.toFixed(2)}</p>
                <div className="modal-action">
                  <button
                    className="btn rounded-full w-40"
                    onClick={handleModalClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </dialog>
          )}
        </div>
      </nav>

      <div className="space-y-6 m-10 mx-auto rounded-xl">
        {cartId.length > 0 ? (
          cartId.map((id) => (
            <CartCard
              key={id}
              products={products}
              productId={id}
              setCartId={setCartId}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 text-xl">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
