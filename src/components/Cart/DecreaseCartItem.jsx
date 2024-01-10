import RemoveIcon from "@mui/icons-material/Remove";
import { useShoppingCartContext } from "../../context/CartContext";

const DecreaseCartItem = ({ id, quantity, setQuantity, decreaseCartItem ,setIsItemAdded}) => {
  const { removeCartItem } = useShoppingCartContext();
  return (
    <RemoveIcon
      className="cursor-pointer text-white bg-[#0d72ea] rounded-md"
      onClick={() => {
        if (quantity > 1) {
          decreaseCartItem(id);
          setQuantity(quantity - 1);
        } else {
          removeCartItem(id);
          setIsItemAdded(false);
        }
      }}
    />
  );
};

export default DecreaseCartItem;
