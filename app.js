import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.png';
import { restaurantList } from "./mockData";

const Title = () => (
    <a href="/">
        <img 
            className="logo"
            alt="logo"
            src= {logo}
        />
    </a>
)
const Header = () => {
    return (
        <>
            <div className="header">
                <Title/>
                    <div className="nav-items">
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contract</li>
                    <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    ); 
}

//config driven UI

const RestaurantCard = (props) => {

    const {cloudinaryImageId, name, cuisines, lastMileTravelString} = props.data;
    return (
        <div className="card"> 
            <img src ={cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}



const Body = () => {
    return (
        <div className="restaurant-list">
            {restaurantList.map( restaurant => {
                return <RestaurantCard {...restaurant}/>
            })}
        </div>
    )
}

const Footer = function() {
    return (
        <h1>Footer</h1>
    )
 }

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);