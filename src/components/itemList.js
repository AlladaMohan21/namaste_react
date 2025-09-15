import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-row-reverse items-start gap-4 p-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white"
        >
          {/* Image Section (now on right) */}
          <div className="w-24 h-24 flex-shrink-0 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Swiggy-like Add Button */}
            <button
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 
              bg-white text-green-600 border border-green-600 text-xs font-semibold 
              px-4 py-1 rounded-md shadow-md hover:bg-green-50 active:scale-95 transition"
            >
              ADD +
            </button>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{item.card.info.name}</span>
              <span className="text-sm font-medium text-green-600">
                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2 leading-snug">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
