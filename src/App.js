import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const names=['Shuvo','Hasan','Munna','Rocky','Nafiz' ]

const products= [
  {name:'Canon', price:'$ 500'},
  {name:'Nikon', price:'$ 800'},
  {name:'Sony', price:'$ 750'},
]

  return (
    <div className="App">
      <header className="App-header"> 

      <Counter></Counter>
  <ul>
    {
      names.map(name => <li>{name}</li>)
    } 
  </ul>

{
products.map(brand => <Card title={brand.name} price={brand.price}> </Card> )
}

      </header>
    </div>
  );
}

function Counter(){
const [count, setCount] = useState(5);
// const handleIncrease =() => setCount(count + 1); 
return (
  <div> 
    <h1>Count {count} </h1>
    <button onClick={() => setCount(count + 1)}>Incress</button>
    <button onClick={() => setCount(count - 1)}>Decress</button>
  </div>
)


}

function Card(props) {
const cardStyle={
  border:'solid 1px #ddd', 
  padding:'20px',
  borderRadius:'10px',
  margin: '10px',
  backgroundColor: '#ffffff0d',
  width: '350px',
  float: 'left',
}
  return ( 
    <div style={cardStyle}>
<h1>{props.title}</h1>
<p>{props.price}</p>
<button>Buy Now</button>

    </div>
  )
}

export default App;
