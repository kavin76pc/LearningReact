const rootdir = document.getElementById("rosee");
const heading = React.createElement("h1", {}, "vankoooo");
const root = ReactDOM.createRoot(rootdir);

const newElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "chilrd2" }, "vaa la punda ")
  )
);

const rose = React.createElement("h1", {}, "rosewin is topper");
root.render(rose);
console.log(rose);
