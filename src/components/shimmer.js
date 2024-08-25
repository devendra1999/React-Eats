const Shimmer = () => {
    return ( 
    <div className="restaurant-list"> 
        {Array(12).fill('').map((e, index) => <div index = {index} className="shimmer-card"></div>)}
    </div> 
    )
}
export default Shimmer;