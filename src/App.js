import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListUser from "./Compoments/ListUser";




function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
useEffect(() => {
const getData = async () => {
const users = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);
setUtilisateurs(users.data);
};
getData();
}, []);
  return (
    <div className="App">
    {utilisateurs?
      (<div>
      <ListUser utilisateurs={utilisateurs} />
      </div>): "pas d'utilisateurs!!!!"}
    </div>
  );
}

export default App;
