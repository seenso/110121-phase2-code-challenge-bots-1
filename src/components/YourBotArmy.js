import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, handleClick, dischargeBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map(b => (
            <BotCard key={b.id} bot={b} handleClick={handleClick} dischargeBot={dischargeBot}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
