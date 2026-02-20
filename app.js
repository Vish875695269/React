const element1 = React.createElement('h1',{id:"first",className:"Rahul", style:{backgroundColor:"blue",fontSize:"30px",color:"white"}},"Hello Coder Army");
const element2 = React.createElement('h1',{id:"second",className:"Rohit", style:{backgroundColor:"black",fontSize:"30px",color:"white"}},"Welcome to India");

//ReactDOM.render(element,document.getElementById('root'));
 const div1 = React.createElement('div',{},[element1,element2]);
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(div1);
// root.render(element1);
// root.render(element2);