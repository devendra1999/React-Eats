import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    //create dynamic url params
    const { restId } = useParams();

    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect ( () => {
        getRestaurantInfo();
    }, []); 

    async function getRestaurantInfo() {
        const res = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=" + 
            restId +"&catalog_qa=undefined&submitAction=ENTER"
        )
        const data = await res.json();

        setRestaurant(data?.data?.cards[2]?.card?.card?.info);
        let cardsArray = data?.data?.cards;
        let itemCards = null;

        if(cardsArray) {
          const cardIndex = [1,2,3,4,5].find(index =>
            cardsArray[index]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
          )
          if (cardIndex !== undefined) {
            itemCards = cardsArray[cardIndex].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
          }
        }
        setMenu(itemCards);
    }

    return !restaurant && !menu ? 
        (<Shimmer/>
        ) : (
            <div className="menu">
            <div>
              <h1>Restaurant id: {restId}</h1>
              <h2>{restaurant?.name}</h2>
              <img className="restaurant-logo" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
              <h3>{restaurant?.areaName} | {restaurant?.city} | {restaurant?.avgRating} stars | {restaurant?.costForTwoMessage}</h3>
            </div>
            <div>
              <h1>Menu - Recommended</h1>
              <ul>
                { menu ? Object.values(menu).map((item) => (
                  <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                )) : <li > Swiggy's deep nested Api's are playing with my code!</li>}
              </ul>
            </div>
          </div>
      
    )
}

export default RestaurantMenu;  