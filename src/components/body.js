import RestaurantCard from "./restaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
    return (
        <div className="restaurant-list">
            {restaurantList.map( restaurant => {
                return <RestaurantCard {...restaurant.data}/>
            })}
        </div>
    )
}

export default Body;