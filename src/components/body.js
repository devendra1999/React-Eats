import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from "react";
import Shimmer from './shimmer';

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
        let filterData = restaurant?.data?.name?.includes(searchText)
        return filterData;
    }
)
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() =>{
        getRestaurantList();
    },[])

    async function getRestaurantList () {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const res = await data.json();
        setRestaurants(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(restaurants)
        // console.log(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return restaurants?.length === 0 ? ( 
        <Shimmer/> 
    ): (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>

                <button
                    className="search-button"
                    onClick={() => {
                        //filter data
                        const data = filterData(searchText, restaurants)
                        //update the restaurant list
                        console.log(data)
                        setRestaurants(data)
                    }}>search</button>
            </div>
            <div className="restaurant-list">
                {restaurants.map(restaurant => {
                    return (
                    <RestaurantCard {...restaurant.info} key = {restaurant.info.id}/>
                    )
                })}
            </div>
        </>
    ) 
}

export default Body;