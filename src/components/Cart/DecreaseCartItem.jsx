import RemoveIcon from "@mui/icons-material/Remove";

const DecreaseCartItem = ({id,quantity,setQuantity,decreaseCartItem}) => {
  return (
    <RemoveIcon
      className="ml-2 mr-2 cursor-pointer text-white bg-[#0d72ea] rounded-md"
      onClick={() => {
        if (quantity > 1) {
          decreaseCartItem(id);  
          setQuantity(quantity - 1);
        }
      }}
    />
  );
};

export default DecreaseCartItem;
