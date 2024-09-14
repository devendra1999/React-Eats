import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from "react";
import Shimmer from './shimmer';
import {API_FETCH_RESTAURANTS} from '../utils/constants'
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
        let filterData = restaurant?.info?.name?.toLowerCase()?.includes(searchText)
        return filterData;
    }
)
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() =>{
        getRestaurantList();
    },[])

    async function getRestaurantList () {
        const data = await fetch(API_FETCH_RESTAURANTS)
        const res = await data.json();
        setRestaurants(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(!restaurants) return null;

    return filteredRestaurants?.length === 0 ? ( 
        <Shimmer/> 
    ): (
        (filteredRestaurants.length !== 0 ) ?
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
                        const data = filterData(searchText, restaurants)
                        setFilteredRestaurants(data)    
                    }}>Search</button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link style={{ textDecoration: 'none' }}
                            to = {"/restaurant/" + restaurant.info.id}
                            key = {restaurant.info.id}
                        >
                            <RestaurantCard {...restaurant.info}/>
                    </Link>
                    )
                })}
            </div>
        </> : <h1 className="search-error">Oops! No results for your search..</h1>
    ) 
}

export default Body;