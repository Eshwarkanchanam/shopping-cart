import AddIcon from "@mui/icons-material/Add";

const IncreaseCartItem = ({id,quantity,setQuantity,increaseCartItem}) => {
  return (
    <AddIcon
      className="cursor-pointer text-white bg-[#0d72ea] rounded-md"
      onClick={() => {
        if (quantity < 10) {
          increaseCartItem(id);
          setQuantity(quantity + 1);
        }else{alert("cannot add more than 10 items")}
      }}
    />
  );
};

export default IncreaseCartItem;
