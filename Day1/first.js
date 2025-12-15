// const header1 = document.createElement('h1');
// header1.innerText = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30";
// header1.style.color = "white";

// // const header2 = document.createElement('h2');
// // header2.innerText = "Good Morning";
// // header2.style.backgroundColor = "black";
// // header2.style.fontSize = "25";
// // header2.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);
// root.append(UL); 


// Create element through js
const React = {
      createElement: function(tag,styles,Children){
       const element = document.createElement(tag);
       
       if(typeof Children ==='object'){
            for(let val of Children)
                  element.append(val);
       }
       else
       element.innerText = Children;

       for(let key in styles){
       element.style[key] = styles[key];
       }
       return element;
      }                
}


const ReactDOM ={
render:function(element,root){
      root.append(element);
}
}


const header1 = React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"White"}, "Hello Coder Army");
const header2 = React.createElement('h2',{fontSize:"25px",backgroundColor:"red",color:"White"},"Aap sab kaise hai");

const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");


const UL = React.createElement('ul',{fontSize:"20px",backgroundColor:"green",color:"White"},[li1,li2,li3]);


ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(UL,document.getElementById('root'));


