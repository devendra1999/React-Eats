import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../utils/constants";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    //create dynamic url params
    const { restId } = useParams();

    const [restaurant, setRestaurant] = useState(null);

    useEffect ( () => {
        getRestaurantInfo();
    }, []); 

    async function getRestaurantInfo() {
        const res = await fetch (
            
        )
    }

    return (
        <h1></h1>
    )
}

export default RestaurantMenu;  