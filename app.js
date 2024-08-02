// const heading = React.createElement("h1",{ id: "title"}, "Heading 1");

const heading2 = React.createElement("h2", { id: "title"}, "Heading 1")

const heading = React.createElement("h1",{ id: "title1"}, "Heading 2");

const container = React.createElement(
    "div", 
    { 
        id: "container"
    },
    [ heading, heading2]
);

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react component inside root element 

//async defer
root.render(container);