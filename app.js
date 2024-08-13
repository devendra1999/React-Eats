import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.png';

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

const Body = () => (
    <h1>Body</h1>
)

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