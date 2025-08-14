import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const {resId}=useParams();
  const resInfo=useRestaurantMenu(resId);
  if (!resInfo) {
    return <Shimmer />;
  }
const restaurant = resInfo?.cards?.[2]?.card?.card?.info || {};
const { name, cuisines, costForTwoMessage } = restaurant;


  const regularCards = resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const topPicksCard = regularCards.find(
    (c) => c?.card?.card?.carousel && c?.card?.card?.title?.includes("Top Picks")
  );
  const topPicks = topPicksCard?.card?.card?.carousel || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
<h3>{cuisines?.join(", ")}</h3>
<h3>{costForTwoMessage}</h3>


      <h2>Top Picks</h2>
      <ul>
        {topPicks.map((pick) => (
          <li key={pick?.dish?.info?.id}>{pick?.dish?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
