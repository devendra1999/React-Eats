import RestaurantCard from "./restaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
        let filterData = restaurant?.data?.name?.includes(searchText)
        return filterData;
    }
)
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState('');

    useEffect(() =>{
        
    },[restaurants])

    return (
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
                    <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>
                    )
                })}
            </div>
        </>
    )
}

export default Body;