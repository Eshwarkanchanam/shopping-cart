import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const AddToCart = ({ addToCart, setIsItemAdded, id,setQuantity }) => {
  return (
    <button
      className="pt-2 pb-2 mt-4 mb-4 bg-[#405a93] flex justify-center items-center capitalize text-white text-center border-2 hover:text-[#405a93] hover:bg-white w-full rounded-md"
      onClick={() => {
        addToCart(id);
        setIsItemAdded(true);
        setQuantity(1);
      }}
    >
      <span>add to cart</span>
      <ShoppingCartCheckoutIcon className="ml-4" />
    </button>
  );
};

export default AddToCart;
