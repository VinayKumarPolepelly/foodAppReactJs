import { CDN_url } from "../utils/constants";
import { MdStarRate } from "react-icons/md";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData?.info || {};
  const { deliveryTime } = resData?.info?.sla || {};
  return (
    <div className="m-2 p-4 w-[250px] shadow-md h-[380px] bg-gray-100 rounded-xl hover:bg-gray-200 hover:shadow-lg ">
      <img
        className="rounded-lg w-[210px] h-[160px]"
        src={CDN_url + cloudinaryImageId}
      />
      <h3 className="text-lg my-2 font-bold">{name}</h3>
      <h4 className="mt-1 text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm font-medium">{areaName}</h4>
      <div className="mt-2 flex justify-between  ">
        <h4 className="italic">{deliveryTime} min</h4>
        <div className="w-[44px] pr-[2px]  flex justify-center text-center  bg-gradient-to-r from-green-700 to-green-500 rounded-lg">
          <MdStarRate className="text-white rounded-3xl w-5 mt-1" />
          <h4 className="font-semibold text-white font-serif  text-sm">
            {avgRating}
          </h4>
        </div>
      </div>
    </div>
  );
};

//higher order component

//input - RestaurantCard  , returns - RestaurantPromotedCard

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" bg-black text-white p-1  rounded-r-lg rounded-b-lg absolute ">
          veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
