
const ProductCard = ({title, description, price, image}) => {

  return (
    <>
      { (
        <div className="border-2 h-[400px] w-[280px] m-2 tracking-wider cursor-pointer hover:shadow-lg hover:shadow-blue-500 hover:scale-105 w-md rounded-lg overflow-hidden">
          <figure className="h-2/3 w-full relative">
            
            <img
              src={image}
              alt={description}
              className="w-full p-4 h-full object-contain aspect-[12/16]"
            />
          </figure>
          <figcaption className="h-1/3 p-2 relative bg-gray-100">
            <p className="font-semibold">{title}</p>
            <p className="text-xs mt-1">₹ {price}</p>
          </figcaption>
        </div>
      )}
    </>
  );
};

export default ProductCard;
