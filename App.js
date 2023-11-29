// const heading = React.createElement("h1", { id: "heading" ,xyz:"abc"}, "Hello World");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(heading)

// ////////////////////////////////////////////////////
// part 4

// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>Hi I am h2  sibling tag</h2>
//     </div>
// </div>
// <div id="child-siblling">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>Hi I am h2  sibling tag</h2>

//     </div>
// </div>


const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", { id: "heading" }, "I'm H1 tag"),
        React.createElement("h2", {}, "Hi I am h2  sibling tag")),

    React.createElement("div", { id: "child-siblling" },
        React.createElement("h1", { id: "heading" }, "I'm H1 tag"),
        React.createElement("h2", {}, "Hi I am h2  sibling tag")),
)
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(parent);
