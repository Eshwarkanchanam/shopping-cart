import DeleteIcon from "@mui/icons-material/Delete";

const RemoveCartItem = ({removeCartItem,setQuantity,setIsItemAdded,id}) => {
  return (
    <button
            className="pt-2 pb-2 mt-4 mb-4 flex justify-center items-center bg-red-600 capitalize text-white text-center border-2 hover:text-red-600 hover:bg-white w-full rounded-md"
            onClick={() => {
              removeCartItem(id);
              setIsItemAdded(false);
              setQuantity(0);
            }}
          >
           <span>remove from cart</span>
           <DeleteIcon className="ml-4"/>
          </button>
  )
}

export default RemoveCartItem