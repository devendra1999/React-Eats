//config driven UI
const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString, slaString, costForTwoString} = RestaurantCard) => {

    return (
        <div className="card"> 
            <img src ={cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{slaString}| {lastMileTravelString} | {costForTwoString}</h4>
        </div>
    )
}

export default RestaurantCard;