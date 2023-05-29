import { useState } from "react";
import data from "./data.json";
import Card from "./Card";
import "./App.css";
import ProfileCard from "./Profile_card";

function App() {
  const [timeframe, setTimeframe] = useState("daily");
  const handleClick = (e) => {
    setTimeframe(e.target.className);
  };
  return (
    <div className="container">
      <ProfileCard handleClick={handleClick}/>
     
      <div className="main">
        {data.map((elm, i) => {
          return <Card key={i} elm={elm} timeframe={timeframe} />;
        })}
      </div>
    </div>
  );
}

export default App;
