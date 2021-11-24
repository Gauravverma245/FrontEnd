import React, {useState} from 'react';
import reactDom from 'react-dom';
import axios from 'axios';


const CurrencyConverter = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [rate, setRate] = useState("");


  const getRate = (first, second) =>{
    axios({
      method: "GET",
      url:
      `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=85a397a4e122f3f6633f`
    })
    .then((response) =>{
      console.log(response.data);
      setRate(response.data);
    })
    .catch((error) =>{
      console.log(error);
    });
  };

  return (
    <>
    <h1 style= {{marginLeft: "38%"}}>Currency Converter</h1>
      <div style= {{marginLeft: "33%"}}>
        <div
          style = {{
            height: "40px",
            width: "450px",
            backgroundColor: "#94e5ff",
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
          }}
          >
            1{first} = {rate[`${first}_${second}`]} {second}
        </div>
        <br/>
        <input type = "text" 
        value = {first}
        onChange = {(e) => setFirst(e.target.value)}
        />
        <input type = "text" 
        value = {second}
        onChange = {(e) => setSecond(e.target.value)}
        />
        <button
        onClick = {() => {
          getRate(first, second);
        }}
        >Convert
        </button>
      </div>
    </>
  )
};


reactDom.render(
  <CurrencyConverter/>, document.getElementById('root')
)