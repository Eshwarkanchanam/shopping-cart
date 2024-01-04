import AddIcon from "@mui/icons-material/Add";

const IncreaseCartItem = ({id,quantity,setQuantity,increaseCartItem}) => {
  return (
    <AddIcon
      className="ml-2 mr-2 cursor-pointer text-white bg-[#0d72ea] rounded-md"
      onClick={() => {
        if (quantity < 10) {
          increaseCartItem(id);
          setQuantity(quantity + 1);
        }
      }}
    />
  );
};

export default IncreaseCartItem;
