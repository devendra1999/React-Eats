//config driven UI
const RestaurantCard = ({cloudinaryImageId, 
                        name, 
                        cuisines, 
                        costForTwo,
                        avgRating, 
                        sla} = RestaurantCard.info) => {

    return (
        <div className="card"> 
            <img src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{sla.lastMileTravel} kms| {avgRating} | {costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;