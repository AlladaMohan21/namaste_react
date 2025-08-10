import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  const {resData}=props;
  console.log("Restaurant Data:", resData);
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
    <div className="res-card">
       <img className="res-logo"
        src={CDN_URL+
          
          cloudinaryImageId 
        }
      />
      <h2>{name}</h2>
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