//1st work
// const heading=React.createElement("h1",{id:"heading"},"Hello World from React!");
// // {}-->place where you will give attributes as many no we want using comma
// // console.log(heading)----->   RETURNS A OBJECT
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ----------------------------------------------------------------------------------------------------

//2nd work
// Create  using react
// <div id="parent">
//    <div id='child'>
//     <h1>i am h1 tag</h1>
{/* <h2>I am h2 tag</h2> */}
//    </div>
// </div>

const parent=React.createElement("div" ,{id:"parent"},
    React.createElement("div",{id:"child"},
        [
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
        ]
    )
)

// THE ABOVE CODE WILL LOOK MESHY THATS WHY WE USE JSX 

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

