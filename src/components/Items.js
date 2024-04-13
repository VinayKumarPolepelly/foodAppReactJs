import { CDN_url } from "../utils/constants";

const Items = (props) => {
  const { items } = props;

  return (
    <div className="bg-gray-100 mt-[-12px] p-4">
      {items.map((it) => (
        <div
          className="my-3 flex justify-between border-b-2 pb-4 border-b-gray-300 "
          key={it?.card?.info?.id}
        >
          <div className="w-10/12">
            <h2 className="font-medium text-md ">{it?.card?.info?.name}</h2>
            <span className="text-orange-400">
              {" Rs."}
              {it?.card?.info?.price / 100 ||
                it?.card?.info?.defaultPrice / 100}
            </span>
            <h2 className="text-xs font-normal text-gray-600">
              {it?.card?.info?.description}
            </h2>
          </div>
          <div className="">
            {" "}
            <img
              className="w-[90px] h-[80px]"
              src={CDN_url + it?.card?.info?.imageId}
            />
            <button className="bg-white border-2 text-green-500 ml-[20px] mt-[-20px] hover:text-green-600 hover:bg-gray-200  active:text-orange-500 active:border-gray-400 rounded-lg px-2 absolute ">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
