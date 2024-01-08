import "./PerfumeButton.css";
import CARTICON from "/icon-cart.svg"

export const PerfumeButton = () => {
  return (
    <div className="btn_wrapper">
      <button className="btn_cart">
        {/* //?: svgen er hvit, derfor er den ikke synlig med hvit bakgrunn */}
        <img src="/icon-cart.svg" alt="cart icon" className="cart_icon" />
        Add to Cart
      </button>
    </div>
  );
};
