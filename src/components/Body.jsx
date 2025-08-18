import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2997267&lng=85.8172637&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("All cards:", json?.data?.cards);

    const restaurants =
      json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setlistOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

const onlineStatus=useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Oops! You are offline. Check your internet connection...</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
         <div className="m-4 p-4">
        <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}></input>
        <button className="px-4 py-2 bg-green-100 rounded-lg"
  onClick={() => {
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }}
>
  Search
</button>
      </div>
          <div className="m-4 p-4 flex items-center" >
             <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

          </div>
       
      </div>

      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
