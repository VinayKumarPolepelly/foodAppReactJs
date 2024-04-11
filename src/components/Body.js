import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Offline from "./Offline.js";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Body = () => {
  // Local State variable - super powerful variable
  //whenever state variable updates react will re-renders the components

  const [ListOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);
    setListOfRes(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <Offline />;

  if (ListOfRes.length === 0) {
    //Conditional Rendering
    return <Shimmer />;
  }

  return (
    <div className="p-1">
      <div className="flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-200 px-4 py-2 ml-3 rounded-md text-xs font-bold hover:bg-green-300 active:bg-green-500"
            onClick={() => {
              const filtList = ListOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtList);
            }}
          >
            Search
          </button>
          <button
            className="bg-orange-200 px-4 py-2 ml-3 rounded-md text-xs font-bold   hover:bg-orange-300 active:bg-orange-500"
            onClick={() => {
              const filteredList = filteredRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restautant) => (
          <Link
            to={"/restaurants/" + restautant.info.id}
            key={restautant.info.id}
          >
            <RestaurantCard resData={restautant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
