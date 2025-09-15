import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from"react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);



  if (!resInfo) {
    return <Shimmer />;
  }

  const restaurant = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage } = restaurant;

  // Extract regular menu cards
  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  // Find Recommended section instead of Top Picks
  const recommendedCard = regularCards.find(
    (c) => c?.card?.card?.title && c?.card?.card?.title.includes("Recommended")
  );
  const recommendedItems = recommendedCard?.card?.card?.itemCards || [];

    const categories = regularCards.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category,index)=>(
        <RestaurantCategory 
        key={category?.card?.card?.title || index} 
        data={category?.card?.card} 
        showItems={index ===showIndex ? true:false}
        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
        ))}
    </div>
  );
};

export default RestaurantMenu;
