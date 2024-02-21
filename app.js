const heading = React.createElement("div", {id:"parent"}, [
  React.createElement("h1", {id:"child1"}, "Hi My name is Vijay"),
  React.createElement("h2", {id:"child2"}, "And Im a frontend Developer")  
]);


const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(heading);