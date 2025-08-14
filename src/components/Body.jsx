import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");

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

  if(listOfRestaurants.length ===0){
  
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
         <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}></input>
        <button
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
        <button
          className="filter-btn"
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

      <div className="rest-container">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
