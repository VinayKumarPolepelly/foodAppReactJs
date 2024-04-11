# Food Ordering app

/\*\*

- Header
- - logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      -img
-      -name,star,cusine,delivery tie
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

# import export types

- Default Export/imports
  export default Component
  import Component from "path"

-Named Export/import
export const Component;
import {Component} from "path"

# React Hooks

(Normal JS utility fuctioins)
-useState() - Superpowerful State variables in react
//whenever state variable updates react will re-renders the components

-useEffect()
// const onlineStatus = useOnlineStatus();
// if no dependency array => useEffect called on every render
// if dependency array is empty = [] =>useEffect is called on initial render (just once)
//if dependency array is [btnName] => called everytime btnName is updated]
// useEffect(() => {
// console.log("useeffect");
// }, [btnName]);

# 2 types of routing

- Client side Routing
- Server side Routing
