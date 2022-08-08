import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { useTimeout } from './Hooks/Timeout';
import { useFetch } from './Hooks/Fetch';

function App() {

  const data1 = useTimeout(2000);
  const ready = useTimeout(3000);

  const {loading, data, error} = useFetch("https://api.github.com/users?q=Masai");

  return (
    <div className="App">
      {data1? "I am ready" : "I am not ready"} <br />
      {ready? "I am ready2" : "I am not ready2"} <br />
      <hr />
      <h1>Masai Github</h1>
      <div>{loading ? "Loading" : "Can't Load"}</div>
      {data.map((item) => {
        return <div key={item.id}> {item.login} </div>
      })}
    </div>
  );
}

export default App;
