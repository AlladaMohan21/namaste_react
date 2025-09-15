import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  const {resData}=props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }=resData?.info;
  return(
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
       <img className="rounded-lg"
        src={CDN_URL+
          
          cloudinaryImageId 
        }
      />
      <h2 className="font-bold py-4 txt-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
      <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;