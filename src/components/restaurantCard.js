import { IMG_CDN } from '../utils/constants'

//config driven UI
const RestaurantCard = ({cloudinaryImageId, 
                        name, 
                        cuisines, 
                        costForTwo,
                        avgRating, 
                        sla} = RestaurantCard.info) => {

    return (
        <div className="card"> 
            <img src ={IMG_CDN+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{sla.lastMileTravel} kms| {avgRating} | {costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;