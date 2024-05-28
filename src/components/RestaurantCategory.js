import Items from "./Items";
//import { useState } from "react";
const RestaurantCategory = (props) => {
  const { data, showItem, setShowIndex } = props;
  //const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  // console.log(showItem);
  return (
    <div className="w-8/12 m-auto">
      <div className="bg-gray-100 rounded-md mt-3 shadow-lg p-4 font-bold  hover:bg-gray-200 active:bg-gray-300">
        <div className="flex justify-between   " onClick={handleClick}>
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
      </div>
      <div>{showItem && <Items key={data.id} items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
