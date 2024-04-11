import Shimmer from "./Shimmer";
import { MdStarRate } from "react-icons/md";
import { useParams } from "react-router-dom";
import { CDN_url } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"; //custom hook
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    (resInfo.cards && resInfo.cards[2]?.card?.card?.info) || {};

  const items =
    (resInfo.cards &&
      resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        ?.itemCards) ||
    [];

  //console.log(items);

  return (
    <div className="p-3">
      <div className="text-center p-3 bg-gray-200 rounded-lg shadow-md">
        <h1 className="text-2xl my-1 font-bold font-serif">{name}</h1>
        <h3 class="mt-1">
          {cuisines && Array.isArray(cuisines) ? cuisines.join(", ") : ""}
        </h3>
        <div className="m-2 flex justify-center">
          <h4 className="mr-4 ">{costForTwoMessage}</h4>
          <div className="w-[44px] pr-[2px]  flex justify-center text-center  bg-gradient-to-r from-green-700 to-green-500 rounded-lg">
            <MdStarRate className="text-white rounded-3xl w-5 mt-1" />
            <h4 className="font-semibold text-white font-serif   text-sm">
              {avgRatingString}
            </h4>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold my-2">Menu</h2>

      {items.map((it) => (
        <div
          className="bg-gray-100 p-3 my-3 flex justify-between hover:shadow-md hover:bg-gray-200 rounded-lg shadow-md "
          key={it?.card?.info?.id}
        >
          <h2 className="font-medium text-xl m-8">
            {"  "}
            {it?.card?.info?.name} -
            <span className="text-orange-400">
              {" Rs."}
              {it?.card?.info?.price / 100 ||
                it?.card?.info?.defaultPrice / 100}
            </span>
          </h2>
          <img
            className="w-[100px] h-[100px]"
            src={CDN_url + it?.card?.info?.imageId}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
