//config driven UI
const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString} = RestaurantCard) => {

    return (
        <div className="card"> 
            <img src ={cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard;