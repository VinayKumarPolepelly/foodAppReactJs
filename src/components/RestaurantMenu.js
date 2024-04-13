import Shimmer from "./Shimmer";
import { MdStarRate } from "react-icons/md";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; //custom hook
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    (resInfo.cards && resInfo.cards[2]?.card?.card?.info) || {};
  //console.log(resInfo);
  // const items =
  //   (resInfo.cards &&
  //     resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  /**    ?.itemCards) ||*/
  //   [];

  const categories =
    resInfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  //console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  console.log(categories);
  return (
    <div className="p-3">
      <div className="text-center p-3 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl my-1 font-bold font-serif">{name}</h1>
        <h3 className="mt-1">
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
      <div>
        <div>
          {categories.map((c) => (
            <RestaurantCategory key={c.card.card.title} data={c.card.card} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
