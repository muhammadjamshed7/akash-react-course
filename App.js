
// const heading = React.createElement("h1", {
//     className:'jamshed',
//     xyz:'js',
//     id:'akash'
// }, "Hello World from React!");
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
const heading = React.createElement("div", 
    {
        id:"parent"
    },
    React.createElement(
        "div",{
            id:'child'
        },
        [React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")]
    )
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
