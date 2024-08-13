import React from "react";
import ReactDOM from "react-dom/client";

const heading9 = (
    <h1 id="h1" key="1234">valhalla!</h1> // jsx -> html like syntax but not html inside js
)
const HeaderComponent = () => {
    return (
        <>
        {heading9}
        <h1>Hey functional component!! </h1>
        <HeaderFunction></HeaderFunction>
        {console.log("can log console/js code with this in functional component!")}
        {HeaderFunctionNoReturn()}
        </>
    ); 
}

const HeaderFunction = function() {
    return (
        <h1>Traditional function declaration in Js!</h1>
    )
 }

const HeaderFunctionNoReturn = () => (
    <h1>hey arrow function with no return statement!</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);